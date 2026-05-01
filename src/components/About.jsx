import { motion } from 'framer-motion'
import { Shield, Code, Terminal, Cpu, Lock, Zap } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Security-first mindset with focus on protecting digital assets',
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Building practical applications with modern technologies',
    },
    {
      icon: Terminal,
      title: 'Problem Solving',
      description: 'Breaking down complex challenges into elegant solutions',
    },
  ]

  const highlights = [
    { icon: Cpu, label: 'System Architecture' },
    { icon: Lock, label: 'Security Analysis' },
    { icon: Zap, label: 'Performance' },
  ]

  return (
    <section id="about" className="section-padding py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-px h-64 bg-gradient-to-b from-transparent via-neon/20 to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-px h-64 bg-gradient-to-b from-transparent via-neon/10 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto relative">
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
              01 — About
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
            Who I <span className="text-neon">Am</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Main Content - Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="glass-card p-8 light-reflection">
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Pursuing BTech in Computer Science with a specialized focus on{' '}
                <span className="text-neon">cybersecurity</span>. I combine technical 
                expertise with a passion for building practical applications that solve 
                real-world problems.
              </p>
              <p className="text-white/50 leading-relaxed">
                My approach centers on continuous improvement through hands-on development. 
                Whether securing systems against threats or crafting user-friendly interfaces, 
                I'm driven by the challenge of transforming complexity into clarity.
              </p>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-neon/20 bg-neon/5"
                >
                  <item.icon size={14} className="text-neon" />
                  <span className="text-sm text-white/70">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features Cards - Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 8, scale: 1.02 }}
                className="glass-card p-5 flex items-start gap-4 group cursor-default light-reflection"
              >
                <div className="p-2.5 rounded-lg bg-neon/10 text-neon group-hover:bg-neon/20 transition-colors">
                  <feature.icon size={20} />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1 text-sm">{feature.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{feature.description}</p>
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
