'use client'

import { useEffect, useRef, useState } from 'react'

const Stats = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
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

  const stats = [
    {
      number: '+50',
      label: 'Projects delivered',
      subtitle: 'with passion and expertise'
    },
    {
      number: '100%',
      label: 'satisfied customers',
      subtitle: 'thanks to quality work'
    },
    {
      number: '6',
      label: 'years of experience',
      subtitle: 'in digital'
    }
  ]

  const trustLogos = [
    { name: 'Webcraft', bg: 'bg-gray-700' },
    { name: 'OKEV', bg: 'bg-gray-600' },
    { name: 'CAMURRIA', bg: 'bg-gray-700' },
    { name: 'AMC', bg: 'bg-gray-600' },
    { name: 'New Inside', bg: 'bg-gray-700' }
  ]

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Trust Badges */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-sm text-gray-400 font-medium mb-8 tracking-wide uppercase">
            THEY TRUST ME
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {trustLogos.map((logo, index) => (
              <div 
                key={index}
                className={`${logo.bg} px-6 py-3 rounded-lg opacity-70 hover:opacity-100 transition-opacity duration-300`}
              >
                <span className="text-white font-medium text-sm">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-sm text-primary-orange font-medium mb-4 tracking-wide uppercase">
            PORTFOLIO
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discover my latest achievements
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Detailed case studies, graphical renderings, and an overview 
            of my processes and techniques.
          </p>
        </div>

        {/* Portfolio Grid Preview */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: 'Webflow Optimization & Development',
              tags: ['UX/UI', 'Webflow', 'Debug'],
              color: 'bg-gradient-to-br from-orange-500 to-red-500'
            },
            {
              title: 'Webflow e-commerce website creation',
              tags: ['E-commerce', 'Webflow', 'SEO'],
              color: 'bg-gradient-to-br from-blue-500 to-purple-500'
            },
            {
              title: 'Webflow development and UX design',
              tags: ['UX/UI', 'Webflow', 'Brand Identity'],
              color: 'bg-gradient-to-br from-gray-800 to-gray-900'
            }
          ].map((project, index) => (
            <div 
              key={index}
              className="animate-on-scroll hover-lift group cursor-pointer"
            >
              <div className={`${project.color} rounded-2xl p-8 h-64 relative overflow-hidden mb-6`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                <div className="relative z-10 h-full flex items-end">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-primary-orange transition-colors duration-300">
                    <span className="text-white text-sm">→</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-dark-card text-primary-orange px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-on-scroll">
          <button className="bg-transparent border-2 border-primary-orange text-primary-orange px-8 py-3 rounded-full font-medium hover:bg-primary-orange hover:text-white transition-all duration-300">
            See all projects
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-dark-card/30 py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <p className="text-sm text-primary-orange font-medium mb-4 tracking-wide uppercase">
              EXPERT FREELANCE SUPPORT
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, efficient and{' '}
              <span className="gradient-text">efficient</span>{' '}
              Webflow sites
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center animate-on-scroll"
              >
                <div className="text-6xl md:text-7xl font-bold gradient-text mb-4">
                  {stat.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{stat.label}</h3>
                <p className="text-gray-400">{stat.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats