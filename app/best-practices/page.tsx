'use client'

import { useState } from 'react'
import { 
  Facebook, 
  Instagram, 
  MessageCircle, 
  Users,
  CheckCircle,
  AlertTriangle,
  Info,
  BookOpen,
  Target,
  TrendingUp,
  Users2,
  DollarSign,
  Eye,
  Heart,
  Share2
} from 'lucide-react'

interface BestPractice {
  id: string
  title: string
  description: string
  platform: string
  category: string
  importance: 'high' | 'medium' | 'low'
  tips: string[]
  examples: string[]
}

const bestPractices: BestPractice[] = [
  {
    id: '1',
    title: 'Facebook Ad Creative Best Practices',
    description: 'Essential guidelines for creating high-performing Facebook ad creatives',
    platform: 'Facebook',
    category: 'Creative',
    importance: 'high',
    tips: [
      'Use high-quality, eye-catching visuals',
      'Keep text overlay under 20% of image area',
      'Include clear call-to-action buttons',
      'Test different creative formats (image, video, carousel)',
      'Use mobile-first design approach'
    ],
    examples: [
      'Product showcase with lifestyle imagery',
      'Before/after comparison videos',
      'User-generated content featuring customers'
    ]
  },
  {
    id: '2',
    title: 'Instagram Stories Ad Optimization',
    description: 'Maximize engagement with Instagram Stories advertising',
    platform: 'Instagram',
    category: 'Creative',
    importance: 'high',
    tips: [
      'Design for vertical 9:16 aspect ratio',
      'Use bold, readable fonts',
      'Include interactive elements (polls, questions)',
      'Keep videos under 15 seconds for better completion rates',
      'Use Instagram-native design elements'
    ],
    examples: [
      'Behind-the-scenes brand content',
      'Product demonstrations in Stories format',
      'Influencer takeovers and collaborations'
    ]
  },
  {
    id: '3',
    title: 'WhatsApp Business Messaging Guidelines',
    description: 'Best practices for WhatsApp Business API messaging',
    platform: 'WhatsApp',
    category: 'Messaging',
    importance: 'high',
    tips: [
      'Keep messages conversational and personal',
      'Respond within 24-hour window for session messages',
      'Use rich media (images, videos, documents) effectively',
      'Implement chatbot automation for common queries',
      'Respect user privacy and opt-out preferences'
    ],
    examples: [
      'Order confirmations with tracking information',
      'Customer support with quick resolution',
      'Product catalogs with interactive buttons'
    ]
  },
  {
    id: '4',
    title: 'Audience Targeting Strategies',
    description: 'Advanced targeting techniques across Meta platforms',
    platform: 'All Platforms',
    category: 'Targeting',
    importance: 'high',
    tips: [
      'Start broad, then narrow based on performance data',
      'Use Lookalike Audiences based on high-value customers',
      'Combine demographic and interest targeting',
      'Test different audience sizes (1% vs 5% lookalikes)',
      'Exclude existing customers to avoid waste'
    ],
    examples: [
      'Lookalike audiences based on purchasers',
      'Interest-based targeting for new product launches',
      'Behavioral targeting for seasonal campaigns'
    ]
  },
  {
    id: '5',
    title: 'Budget Optimization Techniques',
    description: 'Maximize ROI with smart budget allocation',
    platform: 'All Platforms',
    category: 'Budget',
    importance: 'medium',
    tips: [
      'Use automatic bidding for initial learning phase',
      'Implement cost caps once you have performance data',
      'Allocate more budget to top-performing placements',
      'Monitor frequency to prevent ad fatigue',
      'Test different budget amounts to find optimal spend'
    ],
    examples: [
      'Daily budget optimization based on performance',
      'Bid cap implementation for cost control',
      'Budget reallocation between campaigns'
    ]
  },
  {
    id: '6',
    title: 'Conversion Tracking Setup',
    description: 'Proper conversion tracking implementation',
    platform: 'All Platforms',
    category: 'Tracking',
    importance: 'high',
    tips: [
      'Install Facebook Pixel correctly on all pages',
      'Set up conversion events (purchase, lead, add to cart)',
      'Use Conversions API for server-side tracking',
      'Implement proper attribution modeling',
      'Test tracking with Facebook Pixel Helper'
    ],
    examples: [
      'E-commerce purchase tracking',
      'Lead generation form submissions',
      'App install and in-app event tracking'
    ]
  }
]

const platformIcons = {
  Facebook: Facebook,
  Instagram: Instagram,
  WhatsApp: MessageCircle,
  'All Platforms': Users,
}

const importanceColors = {
  high: 'text-red-600 bg-red-100',
  medium: 'text-yellow-600 bg-yellow-100',
  low: 'text-green-600 bg-green-100',
}

const categoryIcons = {
  Creative: Eye,
  Messaging: MessageCircle,
  Targeting: Target,
  Budget: DollarSign,
  Tracking: TrendingUp,
}

export default function BestPractices() {
  const [selectedPlatform, setSelectedPlatform] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImportance, setSelectedImportance] = useState('all')

  const filteredPractices = bestPractices.filter(practice => {
    const platformMatch = selectedPlatform === 'all' || practice.platform === selectedPlatform
    const categoryMatch = selectedCategory === 'all' || practice.category === selectedCategory
    const importanceMatch = selectedImportance === 'all' || practice.importance === selectedImportance
    return platformMatch && categoryMatch && importanceMatch
  })

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Best Practices</h1>
        <div className="flex items-center space-x-4">
          <select
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Platforms</option>
            <option value="Facebook">Facebook</option>
            <option value="Instagram">Instagram</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="All Platforms">All Platforms</option>
          </select>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Categories</option>
            <option value="Creative">Creative</option>
            <option value="Messaging">Messaging</option>
            <option value="Targeting">Targeting</option>
            <option value="Budget">Budget</option>
            <option value="Tracking">Tracking</option>
          </select>
          <select
            value={selectedImportance}
            onChange={(e) => setSelectedImportance(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Importance</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Practices</p>
              <p className="text-2xl font-bold text-gray-900">{bestPractices.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center">
            <div className="p-2 bg-red-100 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">High Priority</p>
              <p className="text-2xl font-bold text-gray-900">
                {bestPractices.filter(p => p.importance === 'high').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Platforms Covered</p>
              <p className="text-2xl font-bold text-gray-900">4</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Categories</p>
              <p className="text-2xl font-bold text-gray-900">5</p>
            </div>
          </div>
        </div>
      </div>

      {/* Best Practices Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredPractices.map((practice) => {
          const PlatformIcon = platformIcons[practice.platform as keyof typeof platformIcons]
          const CategoryIcon = categoryIcons[practice.category as keyof typeof categoryIcons]
          const importanceColorClass = importanceColors[practice.importance]

          return (
            <div key={practice.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <PlatformIcon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <CategoryIcon className="w-5 h-5 text-gray-600" />
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${importanceColorClass}`}>
                    {practice.importance.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">{practice.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{practice.description}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-1 text-green-600" />
                      Key Tips
                    </h4>
                    <ul className="space-y-1">
                      {practice.tips.slice(0, 3).map((tip, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {tip}
                        </li>
                      ))}
                      {practice.tips.length > 3 && (
                        <li className="text-sm text-gray-500 italic">
                          +{practice.tips.length - 3} more tips...
                        </li>
                      )}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2 flex items-center">
                      <Info className="w-4 h-4 mr-1 text-blue-600" />
                      Examples
                    </h4>
                    <ul className="space-y-1">
                      {practice.examples.slice(0, 2).map((example, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start">
                          <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {example}
                        </li>
                      ))}
                      {practice.examples.length > 2 && (
                        <li className="text-sm text-gray-500 italic">
                          +{practice.examples.length - 2} more examples...
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center">
                      <PlatformIcon className="w-3 h-3 mr-1" />
                      {practice.platform}
                    </span>
                    <span className="flex items-center">
                      <CategoryIcon className="w-3 h-3 mr-1" />
                      {practice.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {filteredPractices.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No practices found</h3>
          <p className="text-gray-500">Try adjusting your filters to see more best practices.</p>
        </div>
      )}

      {/* Additional Resources */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg p-8 text-white">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Need More Help?</h2>
          <p className="text-blue-100 mb-6">
            Access additional resources, case studies, and expert insights to take your Meta advertising to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View Case Studies
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Download Resources
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
