'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { 
  BookOpen, 
  Award, 
  Clock, 
  TrendingUp,
  Target,
  CheckCircle,
  Play,
  BarChart3
} from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'

// Mock data for demonstration - in production, this would come from API
const clientProgressData = [
  { name: 'Week 1', completed: 20 },
  { name: 'Week 2', completed: 45 },
  { name: 'Week 3', completed: 70 },
  { name: 'Week 4', completed: 85 },
]

const clientPlatformData = [
  { platform: 'Facebook', modules: 15, completed: 8, score: 87 },
  { platform: 'Instagram', modules: 12, completed: 5, score: 92 },
  { platform: 'WhatsApp', modules: 8, completed: 2, score: 78 },
  { platform: 'Messenger', modules: 6, completed: 1, score: 85 },
]

const clientRecentActivity = [
  { action: 'Completed Facebook Ads Basics', time: '2 hours ago', score: 95 },
  { action: 'Started Instagram Stories Module', time: '1 day ago', score: null },
  { action: 'Passed WhatsApp Business Quiz', time: '2 days ago', score: 88 },
  { action: 'Completed Messenger Ads Training', time: '3 days ago', score: 91 },
]

export function ClientDashboard() {
  const { data: session } = useSession()
  const [stats, setStats] = useState({
    totalModules: 0,
    completedModules: 0,
    averageScore: 0,
    timeSpent: 0
  })

  useEffect(() => {
    // Simulate API call for client-specific data
    setStats({
      totalModules: 41,
      completedModules: 16,
      averageScore: 87.5,
      timeSpent: 12
    })
  }, [])

  const completionRate = stats.totalModules > 0 ? (stats.completedModules / stats.totalModules) * 100 : 0

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">My Learning Dashboard</h2>
          <p className="text-gray-600 mt-1">Welcome back, {session?.user?.name || 'Student'}!</p>
        </div>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border card-hover">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">My Progress</p>
              <p className="text-2xl font-bold text-gray-900">{stats.completedModules}/{stats.totalModules}</p>
              <p className="text-xs text-green-600">+3 this week</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border card-hover">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <Award className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Average Score</p>
              <p className="text-2xl font-bold text-gray-900">{stats.averageScore}%</p>
              <p className="text-xs text-green-600">+5% this month</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border card-hover">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Time Spent</p>
              <p className="text-2xl font-bold text-gray-900">{stats.timeSpent}h</p>
              <p className="text-xs text-blue-600">+2h this week</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border card-hover">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Completion Rate</p>
              <p className="text-2xl font-bold text-gray-900">{completionRate.toFixed(1)}%</p>
              <p className="text-xs text-green-600">+8% this month</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Learning Progress */}
        <div className="bg-white p-6 rounded-lg shadow-sm border card-hover">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">My Learning Progress</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={clientProgressData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="completed" stroke="#3B82F6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Platform Progress */}
        <div className="bg-white p-6 rounded-lg shadow-sm border card-hover">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform Progress</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={clientPlatformData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="platform" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="completed" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm border card-hover">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold text-gray-900">My Recent Activity</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {clientRecentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b last:border-b-0">
                <div className="flex items-center">
                  <div className="p-2 bg-gray-100 rounded-full">
                    {activity.score ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <Play className="w-5 h-5 text-blue-600" />
                    )}
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900">{activity.action}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
                {activity.score && (
                  <div className="text-right">
                    <p className="font-semibold text-green-600">{activity.score}%</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg p-8 text-white">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Continue Your Learning</h2>
          <p className="text-blue-100 mb-6">
            Pick up where you left off and continue mastering Meta advertising with AI assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              <Play className="w-4 h-4 mr-2" />
              Resume Learning
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">
              <Target className="w-4 h-4 mr-2" />
              Take Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
