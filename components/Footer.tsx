'use client'

import { Linkedin, Instagram } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gradient-to-r from-primary-orange to-primary-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="bg-dark-bg rounded-3xl p-12 md:p-16 relative overflow-hidden">
            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    Let's move from idea to action! 🚀
                  </h2>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="bg-gradient-to-r from-primary-orange to-primary-red text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-lg transition-all duration-300"
                  >
                    We talk about it
                  </button>
                </div>

                <div className="space-y-8">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-4">Menu</h3>
                      <div className="space-y-2">
                        <button onClick={() => scrollToSection('portfolio')} className="block text-gray-400 hover:text-white transition-colors">Portfolio</button>
                        <button onClick={() => scrollToSection('services')} className="block text-gray-400 hover:text-white transition-colors">Services</button>
                        <button onClick={() => scrollToSection('faq')} className="block text-gray-400 hover:text-white transition-colors">FAQ</button>
                        <button onClick={() => scrollToSection('blog')} className="block text-gray-400 hover:text-white transition-colors">Blog</button>
                        <button onClick={() => scrollToSection('contact')} className="block text-gray-400 hover:text-white transition-colors">Contact</button>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white mb-4">Learn more</h3>
                      <div className="space-y-2">
                        <a href="#" className="block text-gray-400 hover:text-white transition-colors">Rates</a>
                        <a href="#" className="block text-gray-400 hover:text-white transition-colors">Webflow</a>
                        <a href="#" className="block text-gray-400 hover:text-white transition-colors">Graphics</a>
                        <a href="#" className="block text-gray-400 hover:text-white transition-colors">Art</a>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white mb-4 italic">Contact</h3>
                    <div className="space-y-2">
                      <p className="text-gray-400">freschstefano@gmail.com</p>
                      <p className="text-gray-400">+33 754508287</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-8">
          <div className="bg-dark-bg rounded-2xl p-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-primary-red rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div>
                  <p className="text-white font-medium">Freelance web designer specialized in creation with Webflow.</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700 text-center">
              <p className="text-gray-400 text-sm">
                Designed by Stefano Fresch | Copyright {currentYear} | Legal
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer