'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { 
  Play, 
  Pause, 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  Target, 
  Award,
  Clock,
  CheckCircle,
  Star,
  Share2,
  Download
} from 'lucide-react'

interface Lesson {
  id: string
  title: string
  content: string
  order: number
}

interface Quiz {
  id: string
  title: string
  questions: QuizQuestion[]
}

interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation?: string
}

interface AdExample {
  id: string
  title: string
  description: string
  imageUrl?: string
  videoUrl?: string
  platform: string
  adType: string
  metrics: any
}

interface TrainingModule {
  id: string
  title: string
  description: string
  platform: string
  difficulty: string
  duration: number
  lessons: Lesson[]
  quizzes: Quiz[]
  examples: AdExample[]
}

export default function ModulePage() {
  const params = useParams()
  const [module, setModule] = useState<TrainingModule | null>(null)
  const [currentLesson, setCurrentLesson] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchModule = async () => {
      try {
        const response = await fetch(`/api/modules/${params.id}`)
        if (response.ok) {
          const data = await response.json()
          setModule(data)
        }
      } catch (error) {
        console.error('Error fetching module:', error)
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      fetchModule()
    }
  }, [params.id])

  const handleNextLesson = () => {
    if (module && currentLesson < module.lessons.length - 1) {
      setCurrentLesson(currentLesson + 1)
      setProgress(((currentLesson + 1) / module.lessons.length) * 100)
    }
  }

  const handlePrevLesson = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1)
      setProgress((currentLesson / module.lessons.length) * 100)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!module) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Module not found</h2>
        <p className="text-gray-600">The requested training module could not be found.</p>
      </div>
    )
  }

  const currentLessonData = module.lessons[currentLesson]

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{module.title}</h1>
            <p className="text-gray-600 mt-2">{module.description}</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-6 text-sm text-gray-600">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {module.duration} minutes
          </div>
          <div className="flex items-center">
            <BookOpen className="w-4 h-4 mr-1" />
            {module.lessons.length} lessons
          </div>
          <div className="flex items-center">
            <Target className="w-4 h-4 mr-1" />
            {module.quizzes.length} quizzes
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 mr-1" />
            {module.examples.length} examples
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex items-center justify-between text-sm mb-1">
            <span className="text-gray-600">Progress</span>
            <span className="font-medium text-gray-900">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border p-4 sticky top-4">
            <h3 className="font-semibold text-gray-900 mb-4">Lessons</h3>
            <div className="space-y-2">
              {module.lessons.map((lesson, index) => (
                <button
                  key={lesson.id}
                  onClick={() => {
                    setCurrentLesson(index)
                    setProgress((index / module.lessons.length) * 100)
                  }}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    index === currentLesson
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{lesson.title}</span>
                    {index < currentLesson && (
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Quizzes */}
            {module.quizzes.length > 0 && (
              <div className="mt-6">
                <h3 className="font-semibold text-gray-900 mb-4">Quizzes</h3>
                <div className="space-y-2">
                  {module.quizzes.map((quiz) => (
                    <button
                      key={quiz.id}
                      className="w-full text-left p-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{quiz.title}</span>
                        <Target className="w-4 h-4 text-gray-400" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-sm border">
            {/* Lesson Header */}
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {currentLessonData?.title}
                  </h2>
                  <p className="text-gray-600 mt-1">
                    Lesson {currentLesson + 1} of {module.lessons.length}
                  </p>
                </div>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Lesson Content */}
            <div className="p-6">
              <div className="prose max-w-none">
                <div
                  dangerouslySetInnerHTML={{
                    __html: currentLessonData?.content || 'No content available'
                  }}
                />
              </div>
            </div>

            {/* Navigation */}
            <div className="p-6 border-t bg-gray-50">
              <div className="flex items-center justify-between">
                <button
                  onClick={handlePrevLesson}
                  disabled={currentLesson === 0}
                  className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Previous
                </button>

                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">
                    {currentLesson + 1} / {module.lessons.length}
                  </span>
                </div>

                <button
                  onClick={handleNextLesson}
                  disabled={currentLesson === module.lessons.length - 1}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Ad Examples */}
          {module.examples.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Real Ad Examples</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {module.examples.slice(0, 4).map((example) => (
                  <div key={example.id} className="bg-white rounded-lg shadow-sm border p-4">
                    <h4 className="font-medium text-gray-900 mb-2">{example.title}</h4>
                    <p className="text-gray-600 text-sm mb-3">{example.description}</p>
                    {example.imageUrl && (
                      <div className="aspect-video bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                        <span className="text-gray-500">Ad Preview</span>
                      </div>
                    )}
                    <div className="text-xs text-gray-500">
                      Platform: {example.platform} | Type: {example.adType}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
