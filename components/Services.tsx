'use client'

import { useEffect, useRef } from 'react'
import { Globe, Palette, Search, FileText } from 'lucide-react'

const Services = () => {
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

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Webflow Development',
      description: 'Expert developer in Webflow, I integrate and develop your mockups and landing pages in responsive design with Webflow. I offer support, optimization, bug fixes.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UX/UI Design',
      description: 'Create stunning user experiences with modern design principles. Focus on user-centered design and accessibility.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'SEO Optimizations',
      description: 'Improve your website visibility and search engine rankings with technical SEO and content optimization.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Graphics',
      description: 'Creative graphic design solutions for your brand identity, marketing materials, and digital assets.',
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <section ref={sectionRef} id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-red rounded-full flex items-center justify-center">
              <Globe className="w-8 h-8 text-white" />
            </div>
          </div>
          <p className="text-sm text-primary-orange font-medium mb-4 tracking-wide uppercase">
            FREELANCE EXPERTISE IN WEB DESIGN AND WEBFLOW
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            I assure you of complete and tailor-made services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="animate-on-scroll hover-lift group"
            >
              <div className="bg-dark-bg rounded-2xl p-8 h-full transition-all duration-300 group-hover:shadow-xl">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Visual Elements */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Mockup Preview */}
          <div className="animate-on-scroll">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 overflow-hidden">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="h-20 bg-white/20 rounded-lg backdrop-blur-sm"></div>
                  <div className="h-20 bg-white/30 rounded-lg backdrop-blur-sm"></div>
                  <div className="h-20 bg-white/25 rounded-lg backdrop-blur-sm"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-white/40 rounded"></div>
                  <div className="h-4 bg-white/30 rounded w-3/4"></div>
                  <div className="h-4 bg-white/35 rounded w-1/2"></div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-orange/30 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Right - Service Highlights */}
          <div className="animate-on-scroll space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Why choose my Webflow services?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                With years of experience and a client-first approach, I deliver websites that not only look great but perform exceptionally.
              </p>
            </div>

            <div className="space-y-6">
              {[
                'Pixel-perfect responsive design',
                'SEO-optimized structure',
                'Fast loading performance',
                'Easy content management',
                'Ongoing support & maintenance'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-primary-orange to-primary-red rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-white">{feature}</span>
                </div>
              ))}
            </div>

            <button className="bg-transparent border-2 border-primary-orange text-primary-orange px-8 py-3 rounded-full font-medium hover:bg-primary-orange hover:text-white transition-all duration-300">
              See all my services
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services