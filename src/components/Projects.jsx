import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Loader2, Code2 } from 'lucide-react'

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
        
        // Filter out forks and sort by most recently pushed
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
    JavaScript: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    TypeScript: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    Python: 'bg-green-500/20 text-green-400 border-green-500/30',
    HTML: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    CSS: 'bg-blue-400/20 text-blue-300 border-blue-400/30',
    'C++': 'bg-pink-500/20 text-pink-400 border-pink-500/30',
    C: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
    Java: 'bg-red-500/20 text-red-400 border-red-500/30',
    React: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    'Node.js': 'bg-green-600/20 text-green-500 border-green-600/30',
    default: 'bg-primary-500/20 text-primary-400 border-primary-500/30',
  }

  return (
    <section id="projects" className="section-padding py-24 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 text-sm font-medium tracking-wider uppercase mb-2 block">
            My Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of projects I've built. Each one represents a unique learning experience.
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
              <Loader2 className="w-8 h-8 text-primary-400 animate-spin" />
            </motion.div>
          ) : error || projects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="glass-card p-8 max-w-xl mx-auto">
                <Code2 className="w-12 h-12 text-primary-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Projects Under Development
                </h3>
                <p className="text-gray-400">
                  Projects are currently under active development — building, refining, and shipping continuously.
                </p>
                <a
                  href="https://github.com/mathewsimon7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 text-primary-400 hover:text-primary-300 transition-colors"
                >
                  <Github size={18} />
                  View GitHub Profile
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
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="glass-card p-6 h-full flex flex-col relative overflow-hidden">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-indigo-500/10" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors">
                          {project.name}
                        </h3>
                        <motion.a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-white transition-colors"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github size={20} />
                        </motion.a>
                      </div>

                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {project.language && (
                        <span className={`inline-block px-3 py-1 rounded-full text-xs border ${
                          techColors[project.language] || techColors.default
                        }`}>
                          {project.language}
                        </span>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="relative z-10 mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500">
                      <span>Updated {project.updatedAt}</span>
                      <div className="flex items-center gap-3">
                        {project.stars > 0 && (
                          <span className="flex items-center gap-1">
                            <Github size={12} />
                            {project.stars}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
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
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/mathewsimon7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full text-white hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} />
              View All Projects on GitHub
              <ExternalLink size={14} />
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects
