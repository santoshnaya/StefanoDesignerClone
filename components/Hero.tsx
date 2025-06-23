'use client'

import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className={`lg:w-1/2 space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Webflow Expert Badge */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg">
                <span className="text-sm font-medium">Webflow Expert</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">G</span>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-white text-sm font-medium ml-1">5/5</span>
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">Your tailor-made website by a freelance </span>
                <span className="gradient-text">Webflow</span>
                <span className="text-white"> developer</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                Freelance web designer & Webflow developer, UX/UI expert, I transform your digital strategy 
                into tailor-made websites, combining modern design and personalized features.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button 
                onClick={scrollToContact}
                className="bg-transparent border-2 border-primary-orange text-primary-orange px-8 py-4 rounded-full font-medium text-lg hover:bg-primary-orange hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary-orange/25"
              >
                Schedule a call
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className={`lg:w-1/2 mt-12 lg:mt-0 flex justify-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[600px] bg-gray-200 rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full bg-cover bg-center bg-no-repeat" 
                       style={{
                         backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'%3E%3Crect width='400' height='500' fill='%23e5e7eb'/%3E%3Cpath d='M200 150c-27.614 0-50 22.386-50 50s22.386 50 50 50 50-22.386 50-50-22.386-50-50-50zm0 160c-44.183 0-80 35.817-80 80v60h160v-60c0-44.183-35.817-80-80-80z' fill='%23d1d5db'/%3E%3C/svg%3E")`
                       }}>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-orange/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-red/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero