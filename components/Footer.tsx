'use client'

import Link from 'next/link'
import { Facebook, Instagram, MessageCircle, Users, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold">AI Help</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              AI-powered marketing training platform for Meta advertising across Facebook, Instagram, WhatsApp, and Messenger.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Users className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/training" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Training Modules
              </Link>
              <Link href="/analytics" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Analytics
              </Link>
              <Link href="/best-practices" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Best Practices
              </Link>
              <Link href="/settings" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Settings
              </Link>
            </div>
          </div>

          {/* Platform Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Platform Support</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Facebook className="w-4 h-4 text-blue-600" />
                <span>Facebook Ads</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Instagram className="w-4 h-4 text-pink-600" />
                <span>Instagram Marketing</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <MessageCircle className="w-4 h-4 text-green-600" />
                <span>WhatsApp Business</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Users className="w-4 h-4 text-blue-500" />
                <span>Messenger Ads</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4" />
                <span>support@aihelp.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © 2024 AI Help. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
