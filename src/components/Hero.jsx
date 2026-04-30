import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Github, Linkedin, FileDown, ChevronDown } from 'lucide-react'
import { useEffect } from 'react'

const Hero = ({ mousePosition }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)

  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["5deg", "-5deg"])
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-5deg", "5deg"])

  useEffect(() => {
    if (mousePosition.x && mousePosition.y) {
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      x.set((mousePosition.x - centerX) / centerX)
      y.set((mousePosition.y - centerY) / centerY)
    }
  }, [mousePosition, x, y])

  const socialLinks = [
    { icon: Github, href: 'https://github.com/mathewsimon7', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mathew-simon-612b8b3b1/', label: 'LinkedIn' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden"
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary-500/10 blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-primary-400/10 blur-xl"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-indigo-500/10 blur-xl"
        />
      </div>

      {/* Main Content */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary-300">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight"
        >
          <span className="gradient-text">Mathew</span>
          <span className="text-white"> Simon</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-3"
        >
          BTech Computer Science Student
          <span className="text-primary-400"> (Cybersecurity)</span>
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto mb-8"
        >
          Focused on fixing problems and building practical solutions
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon size={18} />
              {social.label}
            </motion.a>
          ))}
          <motion.button
            className="btn-primary flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => alert('Resume download coming soon!')}
          >
            <FileDown size={18} />
            Resume
          </motion.button>
        </motion.div>

        {/* Email Link */}
        <motion.div variants={itemVariants}>
          <a
            href="mailto:mathewsimon2006@gmail.com"
            className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
          >
            mathewsimon2006@gmail.com
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <span className="text-xs">Scroll</span>
          <ChevronDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Hero
