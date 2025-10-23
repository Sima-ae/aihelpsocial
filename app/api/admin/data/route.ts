import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession()
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Only ADMIN and SUPER_ADMIN can access admin data
    if (session.user.role !== 'ADMIN' && session.user.role !== 'SUPER_ADMIN') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type') || 'overview'

    switch (type) {
      case 'overview':
        const totalUsers = await prisma.user.count()
        const totalModules = await prisma.trainingModule.count()
        const totalProgress = await prisma.progress.count()
        const completedModules = await prisma.completedModule.count()
        
        return NextResponse.json({
          totalUsers,
          totalModules,
          totalProgress,
          completedModules,
          completionRate: totalProgress > 0 ? (completedModules / totalProgress) * 100 : 0
        })

      case 'users':
        const users = await prisma.user.findMany({
          select: {
            id: true,
            email: true,
            name: true,
            role: true,
            createdAt: true,
            _count: {
              select: {
                progress: true,
                completedModules: true,
                quizAttempts: true
              }
            }
          },
          orderBy: {
            createdAt: 'desc'
          }
        })
        
        return NextResponse.json({ users })

      case 'modules':
        const modules = await prisma.trainingModule.findMany({
          include: {
            _count: {
              select: {
                lessons: true,
                quizzes: true
              }
            }
          },
          orderBy: {
            createdAt: 'desc'
          }
        })
        
        return NextResponse.json({ modules })

      case 'analytics':
        const userGrowth = await prisma.user.groupBy({
          by: ['createdAt'],
          _count: {
            id: true
          },
          orderBy: {
            createdAt: 'asc'
          }
        })

        const moduleCompletions = await prisma.completedModule.groupBy({
          by: ['completedAt'],
          _count: {
            id: true
          },
          orderBy: {
            completedAt: 'asc'
          }
        })

        return NextResponse.json({
          userGrowth,
          moduleCompletions
        })

      default:
        return NextResponse.json({ error: 'Invalid type parameter' }, { status: 400 })
    }
  } catch (error) {
    console.error('Error fetching admin data:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession()
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Only SUPER_ADMIN can delete data
    if (session.user.role !== 'SUPER_ADMIN') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const body = await request.json()
    const { type, id } = body

    if (!type || !id) {
      return NextResponse.json({ error: 'Type and ID required' }, { status: 400 })
    }

    switch (type) {
      case 'user':
        await prisma.user.delete({
          where: { id }
        })
        break

      case 'module':
        await prisma.trainingModule.delete({
          where: { id }
        })
        break

      case 'quiz':
        await prisma.quiz.delete({
          where: { id }
        })
        break

      case 'progress':
        await prisma.progress.delete({
          where: { id }
        })
        break

      case 'quiz-attempt':
        await prisma.quizAttempt.delete({
          where: { id }
        })
        break

      default:
        return NextResponse.json({ error: 'Invalid type' }, { status: 400 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting data:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
