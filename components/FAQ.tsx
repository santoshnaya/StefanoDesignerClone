'use client'

import { useState, useEffect, useRef } from 'react'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const FAQ = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [openItem, setOpenItem] = useState<number | null>(null)

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

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index)
  }

  const faqs = [
    {
      question: 'What are the steps involved in creating a website?',
      answer: 'The website creation process includes discovery and planning, design and wireframing, development in Webflow, content integration, testing and optimization, and finally launch and ongoing support.'
    },
    {
      question: 'How much does a website developed with Webflow by a freelancer cost?',
      answer: 'The cost varies based on project complexity, features required, and timeline. A simple landing page starts from $2,000, while complex e-commerce sites can range from $5,000-$15,000. I provide detailed quotes after understanding your specific needs.'
    },
    {
      question: 'What is Webflow?',
      answer: 'Webflow is a powerful visual web design platform that allows for professional website development without traditional coding. It combines design freedom with clean code output, making it perfect for responsive, fast-loading websites.'
    },
    {
      question: 'Will the administration of my Webflow site be simple?',
      answer: 'Absolutely! Webflow includes an intuitive CMS that makes content updates easy. I provide training and documentation to ensure you can manage your site confidently, plus ongoing support when needed.'
    },
    {
      question: 'Can you fix any bugs or malfunctions on my Webflow site?',
      answer: 'Yes, I offer comprehensive debugging and maintenance services for Webflow sites. Whether it\'s responsive design issues, performance optimization, or functionality problems, I can diagnose and fix them efficiently.'
    },
    {
      question: 'Is it possible to add new features to my Webflow site?',
      answer: 'Definitely! Webflow is highly extensible. I can add new features, integrate third-party tools, implement custom interactions, and expand functionality as your business grows.'
    },
    {
      question: 'What types of graphic services do you offer?',
      answer: 'I offer comprehensive graphic design services including brand identity creation, UI/UX design, marketing materials, social media graphics, and custom illustrations to complement your web presence.'
    }
  ]

  return (
    <section ref={sectionRef} id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-red rounded-full flex items-center justify-center">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
          </div>
          <p className="text-sm text-primary-orange font-medium mb-4 tracking-wide uppercase">
            YOUR QUESTIONS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            FAQ
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="animate-on-scroll bg-dark-card rounded-2xl overflow-hidden transition-all duration-300 hover:bg-dark-lighter"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none"
              >
                <h3 className="text-lg md:text-xl font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItem === index ? (
                    <Minus className="w-6 h-6 text-primary-orange" />
                  ) : (
                    <Plus className="w-6 h-6 text-primary-orange" />
                  )}
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openItem === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-8 pb-6">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-on-scroll">
          <p className="text-gray-300 mb-6">
            Still have questions? I'm here to help!
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="bg-transparent border-2 border-primary-orange text-primary-orange px-8 py-3 rounded-full font-medium hover:bg-primary-orange hover:text-white transition-all duration-300"
          >
            Get in touch
          </button>
        </div>
      </div>
    </section>
  )
}

export default FAQ