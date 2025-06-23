'use client'

import { useEffect, useRef } from 'react'

const Portfolio = () => {
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

  const portfolioItems = [
    {
      title: 'UX/UI Design',
      category: 'Design',
      image: 'bg-gradient-to-br from-blue-500 to-purple-600',
      description: 'Modern design approach'
    },
    {
      title: 'Creative stack',
      category: 'Development',
      image: 'bg-gradient-to-br from-green-500 to-blue-500',
      description: 'Full development stack',
      icons: ['Webflow', 'Figma', 'AI', 'PS']
    }
  ]

  const projectGrid = [
    {
      name: 'Orcas-Maker',
      category: 'E-commerce',
      size: 'large',
      bg: 'bg-gradient-to-br from-teal-400 to-blue-500'
    },
    {
      name: 'Optibus',
      category: 'Corporate',
      size: 'medium',
      bg: 'bg-gradient-to-br from-blue-600 to-purple-600'
    },
    {
      name: 'Celonis',
      category: 'B2B Platform',
      size: 'medium',
      bg: 'bg-gradient-to-br from-gray-800 to-gray-900'
    },
    {
      name: 'Sprizza',
      category: 'Restaurant',
      size: 'large',
      bg: 'bg-gradient-to-br from-orange-500 to-red-600'
    },
    {
      name: 'Culture Amp',
      category: 'HR Platform',
      size: 'medium',
      bg: 'bg-gradient-to-br from-purple-500 to-pink-500'
    },
    {
      name: 'AMC',
      category: 'Financial',
      size: 'medium',
      bg: 'bg-gradient-to-br from-blue-800 to-indigo-900'
    },
    {
      name: 'Gioielli',
      category: 'Luxury',
      size: 'large',
      bg: 'bg-gradient-to-br from-amber-600 to-orange-700'
    }
  ]

  return (
    <section ref={sectionRef} id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            With an eye always on the trends of the moment, I create{' '}
            <span className="gradient-text">modern and ergonomic web design</span>{' '}
            that meets your needs and those of the user.
          </h2>
        </div>

        {/* Portfolio Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {portfolioItems.map((item, index) => (
            <div 
              key={index}
              className="animate-on-scroll hover-lift bg-dark-card rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className={`h-64 ${item.image} relative flex items-center justify-center`}>
                {item.icons && (
                  <div className="flex space-x-4">
                    {item.icons.map((icon, iconIndex) => (
                      <div 
                        key={iconIndex}
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white font-bold"
                      >
                        {icon === 'Webflow' && '🔷'}
                        {icon === 'Figma' && '🎨'}
                        {icon === 'AI' && '🤖'}
                        {icon === 'PS' && '🖼️'}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* About Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20" id="about">
          <div className="animate-on-scroll">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I am a freelance developer who is an expert in Webflow, which allows me to create 
              dynamic and interactive websites with the methodology{' '}
              <span className="font-bold text-white">Client-First</span>.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              As a freelancer, I carry out web and graphic projects, 
              collaborating with start-ups, SaaS, small and medium-sized companies and agencies.
            </p>
          </div>
          <div className="animate-on-scroll">
            <div className="bg-dark-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Webflow</h3>
              <p className="text-gray-400 mb-6">
                Expert developer in Webflow, I integrate and develop your mockups and landing pages in 
                responsive design with Webflow. I offer support, optimization, bug fixes.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-orange rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-white">Responsive Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-orange rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-white">CMS Integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-orange rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-white">Performance Optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-white text-center animate-on-scroll">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectGrid.map((project, index) => (
              <div 
                key={index}
                className={`animate-on-scroll hover-lift group cursor-pointer rounded-2xl overflow-hidden ${
                  project.size === 'large' ? 'md:col-span-2' : ''
                } ${project.bg} relative h-64`}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-xl font-bold text-white mb-1">{project.name}</h4>
                  <p className="text-gray-300 text-sm">{project.category}</p>
                </div>
                <div className="absolute top-6 right-6">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-primary-orange transition-colors duration-300">
                    <span className="text-white text-sm">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio