import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import MouseGlow from './components/MouseGlow'
import Background from './components/Background'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000)

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark-900"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full"
          />
        </motion.div>
      ) : (
        <div className="relative min-h-screen bg-dark-900 overflow-x-hidden">
          <Background />
          <MouseGlow mousePosition={mousePosition} />
          <Navigation />
          
          <main className="relative z-10">
            <Hero mousePosition={mousePosition} />
            <About />
            <Projects />
            <Skills />
            <Education />
            <Contact />
          </main>

          <footer className="section-padding py-8 border-t border-white/5 bg-dark-900/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto text-center text-gray-400 text-sm"
            >
              <p>Designed & Built by Mathew Simon</p>
            </motion.div>
          </footer>
        </div>
      )}
    </AnimatePresence>
  )
}

export default App
