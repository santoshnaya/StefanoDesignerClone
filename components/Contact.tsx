'use client'

import { useState, useEffect, useRef } from 'react'
import { Mail, Phone, Calendar } from 'lucide-react'

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    activity: '',
    message: ''
  })

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message! This is a demo form.')
    setFormData({
      name: '',
      email: '',
      project: '',
      activity: '',
      message: ''
    })
  }

  return (
    <section ref={sectionRef} id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="animate-on-scroll space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Contact me and we'll discuss your project!
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                A desire, a project? I'm here to help you make it happen. Send me a message and we'll discuss it together!
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-orange rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">freschstefano@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-orange rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">+33 754508287</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-orange rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Make an appointment</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Name and surname"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full bg-dark-card border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-orange transition-colors"
              />

              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full bg-dark-card border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-orange transition-colors"
              />

              <select
                name="project"
                value={formData.project}
                onChange={handleInputChange}
                className="w-full bg-dark-card border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-orange transition-colors"
              >
                <option value="">Your project</option>
                <option value="webflow">Webflow Development</option>
                <option value="design">UX/UI Design</option>
                <option value="seo">SEO Optimization</option>
              </select>

              <select
                name="activity"
                value={formData.activity}
                onChange={handleInputChange}
                className="w-full bg-dark-card border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-orange transition-colors"
              >
                <option value="">You are</option>
                <option value="startup">Startup</option>
                <option value="business">Small Business</option>
                <option value="agency">Agency</option>
              </select>

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full bg-dark-card border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-orange transition-colors resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-orange to-primary-red text-white py-4 rounded-lg font-medium text-lg hover:shadow-lg transition-all duration-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact