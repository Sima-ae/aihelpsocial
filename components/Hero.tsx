'use client'

import { ArrowRight, Play, Users, Target, TrendingUp, CheckCircle, Star } from 'lucide-react'
import { useSession } from 'next-auth/react'

export function Hero() {
  const { data: session } = useSession()
  
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                          Discover the Smart{' '}
                          <span className="gradient-text">AI Help</span>{' '}
                          Marketing Platform
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                          Master Facebook, Instagram, WhatsApp, and Messenger advertising with our AI-powered training platform. Learn from real examples and track your progress.
                        </p>
              </div>

                      {/* Email Signup - Only show for non-authenticated users */}
                      {!session && (
                        <div className="space-y-4">
                          <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1">
                              <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                              />
                            </div>
                            <button className="btn-gradient px-8 py-4 rounded-xl font-semibold text-white flex items-center justify-center whitespace-nowrap">
                              Try AI Help for free
                              <ArrowRight className="w-5 h-5 ml-2" />
                            </button>
                          </div>

                          {/* Benefits */}
                          <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-600">
                            <div className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                              Free 14-day trial
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                              No credit card required
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Welcome message for authenticated users */}
                      {session && (
                        <div className="space-y-4">
                          <div className="bg-white rounded-xl p-6 shadow-sm border">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                              Welcome back, {session.user.name || 'Student'}!
                            </h3>
                            <p className="text-gray-600 mb-4">
                              Continue your Meta advertising journey with AI-powered insights and track your progress.
                            </p>
                            <div className="flex space-x-4">
                              <button className="btn-gradient px-6 py-3 rounded-lg font-semibold text-white flex items-center">
                                <Play className="w-4 h-4 mr-2" />
                                Continue Learning
                              </button>
                              <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center">
                                <Target className="w-4 h-4 mr-2" />
                                Take Quiz
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

              {/* Social Proof */}
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center text-white text-sm font-semibold">
                    A
                  </div>
                  <div className="w-10 h-10 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center text-white text-sm font-semibold">
                    B
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 font-medium">20K+ users</span>
                </div>
              </div>
            </div>

            {/* Right Content - AI Chatbot Visual */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 card-hover">
                {/* AI Robot */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-inner">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Glowing eyes */}
                    <div className="absolute top-8 left-8 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="absolute top-8 right-8 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Chat Bubbles */}
                <div className="space-y-4">
                  <div className="flex justify-start">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-2xl rounded-bl-md max-w-xs">
                      <p className="text-sm">Hello! How can I help you with Meta advertising today?</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-3 rounded-2xl rounded-br-md max-w-xs">
                      <p className="text-sm">Hi! I need help with Facebook ads</p>
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-2xl rounded-bl-md max-w-xs">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Watch Video Button */}
                <div className="mt-8 text-center">
                  <button className="bg-white border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-gray-400 transition-colors flex items-center mx-auto">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Demo
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">50+</div>
              <div className="text-gray-600">Training Modules</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">200+</div>
              <div className="text-gray-600">Real Ad Examples</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">20K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
