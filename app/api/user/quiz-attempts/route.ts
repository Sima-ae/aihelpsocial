import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession()
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const quizId = searchParams.get('quizId')

    let whereClause: any = { userId: session.user.id }
    
    // If user is not admin/super admin, only show their own attempts
    if (session.user.role === 'CLIENT') {
      whereClause.userId = session.user.id
    } else if (quizId) {
      whereClause.quizId = quizId
    }

    const quizAttempts = await prisma.quizAttempt.findMany({
      where: whereClause,
      include: {
        quiz: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      },
      orderBy: {
        completedAt: 'desc'
      }
    })

    return NextResponse.json({ quizAttempts })
  } catch (error) {
    console.error('Error fetching quiz attempts:', error)
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
    const { quizId, answers, score } = body

    // Create quiz attempt
    const quizAttempt = await prisma.quizAttempt.create({
      data: {
        userId: session.user.id,
        quizId: quizId,
        answers: answers,
        score: score,
        completedAt: new Date()
      },
      include: {
        quiz: true
      }
    })

    return NextResponse.json({ success: true, quizAttempt })
  } catch (error) {
    console.error('Error creating quiz attempt:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession()
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Only SUPER_ADMIN can delete quiz attempts
    if (session.user.role !== 'SUPER_ADMIN') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const { searchParams } = new URL(request.url)
    const attemptId = searchParams.get('id')

    if (!attemptId) {
      return NextResponse.json({ error: 'Attempt ID required' }, { status: 400 })
    }

    await prisma.quizAttempt.delete({
      where: {
        id: attemptId
      }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting quiz attempt:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
