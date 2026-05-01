import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react'

const Education = () => {
  const education = {
    degree: 'BTech in Computer Science Engineering',
    institution: 'Muthoot Institute of Science and Technology',
    location: 'Kochi, Kerala',
    duration: '2024 – 2028',
    status: 'Currently in 2nd Year',
    focus: 'Cybersecurity',
  }

  const highlights = [
    { icon: Award, text: 'Specializing in Cybersecurity' },
    { icon: BookOpen, text: 'Active in coding communities' },
    { icon: Award, text: 'Hands-on project development' },
  ]

  return (
    <section id="education" className="section-padding py-32 relative overflow-hidden">
      {/* Section Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/20 to-transparent" />

      <div className="max-w-5xl mx-auto">
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
              04 — Education
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
            Academic <span className="text-neon">Journey</span>
          </h2>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neon/50 via-neon/20 to-transparent hidden md:block" />

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative md:pl-20"
          >
            {/* Timeline Node */}
            <div className="absolute left-0 top-0 hidden md:flex items-center justify-center w-16 h-16 rounded-full glass border border-neon/30">
              <GraduationCap size={24} className="text-neon" />
            </div>

            {/* Card Content */}
            <div className="glass-card p-8 light-reflection">
              {/* Status Badge */}
              <div className="flex items-center gap-3 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-neon"></span>
                </span>
                <span className="text-sm text-neon font-mono">{education.status}</span>
              </div>

              {/* Degree */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {education.degree}
              </h3>

              {/* Institution */}
              <p className="text-lg text-white/70 mb-1">
                {education.institution}
              </p>
              <p className="text-sm text-white/40 mb-6">
                {education.location}
              </p>

              {/* Details */}
              <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-white/50">
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-neon/60" />
                  <span>{education.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-neon/60" />
                  <span>{education.location}</span>
                </div>
              </div>

              {/* Focus Area */}
              <div className="flex items-center gap-3 mb-8 p-4 rounded-lg bg-neon/5 border border-neon/10">
                <span className="text-xs text-white/40 uppercase tracking-wider">Focus Area</span>
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-neon font-medium">{education.focus}</span>
              </div>

              {/* Highlights */}
              <div className="grid sm:grid-cols-3 gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5"
                  >
                    <item.icon size={16} className="text-neon/60" />
                    <span className="text-xs text-white/60">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education
