'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import CallToAction from '@/components/CallToAction'
import FAQ from '@/components/FAQ'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'

export default function Home() {
  const [showCookieBanner, setShowCookieBanner] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted')
    if (!cookiesAccepted) {
      setShowCookieBanner(true)
    }
  }, [])

  const handleCookieAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true')
    setShowCookieBanner(false)
  }

  const handleCookieRefuse = () => {
    localStorage.setItem('cookiesAccepted', 'false')
    setShowCookieBanner(false)
  }

  return (
    <main className="min-h-screen bg-dark-bg text-white">
      <Navigation />
      <Hero />
      <Portfolio />
      <Services />
      <Stats />
      <Testimonials />
      <CallToAction />
      <FAQ />
      <Blog />
      <Contact />
      <Footer />
      
      {showCookieBanner && (
        <CookieBanner 
          onAccept={handleCookieAccept}
          onRefuse={handleCookieRefuse}
        />
      )}
    </main>
  )
}