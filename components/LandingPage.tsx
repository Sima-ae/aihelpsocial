'use client'

import { ArrowRight, Play, Users, Target, TrendingUp, CheckCircle, Star, BookOpen, Award, BarChart3, Bot, MessageCircle, Zap, Shield, Globe } from 'lucide-react'
import Link from 'next/link'

export function LandingPage() {
  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                    Discover the Smart{' '}
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                      AI Neuro
                    </span>{' '}
                    Chatbot
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                    Master Facebook, Instagram, WhatsApp, and Messenger advertising with our AI-powered training platform. Learn from real examples and track your progress.
                  </p>
                </div>

                {/* Email Input & CTA */}
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg shadow-sm"
                      />
                    </div>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center whitespace-nowrap shadow-lg">
                      Try Chatbot Neuro for free
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

                  {/* Social Proof */}
                  <div className="flex items-center space-x-4">
                    <div className="flex -space-x-2">
                      <div className="w-10 h-10 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center text-white text-sm font-semibold">
                        A
                      </div>
                      <div className="w-10 h-10 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center text-white text-sm font-semibold">
                        B
                      </div>
                      <div className="w-10 h-10 bg-green-500 rounded-full border-2 border-white flex items-center justify-center text-white text-sm font-semibold">
                        C
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
              </div>

              {/* Right Content - AI Robot Visual */}
              <div className="relative">
                <div className="relative">
                  {/* Background Gradient Circle */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl scale-110"></div>
                  
                  {/* Main Robot Container */}
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
                    {/* AI Robot */}
                    <div className="flex justify-center mb-8">
                      <div className="relative">
                        {/* Robot Head */}
                        <div className="w-40 h-40 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-inner">
                            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Glowing Eyes */}
                        <div className="absolute top-12 left-12 w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50"></div>
                        <div className="absolute top-12 right-12 w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50"></div>
                        
                        {/* Robot Body */}
                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-16 bg-gradient-to-b from-gray-200 to-gray-300 rounded-lg"></div>
                      </div>
                    </div>

                    {/* Chat Interface */}
                    <div className="space-y-4">
                      <div className="flex justify-start">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-2xl rounded-bl-md max-w-xs shadow-lg">
                          <p className="text-sm">Hello! How can I help you with Meta advertising today?</p>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-3 rounded-2xl rounded-br-md max-w-xs shadow-lg">
                          <p className="text-sm">Hi Neuro! I need your help</p>
                        </div>
                      </div>

                      <div className="flex justify-start">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-2xl rounded-bl-md max-w-xs shadow-lg">
                          <p className="text-sm">Great! Let me show you our Facebook Ads training modules...</p>
                        </div>
                      </div>

                      {/* Typing Indicator */}
                      <div className="flex justify-start">
                        <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-bl-md">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Watch Video Button */}
                    <div className="mt-8 text-center">
                      <button className="bg-white border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-gray-300 transition-colors flex items-center mx-auto shadow-sm">
                        <Play className="w-4 h-4 mr-2" />
                        Watch video
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Everything you need to master Meta advertising
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our AI-powered platform provides comprehensive training, real examples, and personalized insights to help you succeed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Training</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Step-by-step guides for Facebook, Instagram, WhatsApp, and Messenger advertising with real-world examples.
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Feature 2 */}
              <div className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-green-200 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Real Ad Examples</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Study actual Meta advertising campaigns with performance metrics and optimization strategies.
                </p>
                <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                  <span>Explore examples</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Feature 3 */}
              <div className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-purple-200 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Analytics</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Get personalized insights and recommendations powered by AI to optimize your campaigns.
                </p>
                <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                  <span>View analytics</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Feature 4 */}
              <div className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-orange-200 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Best Practices</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Platform-specific guidelines and proven strategies from industry experts and successful campaigns.
                </p>
                <div className="flex items-center text-orange-600 font-semibold group-hover:text-orange-700 transition-colors">
                  <span>See best practices</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Feature 5 */}
              <div className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-red-200 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance Tracking</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Monitor your progress with detailed analytics and track your improvement across all platforms.
                </p>
                <div className="flex items-center text-red-600 font-semibold group-hover:text-red-700 transition-colors">
                  <span>Track progress</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Feature 6 */}
              <div className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-indigo-200 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Support</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Connect with other marketers, share experiences, and get help from our community of experts.
                </p>
                <div className="flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700 transition-colors">
                  <span>Join community</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Trusted by marketers worldwide
              </h2>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Join thousands of successful marketers who have improved their Meta advertising with AI Help.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="text-blue-100 font-medium">Training Modules</div>
              </div>
              <div className="text-center group">
                <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">200+</div>
                <div className="text-blue-100 font-medium">Real Ad Examples</div>
              </div>
              <div className="text-center group">
                <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">20K+</div>
                <div className="text-blue-100 font-medium">Active Users</div>
              </div>
              <div className="text-center group">
                <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">95%</div>
                <div className="text-blue-100 font-medium">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to transform your Meta advertising?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Start your free trial today and see how AI Help can improve your campaign performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/auth/signin"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center whitespace-nowrap shadow-lg hover:shadow-xl"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-gray-400 transition-colors flex items-center justify-center hover:bg-gray-50">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
