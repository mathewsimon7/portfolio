import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C', 'Python', 'JavaScript'],
    },
    {
      title: 'Technologies',
      skills: ['HTML5', 'CSS3', 'React', 'Node.js', 'Express.js'],
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'Linux', 'VS Code'],
    },
  ]

  const techColors = [
    'from-blue-500 to-cyan-500',
    'from-green-500 to-emerald-500',
    'from-yellow-500 to-orange-500',
    'from-purple-500 to-pink-500',
    'from-red-500 to-rose-500',
    'from-indigo-500 to-violet-500',
    'from-cyan-500 to-teal-500',
    'from-amber-500 to-orange-500',
  ]

  return (
    <section id="skills" className="section-padding py-24 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 text-sm font-medium tracking-wider uppercase mb-2 block">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid - Clean & Simple */}
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4 pb-3 border-b border-white/10">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.03 }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                    }}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium bg-gradient-to-r ${
                      techColors[(categoryIndex * 3 + skillIndex) % techColors.length]
                    } bg-opacity-10 text-white border border-white/10 hover:border-white/20 transition-all cursor-default`}
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
