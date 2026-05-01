import { motion } from 'framer-motion'

const Skills = () => {
  const categories = [
    { title: 'Core', skills: ['C', 'Python', 'JavaScript'] },
    { title: 'Stack', skills: ['React', 'Node.js', 'Express.js', 'SQL'] },
    { title: 'Tools', skills: ['Git', 'GitHub', 'Linux', 'VS Code', 'Docker'] },
  ]

  return (
    <section id="skills" className="section-padding py-32 relative">
      {/* Section Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/20 to-transparent" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-neon text-sm font-mono tracking-widest uppercase mb-4 block">
            03 — Skills
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Tech <span className="text-neon">Stack</span>
          </h2>
        </motion.div>

        {/* Glass Box Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.15 }}
              whileHover={{ y: -8 }}
              className="glass-card p-8 light-reflection group cursor-default"
            >
              <span className="text-xs text-neon/60 uppercase tracking-widest mb-6 block">
                {category.title}
              </span>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.15 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 rounded-md bg-white/5 border border-white/5 text-sm text-white/70 group-hover:border-neon/20 group-hover:text-neon transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
