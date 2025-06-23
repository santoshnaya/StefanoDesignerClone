'use client'

import { useEffect, useRef } from 'react'
import { Users } from 'lucide-react'

const Testimonials = () => {
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

  const testimonials = [
    {
      name: 'Davide Pappalardo',
      role: 'Restaurant Owner',
      company: 'Orcas-Maker',
      testimonial: 'Stefano worked closely with us to create a Webflow website that met all the criteria we were looking for. The end result is an attractive, organized and efficient site.'
    },
    {
      name: 'Jade Theron',
      role: 'Office Manager',
      company: 'Camurria',
      testimonial: 'Stefano managed to meet our deadlines by delivering a great Webflow website. Debugging all responsive display issues, optimizing the layout of the site and improving the UX.'
    },
    {
      name: 'Noah Seror',
      role: 'Talent Manager',
      company: 'AMC',
      testimonial: 'His presence was indispensable on our Webflow project. Dynamic, smiling and proactive, he has proven himself throughout his experience in web design by our side.'
    },
    {
      name: 'Kevin Hove',
      role: 'Business manager',
      company: 'Okev',
      testimonial: 'His sensitivity, talent, technique and method will allow you to acquire a brand image and a website in line with what you have imagined in the back of your mind with eye-catching graphics.'
    }
  ]

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-red rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
          </div>
          <p className="text-sm text-gray-400 font-medium mb-4 tracking-wide uppercase">
            THE OPINIONS OF THOSE WHO TRUST ME
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Customer Success Stories
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="animate-on-scroll hover-lift bg-dark-card rounded-2xl p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  <p className="text-primary-orange text-sm font-medium">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed italic">
                “{testimonial.testimonial}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials