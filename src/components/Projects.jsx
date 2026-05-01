import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Loader2, Code2, ArrowUpRight } from 'lucide-react'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/mathewsimon7/repos?sort=updated&per_page=6')
        if (!response.ok) throw new Error('Failed to fetch projects')
        const data = await response.json()
        
        const filteredProjects = data
          .filter(repo => !repo.fork)
          .map(repo => ({
            id: repo.id,
            name: repo.name,
            description: repo.description || 'No description available',
            language: repo.language,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            url: repo.html_url,
            updatedAt: new Date(repo.updated_at).toLocaleDateString(),
          }))
          .slice(0, 6)
        
        setProjects(filteredProjects)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const techColors = {
    JavaScript: 'border-yellow-500/30 text-yellow-400 bg-yellow-500/10',
    TypeScript: 'border-blue-500/30 text-blue-400 bg-blue-500/10',
    Python: 'border-neon/30 text-neon bg-neon/10',
    HTML: 'border-orange-500/30 text-orange-400 bg-orange-500/10',
    CSS: 'border-blue-400/30 text-blue-300 bg-blue-400/10',
    'C++': 'border-pink-500/30 text-pink-400 bg-pink-500/10',
    C: 'border-white/20 text-white/60 bg-white/5',
    Java: 'border-red-500/30 text-red-400 bg-red-500/10',
    React: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10',
    'Node.js': 'border-green-600/30 text-green-500 bg-green-600/10',
    default: 'border-neon/30 text-neon bg-neon/10',
  }

  return (
    <section id="projects" className="section-padding py-32 relative overflow-hidden">
      {/* Section Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-neon/50 to-transparent" />
            <span className="text-neon text-sm font-mono tracking-widest uppercase">
              02 — Projects
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
            Featured <span className="text-neon">Work</span>
          </h2>
          <p className="text-white/50 max-w-xl">
            A curated selection of projects showcasing my technical capabilities 
            and problem-solving approach.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center py-20"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 rounded-full border-2 border-neon/20 border-t-neon"
                />
              </div>
            </motion.div>
          ) : error || projects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="glass-card p-8 max-w-xl mx-auto light-reflection">
                <Code2 className="w-12 h-12 text-neon/60 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Projects Under Development
                </h3>
                <p className="text-white/50">
                  Projects are currently under active development — building, refining, and shipping continuously.
                </p>
                <a
                  href="https://github.com/mathewsimon7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 text-neon hover:text-white transition-colors group"
                >
                  <Github size={18} />
                  View GitHub Profile
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {projects.map((project, index) => (
                <TiltCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* View More Link */}
        {!loading && !error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.a
              href="https://github.com/mathewsimon7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 text-white/70 hover:text-neon hover:border-neon/30 hover:bg-neon/5 transition-all group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github size={18} />
              View All Projects
              <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  )
}

// 3D Tilt Card Component
const TiltCard = ({ project, index }) => {
  const cardRef = useRef(null)
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, glare: { x: 50, y: 50 } })

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = ((y - centerY) / centerY) * -10
    const rotateY = ((x - centerX) / centerX) * 10
    
    setTransform({
      rotateX,
      rotateY,
      glare: { x: (x / rect.width) * 100, y: (y / rect.height) * 100 }
    })
  }

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0, glare: { x: 50, y: 50 } })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="glass-card p-6 h-full flex flex-col relative overflow-hidden cursor-default group"
        style={{
          transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
          transition: 'transform 0.1s ease-out',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Dynamic Glare Effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${transform.glare.x}% ${transform.glare.y}%, rgba(0, 255, 136, 0.15) 0%, transparent 60%)`,
          }}
        />

        {/* Border Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
          style={{
            boxShadow: 'inset 0 0 30px rgba(0, 255, 136, 0.1)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex-1" style={{ transform: 'translateZ(30px)' }}>
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-lg font-semibold text-white group-hover:text-neon transition-colors">
              {project.name}
            </h3>
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/30 hover:text-neon transition-colors rounded-lg hover:bg-neon/10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={18} />
            </motion.a>
          </div>

          <p className="text-white/40 text-sm mb-4 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          {project.language && (
            <span className={`inline-block px-3 py-1 rounded-full text-xs border ${
              (() => {
                const techColors = {
                  JavaScript: 'border-yellow-500/30 text-yellow-400 bg-yellow-500/10',
                  TypeScript: 'border-blue-500/30 text-blue-400 bg-blue-500/10',
                  Python: 'border-neon/30 text-neon bg-neon/10',
                  HTML: 'border-orange-500/30 text-orange-400 bg-orange-500/10',
                  CSS: 'border-blue-400/30 text-blue-300 bg-blue-400/10',
                  'C++': 'border-pink-500/30 text-pink-400 bg-pink-500/10',
                  C: 'border-white/20 text-white/60 bg-white/5',
                  Java: 'border-red-500/30 text-red-400 bg-red-500/10',
                  React: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10',
                  'Node.js': 'border-green-600/30 text-green-500 bg-green-600/10',
                  default: 'border-neon/30 text-neon bg-neon/10',
                }
                return techColors[project.language] || techColors.default
              })()
            }`}>
              {project.language}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="relative z-10 mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/30">
          <span>{project.updatedAt}</span>
          {project.stars > 0 && (
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-neon" />
              {project.stars}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
