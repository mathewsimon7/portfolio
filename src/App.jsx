import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import MouseGlow from './components/MouseGlow'
import Background from './components/Background'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoading, setIsLoading] = useState(true)
  const mainRef = useRef(null)

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1500)

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Smooth scroll behavior
  useEffect(() => {
    if (!isLoading) {
      // Refresh ScrollTrigger after content loads
      ScrollTrigger.refresh()
    }
  }, [isLoading])

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-void-950"
        >
          <div className="relative">
            {/* Outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 rounded-full border border-neon/20"
            />
            {/* Middle ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 w-20 h-20 rounded-full border border-neon/40 border-t-transparent"
            />
            {/* Inner glow */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-8 w-8 h-8 rounded-full bg-neon/30 blur-md"
            />
            {/* Center dot */}
            <div className="absolute inset-11 w-2 h-2 rounded-full bg-neon" />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute mt-40 text-neon/60 text-sm tracking-widest uppercase"
          >
            Loading Experience
          </motion.p>
        </motion.div>
      ) : (
        <div ref={mainRef} className="relative min-h-screen bg-void-950 overflow-x-hidden">
          {/* Noise Texture Overlay */}
          <div className="noise-overlay" />
          
          {/* Background Effects */}
          <Background />
          
          {/* Cursor Glow Effect */}
          <MouseGlow mousePosition={mousePosition} />
          
          {/* Navigation */}
          <Navigation />
          
          {/* Main Content */}
          <main className="relative z-10">
            <Hero mousePosition={mousePosition} />
            <About />
            <Projects />
            <Skills />
            <Education />
            <Contact />
          </main>

          {/* Footer */}
          <footer className="section-padding py-12 border-t border-neon/10 bg-void-900/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto text-center"
            >
              <p className="text-white/40 text-sm tracking-wide">
                Designed & Engineered by <span className="text-neon/80">Mathew Simon</span>
              </p>
              <p className="text-white/20 text-xs mt-2">
                © {new Date().getFullYear()} All rights reserved
              </p>
            </motion.div>
          </footer>
        </div>
      )}
    </AnimatePresence>
  )
}

export default App
