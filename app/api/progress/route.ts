import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    const progress = await prisma.progress.upsert({
      where: {
        userId_moduleId: {
          userId: data.userId,
          moduleId: data.moduleId
        }
      },
      update: {
        completed: data.completed,
        score: data.score,
        timeSpent: data.timeSpent
      },
      create: {
        userId: data.userId,
        moduleId: data.moduleId,
        completed: data.completed,
        score: data.score,
        timeSpent: data.timeSpent
      }
    })

    // If module is completed, add to completed modules
    if (data.completed) {
      await prisma.completedModule.upsert({
        where: {
          userId_moduleId: {
            userId: data.userId,
            moduleId: data.moduleId
          }
        },
        update: {
          score: data.score,
          timeSpent: data.timeSpent
        },
        create: {
          userId: data.userId,
          moduleId: data.moduleId,
          score: data.score,
          timeSpent: data.timeSpent
        }
      })
    }

    return NextResponse.json(progress)
  } catch (error) {
    console.error('Error updating progress:', error)
    return NextResponse.json({ error: 'Failed to update progress' }, { status: 500 })
  }
}
