import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const modules = await prisma.trainingModule.findMany({
      include: {
        lessons: true,
        quizzes: true,
        examples: true,
        _count: {
          select: {
            lessons: true,
            quizzes: true,
            examples: true
          }
        }
      },
      orderBy: { order: 'asc' }
    })
    
    return NextResponse.json(modules)
  } catch (error) {
    console.error('Error fetching modules:', error)
    return NextResponse.json({ error: 'Failed to fetch modules' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const module = await prisma.trainingModule.create({
      data: {
        title: data.title,
        description: data.description,
        platform: data.platform,
        difficulty: data.difficulty,
        duration: data.duration,
        order: data.order
      }
    })
    
    return NextResponse.json(module)
  } catch (error) {
    console.error('Error creating module:', error)
    return NextResponse.json({ error: 'Failed to create module' }, { status: 500 })
  }
}
