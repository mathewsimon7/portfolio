import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'

const Education = () => {
  const education = {
    degree: 'BTech in Computer Science Engineering',
    institution: 'Muthoot Institute of Science and Technology',
    location: 'Kochi, Kerala',
    duration: '2024 – 2028',
    status: 'Currently in 2nd Year',
    highlights: [
      'Specializing in Cybersecurity',
      'Active in coding communities',
      'Hands-on project development',
    ],
  }

  return (
    <section id="education" className="section-padding py-24 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 text-sm font-medium tracking-wider uppercase mb-2 block">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Education
          </h2>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="glass-card p-8 md:p-12 relative overflow-hidden group"
        >
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary-500/20 transition-colors duration-500" />

          <div className="relative z-10">
            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mb-6 shadow-lg shadow-primary-500/25"
            >
              <GraduationCap size={32} className="text-white" />
            </motion.div>

            {/* Degree */}
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {education.degree}
            </h3>

            {/* Institution */}
            <p className="text-xl text-primary-400 mb-4">
              {education.institution}
            </p>

            {/* Details Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mt-6 mb-8">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-400"
              >
                <div className="p-2 rounded-lg bg-dark-600/50">
                  <Calendar size={18} className="text-primary-400" />
                </div>
                <span>{education.duration}</span>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-400"
              >
                <div className="p-2 rounded-lg bg-dark-600/50">
                  <MapPin size={18} className="text-primary-400" />
                </div>
                <span>{education.location}</span>
              </motion.div>
            </div>

            {/* Status Badge */}
            <div className="flex flex-wrap gap-3 mb-8">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 text-sm"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                {education.status}
              </motion.span>
            </div>

            {/* Highlights */}
            <div className="border-t border-white/10 pt-6">
              <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
                Highlights
              </h4>
              <div className="grid sm:grid-cols-3 gap-4">
                {education.highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -3 }}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <Award size={16} className="text-primary-400 flex-shrink-0" />
                    <span className="text-sm">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
