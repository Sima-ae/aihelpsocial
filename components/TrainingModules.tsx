'use client'

import { useState, useEffect } from 'react'
import { 
  Facebook, 
  Instagram, 
  MessageCircle, 
  Users,
  Play,
  Clock,
  Star,
  ChevronRight,
  BookOpen,
  Target,
  Award
} from 'lucide-react'

interface TrainingModule {
  id: string
  title: string
  description: string
  platform: 'FACEBOOK' | 'INSTAGRAM' | 'WHATSAPP' | 'MESSENGER'
  difficulty: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED'
  duration: number
  completed: boolean
  progress: number
  lessons: number
  quizzes: number
  examples: number
}

const platformIcons = {
  FACEBOOK: Facebook,
  INSTAGRAM: Instagram,
  WHATSAPP: MessageCircle,
  MESSENGER: Users,
}

const platformColors = {
  FACEBOOK: 'text-blue-600 bg-blue-100',
  INSTAGRAM: 'text-pink-600 bg-pink-100',
  WHATSAPP: 'text-green-600 bg-green-100',
  MESSENGER: 'text-purple-600 bg-purple-100',
}

const difficultyColors = {
  BEGINNER: 'text-green-600 bg-green-100',
  INTERMEDIATE: 'text-yellow-600 bg-yellow-100',
  ADVANCED: 'text-red-600 bg-red-100',
}

// Mock data for demonstration
const mockModules: TrainingModule[] = [
  {
    id: '1',
    title: 'Facebook Ads Fundamentals',
    description: 'Learn the basics of Facebook advertising, including campaign setup, targeting, and optimization.',
    platform: 'FACEBOOK',
    difficulty: 'BEGINNER',
    duration: 45,
    completed: true,
    progress: 100,
    lessons: 8,
    quizzes: 2,
    examples: 12
  },
  {
    id: '2',
    title: 'Instagram Stories Advertising',
    description: 'Master Instagram Stories ads with creative best practices and performance optimization.',
    platform: 'INSTAGRAM',
    difficulty: 'INTERMEDIATE',
    duration: 30,
    completed: false,
    progress: 60,
    lessons: 6,
    quizzes: 1,
    examples: 8
  },
  {
    id: '3',
    title: 'WhatsApp Business API',
    description: 'Complete guide to WhatsApp Business API integration and messaging strategies.',
    platform: 'WHATSAPP',
    difficulty: 'ADVANCED',
    duration: 60,
    completed: false,
    progress: 25,
    lessons: 10,
    quizzes: 3,
    examples: 15
  },
  {
    id: '4',
    title: 'Messenger Ads & Chatbots',
    description: 'Learn to create engaging Messenger ads and implement chatbot automation.',
    platform: 'MESSENGER',
    difficulty: 'INTERMEDIATE',
    duration: 40,
    completed: false,
    progress: 0,
    lessons: 7,
    quizzes: 2,
    examples: 10
  },
  {
    id: '5',
    title: 'Advanced Facebook Targeting',
    description: 'Deep dive into Facebook\'s advanced targeting options and audience insights.',
    platform: 'FACEBOOK',
    difficulty: 'ADVANCED',
    duration: 50,
    completed: false,
    progress: 0,
    lessons: 9,
    quizzes: 3,
    examples: 18
  },
  {
    id: '6',
    title: 'Instagram Reels Advertising',
    description: 'Create compelling Reels ads that drive engagement and conversions.',
    platform: 'INSTAGRAM',
    difficulty: 'INTERMEDIATE',
    duration: 35,
    completed: false,
    progress: 0,
    lessons: 5,
    quizzes: 2,
    examples: 12
  }
]

export function TrainingModules() {
  const [modules, setModules] = useState<TrainingModule[]>([])
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all')

  useEffect(() => {
    // Simulate API call
    setModules(mockModules)
  }, [])

  const filteredModules = modules.filter(module => {
    const platformMatch = selectedPlatform === 'all' || module.platform === selectedPlatform
    const difficultyMatch = selectedDifficulty === 'all' || module.difficulty === selectedDifficulty
    return platformMatch && difficultyMatch
  })

  const platformStats = modules.reduce((acc, module) => {
    if (!acc[module.platform]) {
      acc[module.platform] = { total: 0, completed: 0 }
    }
    acc[module.platform].total++
    if (module.completed) acc[module.platform].completed++
    return acc
  }, {} as Record<string, { total: number; completed: number }>)

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Training Modules</h2>
        <div className="flex items-center space-x-4">
          <select
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Platforms</option>
            <option value="FACEBOOK">Facebook</option>
            <option value="INSTAGRAM">Instagram</option>
            <option value="WHATSAPP">WhatsApp</option>
            <option value="MESSENGER">Messenger</option>
          </select>
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Levels</option>
            <option value="BEGINNER">Beginner</option>
            <option value="INTERMEDIATE">Intermediate</option>
            <option value="ADVANCED">Advanced</option>
          </select>
        </div>
      </div>

      {/* Platform Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(platformStats).map(([platform, stats]) => {
          const Icon = platformIcons[platform as keyof typeof platformIcons]
          const colorClass = platformColors[platform as keyof typeof platformColors]
          const completionRate = stats.total > 0 ? (stats.completed / stats.total) * 100 : 0

          return (
            <div key={platform} className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between mb-2">
                <div className={`p-2 rounded-lg ${colorClass}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-gray-600">{completionRate.toFixed(0)}%</span>
              </div>
              <h3 className="font-semibold text-gray-900 capitalize">{platform.toLowerCase()}</h3>
              <p className="text-sm text-gray-500">{stats.completed}/{stats.total} completed</p>
            </div>
          )
        })}
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredModules.map((module) => {
          const Icon = platformIcons[module.platform]
          const platformColorClass = platformColors[module.platform]
          const difficultyColorClass = difficultyColors[module.difficulty]

          return (
            <div key={module.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-2 rounded-lg ${platformColorClass}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${difficultyColorClass}`}>
                      {module.difficulty}
                    </span>
                    {module.completed && (
                      <div className="p-1 bg-green-100 rounded-full">
                        <Award className="w-4 h-4 text-green-600" />
                      </div>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">{module.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{module.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {module.duration} min
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      {module.lessons}
                    </div>
                    <div className="flex items-center">
                      <Target className="w-4 h-4 mr-1" />
                      {module.quizzes}
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium text-gray-900">{module.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${module.progress}%` }}
                    />
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                  {module.progress > 0 ? 'Continue' : 'Start'} Module
                  <ChevronRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {filteredModules.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No modules found</h3>
          <p className="text-gray-500">Try adjusting your filters to see more training modules.</p>
        </div>
      )}
    </div>
  )
}
