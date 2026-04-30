import { motion } from 'framer-motion'
import { Shield, Code, Terminal } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Passionate about security practices and protecting digital assets',
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Building practical applications with modern technologies',
    },
    {
      icon: Terminal,
      title: 'Problem Solving',
      description: 'Continuously improving skills through hands-on challenges',
    },
  ]

  return (
    <section id="about" className="section-padding py-24 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 text-sm font-medium tracking-wider uppercase mb-2 block">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Pursuing BTech in Computer Science with a focus on cybersecurity. 
                Interested in building practical applications and continuously 
                improving problem-solving skills through hands-on development.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I believe in the power of technology to solve real-world problems. 
                Whether it's securing systems or building user-friendly applications, 
                I'm always eager to learn and apply new concepts to create meaningful impact.
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="glass-card p-6 flex items-start gap-4 group cursor-default"
              >
                <div className="p-3 rounded-xl bg-primary-500/10 text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                  <feature.icon size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
