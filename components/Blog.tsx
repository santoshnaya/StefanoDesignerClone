'use client'

import { useEffect, useRef } from 'react'
import { BookOpen } from 'lucide-react'

const Blog = () => {
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

  const blogPosts = [
    {
      title: 'Client-First in Webflow: A Method for Structured Design',
      category: 'Webflow Development',
      excerpt: 'Client-First is an effective strategy for creating well-organized, scalable, and user-centric websites.',
      readTime: '5 min read'
    },
    {
      title: 'Why Choose a Webflow Developer?',
      category: 'Freelance Webflow Developer', 
      excerpt: 'Benefit from deep skills and mastery of Webflow\'s advanced features.',
      readTime: '4 min read'
    },
    {
      title: 'Figma, the ally of designers for efficient mockups',
      category: 'Freelance UX/UI Designer',
      excerpt: 'Figma has become an essential tool in the world of web design.',
      readTime: '6 min read'
    }
  ]

  return (
    <section ref={sectionRef} id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-red rounded-full flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
          </div>
          <p className="text-sm text-primary-orange font-medium mb-4 tracking-wide uppercase">
            BLOG
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Inspirations and strategies
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="animate-on-scroll hover-lift group cursor-pointer">
              <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl h-64 relative overflow-hidden mb-6">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-primary-orange transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-400">{post.excerpt}</p>
                <span className="text-gray-500 text-sm">{post.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog