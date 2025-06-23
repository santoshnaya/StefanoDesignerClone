'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [language, setLanguage] = useState('EN')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'FR' : 'EN')
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-bg/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-orange to-primary-red rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-white text-lg font-semibold">Stefano Fresch</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-white hover:text-primary-orange transition-colors duration-200"
              >
                Portfolio
              </button>
              <div className="relative group">
                <button className="text-white hover:text-primary-orange transition-colors duration-200 flex items-center space-x-1">
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-dark-card rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <button 
                      onClick={() => scrollToSection('services')}
                      className="block px-4 py-2 text-sm text-white hover:bg-dark-lighter w-full text-left"
                    >
                      Webflow Development
                    </button>
                    <button 
                      onClick={() => scrollToSection('services')}
                      className="block px-4 py-2 text-sm text-white hover:bg-dark-lighter w-full text-left"
                    >
                      UX/UI Design
                    </button>
                    <button 
                      onClick={() => scrollToSection('services')}
                      className="block px-4 py-2 text-sm text-white hover:bg-dark-lighter w-full text-left"
                    >
                      SEO Optimization
                    </button>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-primary-orange transition-colors duration-200"
              >
                By the way
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-white hover:text-primary-orange transition-colors duration-200"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className="text-white hover:text-primary-orange transition-colors duration-200"
              >
                Blog
              </button>
              <button 
                onClick={toggleLanguage}
                className="bg-primary-orange text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-primary-red transition-colors duration-200"
              >
                {language}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-primary-orange to-primary-red text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-200"
              >
                Contact →
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-primary-orange transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-bg/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-white hover:text-primary-orange block px-3 py-2 text-base font-medium w-full text-left"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-primary-orange block px-3 py-2 text-base font-medium w-full text-left"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-primary-orange block px-3 py-2 text-base font-medium w-full text-left"
            >
              By the way
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-white hover:text-primary-orange block px-3 py-2 text-base font-medium w-full text-left"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className="text-white hover:text-primary-orange block px-3 py-2 text-base font-medium w-full text-left"
            >
              Blog
            </button>
            <div className="flex items-center space-x-4 px-3 py-2">
              <button 
                onClick={toggleLanguage}
                className="bg-primary-orange text-white px-3 py-1 rounded-full text-sm font-medium"
              >
                {language}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-primary-orange to-primary-red text-white px-6 py-2 rounded-full font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation