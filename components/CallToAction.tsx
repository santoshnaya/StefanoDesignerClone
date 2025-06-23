'use client'

import { useEffect, useRef } from 'react'
import { Rocket } from 'lucide-react'

const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll')
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animated')
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-dark-card to-dark-lighter rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          {/* Background Decorations */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-primary-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary-red/10 rounded-full blur-3xl"></div>
          
          {/* Content */}
          <div className="relative z-10 space-y-8">
            {/* Icon */}
            <div className="animate-on-scroll flex justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-orange to-primary-red rounded-full flex items-center justify-center">
                <Rocket className="w-10 h-10 text-white" />
              </div>
            </div>

            {/* Header */}
            <div className="animate-on-scroll space-y-4">
              <p className="text-sm text-primary-orange font-medium tracking-wide uppercase">
                LET'S TAKE ACTION
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Let's launch your project!
              </h2>
            </div>

            {/* Description */}
            <div className="animate-on-scroll">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Schedule a 30-minute session for us to explore your goals together and identify key needs to move your project forward.
              </p>
            </div>

            {/* CTA Button */}
            <div className="animate-on-scroll pt-4">
              <button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-primary-orange to-primary-red text-white px-10 py-4 rounded-full font-medium text-lg hover:shadow-lg hover:shadow-primary-orange/25 transition-all duration-300 hover:scale-105"
              >
                Tell me about your project
              </button>
            </div>

            {/* Additional Info */}
            <div className="animate-on-scroll pt-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-white">Free</div>
                  <div className="text-sm text-gray-400">Consultation</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-white">30min</div>
                  <div className="text-sm text-gray-400">Discovery Call</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-white">24h</div>
                  <div className="text-sm text-gray-400">Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction