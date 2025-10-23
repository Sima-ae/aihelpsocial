import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession()
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get user-specific progress data
    const userProgress = await prisma.progress.findMany({
      where: {
        userId: session.user.id
      }
    })

    const completedModules = await prisma.completedModule.findMany({
      where: {
        userId: session.user.id
      },
      include: {
        module: true
      }
    })

    const quizAttempts = await prisma.quizAttempt.findMany({
      where: {
        userId: session.user.id
      },
      include: {
        quiz: true
      },
      orderBy: {
        completedAt: 'desc'
      },
      take: 10
    })

    return NextResponse.json({
      progress: userProgress,
      completedModules,
      recentQuizAttempts: quizAttempts
    })
  } catch (error) {
    console.error('Error fetching user progress:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession()
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { moduleId, progress, completed } = body

    // Update or create progress record
    const progressRecord = await prisma.progress.upsert({
      where: {
        userId_moduleId: {
          userId: session.user.id,
          moduleId: moduleId
        }
      },
      update: {
        progress: progress,
        completed: completed,
        updatedAt: new Date()
      },
      create: {
        userId: session.user.id,
        moduleId: moduleId,
        progress: progress,
        completed: completed
      }
    })

    // If module is completed, add to completed modules
    if (completed) {
      await prisma.completedModule.upsert({
        where: {
          userId_moduleId: {
            userId: session.user.id,
            moduleId: moduleId
          }
        },
        update: {
          completedAt: new Date()
        },
        create: {
          userId: session.user.id,
          moduleId: moduleId,
          completedAt: new Date()
        }
      })
    }

    return NextResponse.json({ success: true, progress: progressRecord })
  } catch (error) {
    console.error('Error updating user progress:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
