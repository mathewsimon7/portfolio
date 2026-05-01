import { motion } from 'framer-motion'
import { Github, Linkedin, FileDown, ArrowDown, ArrowUpRight } from 'lucide-react'

const Hero = ({ mousePosition }) => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/mathewsimon7', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mathew-simon-612b8b3b1/', label: 'LinkedIn' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center section-padding relative overflow-hidden"
    >
      {/* Animated Grid Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 255, 136, 0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 255, 136, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
        
        {/* Glowing Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-neon/10 blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 -left-20 w-80 h-80 rounded-full bg-neon/5 blur-[80px]"
        />
      </div>

      {/* Main Content - Left Aligned */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neon"></span>
              </span>
              <span className="text-sm text-white/70 tracking-wide">
                Available for opportunities
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6"
          >
            <span className="text-white block">Mathew</span>
            <span className="text-neon block -mt-2 sm:-mt-4">Simon</span>
          </motion.h1>

          {/* Role & Specialization */}
          <motion.div variants={itemVariants} className="mb-8">
            <p className="text-xl sm:text-2xl text-white/80 font-light tracking-wide">
              BTech Computer Science
            </p>
            <p className="text-lg sm:text-xl text-neon/70 font-mono mt-1">
              Cybersecurity Specialist
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-white/50 text-base sm:text-lg max-w-lg mb-10 leading-relaxed"
          >
            Focused on fixing problems and building practical solutions. 
            Transforming complex challenges into elegant, secure systems.
          </motion.p>

          {/* CTA Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#projects"
              className="btn-primary group flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
            
            <motion.button
              className="btn-outline flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => alert('Resume download coming soon!')}
            >
              <FileDown size={18} />
              Resume
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mt-10">
            <span className="text-xs text-white/30 uppercase tracking-widest">Connect</span>
            <div className="h-px w-12 bg-white/10" />
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white/40 hover:text-neon transition-colors rounded-lg border border-white/5 hover:border-neon/20 hover:bg-neon/5"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-0 right-0 hidden lg:flex flex-col items-center gap-3"
        >
          <span className="text-xs text-white/30 tracking-widest uppercase rotate-90 origin-center translate-y-12">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent"
          />
        </motion.div>
      </div>

      {/* Bottom Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-0 right-0 section-padding"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-8">
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-neon">2nd</p>
                <p className="text-xs text-white/40 uppercase tracking-wider">Year Student</p>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-white">CSE</p>
                <p className="text-xs text-white/40 uppercase tracking-wider">Cybersecurity</p>
              </div>
            </div>
            
            <a
              href="mailto:mathewsimon2006@gmail.com"
              className="text-sm text-white/40 hover:text-neon transition-colors"
            >
              mathewsimon2006@gmail.com
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
