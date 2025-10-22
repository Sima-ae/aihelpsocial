'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'
import {
  BookOpen,
  BarChart3,
  Target,
  Settings,
  Award,
  Facebook,
  Instagram,
  MessageCircle,
  Users,
  LogOut,
  User,
  Menu,
  X
} from 'lucide-react'
import { useState } from 'react'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: BarChart3 },
  { name: 'Training', href: '/training', icon: BookOpen },
  { name: 'Analytics', href: '/analytics', icon: Target },
  { name: 'Best Practices', href: '/best-practices', icon: Award },
  { name: 'Settings', href: '/settings', icon: Settings },
]

const platforms = [
  { name: 'Facebook', icon: Facebook, color: 'text-blue-600' },
  { name: 'Instagram', icon: Instagram, color: 'text-pink-600' },
  { name: 'WhatsApp', icon: MessageCircle, color: 'text-green-600' },
  { name: 'Messenger', icon: Users, color: 'text-blue-500' },
]

export function Header() {
  const pathname = usePathname()
  const { data: session, status } = useSession()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleSignOut = () => {
    signOut({ callbackUrl: '/' })
  }

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-bold text-gray-900">AI Help</span>
          </Link>

          {/* Main Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {session ? (
              // Authenticated user navigation
              navigation.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                )
              })
            ) : (
              // Non-authenticated user navigation
              <>
                <Link
                  href="/#features"
                  className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                >
                  <span>Features</span>
                </Link>
                <Link
                  href="/#pricing"
                  className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                >
                  <span>Pricing</span>
                </Link>
                <Link
                  href="/#about"
                  className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                >
                  <span>About</span>
                </Link>
              </>
            )}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Platform Icons - Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              {platforms.map((platform) => {
                const Icon = platform.icon
                return (
                  <div
                    key={platform.name}
                    className={`p-2 rounded-lg hover:bg-gray-100 transition-colors ${platform.color}`}
                    title={platform.name}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                )
              })}
            </div>

            {/* Auth Buttons or User Menu */}
            {status === 'loading' ? (
              <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
            ) : session ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    {session.user.name?.charAt(0) || session.user.email?.charAt(0)}
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-sm font-medium text-gray-900">
                      {session.user.name || 'User'}
                    </p>
                    <p className="text-xs text-gray-500">
                      {session.user.role}
                    </p>
                  </div>
                </div>
                
                {/* Admin Link */}
                {(session.user.role === 'SUPER_ADMIN' || session.user.role === 'ADMIN') && (
                  <Link
                    href="/admin"
                    className="px-3 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full hover:bg-red-200 transition-colors"
                  >
                    Admin
                  </Link>
                )}
                
                <button
                  onClick={handleSignOut}
                  className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                  title="Sign Out"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  href="/auth/signin"
                  className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/auth/signin"
                  className="btn-gradient px-4 py-2 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  Register
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              {session ? (
                // Authenticated user mobile navigation
                navigation.map((item) => {
                  const Icon = item.icon
                  const isActive = pathname === item.href
                  
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  )
                })
              ) : (
                // Non-authenticated user mobile navigation
                <>
                  <Link
                    href="/#features"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  >
                    <span>Features</span>
                  </Link>
                  <Link
                    href="/#pricing"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  >
                    <span>Pricing</span>
                  </Link>
                  <Link
                    href="/#about"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  >
                    <span>About</span>
                  </Link>
                </>
              )}
            </div>
            
            {/* Mobile Platform Icons */}
            <div className="flex items-center justify-center space-x-4 mt-4 pt-4 border-t border-gray-200">
              {platforms.map((platform) => {
                const Icon = platform.icon
                return (
                  <div
                    key={platform.name}
                    className={`p-2 rounded-lg hover:bg-gray-100 transition-colors ${platform.color}`}
                    title={platform.name}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
