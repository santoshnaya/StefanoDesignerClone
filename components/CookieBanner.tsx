'use client'

import { motion } from 'framer-motion'
import { Cookie, X, Check } from 'lucide-react'

interface CookieBannerProps {
  onAccept: () => void
  onRefuse: () => void
}

export default function CookieBanner({ onAccept, onRefuse }: CookieBannerProps) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-dark-card border-t border-gray-800 p-4 md:p-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3 flex-1">
          <Cookie className="h-6 w-6 text-primary-orange mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Cookie Settings</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
              By clicking "Accept All", you consent to our use of cookies.{' '}
              <a href="#" className="text-primary-orange hover:underline">
                Learn more in our Privacy Policy
              </a>
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <button
            onClick={onRefuse}
            className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
          >
            <X className="h-4 w-4" />
            Decline
          </button>
          <button
            onClick={onAccept}
            className="flex items-center justify-center gap-2 px-6 py-2 bg-gradient-to-r from-primary-orange to-primary-red text-white rounded-lg hover:shadow-lg hover:shadow-primary-orange/25 transition-all duration-300 text-sm font-medium"
          >
            <Check className="h-4 w-4" />
            Accept All
          </button>
        </div>
      </div>
    </motion.div>
  )
}