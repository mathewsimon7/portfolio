import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Instagram, Send, ArrowUpRight } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState(null)

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mathewsimon2006@gmail.com',
      href: 'mailto:mathewsimon2006@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: 'https://www.linkedin.com/in/mathew-simon-612b8b3b1/',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View Projects',
      href: 'https://github.com/mathewsimon7',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@mathew_.simon',
      href: 'https://www.instagram.com/mathew_.simon/?hl=en',
    },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="section-padding py-32 relative overflow-hidden">
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
              05 — Contact
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
            Let's <span className="text-neon">Connect</span>
          </h2>
          <p className="text-white/50 max-w-xl">
            Have a project in mind or want to collaborate? Reach out and let's build something together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Links - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-4 p-4 rounded-xl glass-card light-reflection cursor-default"
              >
                <div className="p-3 rounded-lg bg-neon/10 text-neon group-hover:bg-neon/20 transition-colors">
                  <link.icon size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-medium text-sm">{link.label}</h3>
                  <p className="text-white/40 text-xs">{link.value}</p>
                </div>
                <ArrowUpRight 
                  size={18} 
                  className="text-white/20 group-hover:text-neon transition-colors" 
                />
              </motion.a>
            ))}

            {/* Direct Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-xl glass-card mt-8"
            >
              <p className="text-xs text-white/40 uppercase tracking-wider mb-2">Direct Email</p>
              <a 
                href="mailto:mathewsimon2006@gmail.com"
                className="text-neon hover:text-white transition-colors font-mono text-sm"
              >
                mathewsimon2006@gmail.com
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8">
              <h3 className="text-lg font-medium text-white mb-8">
                Send a Message
              </h3>

              <div className="space-y-6">
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 rounded-xl bg-void-800/50 border border-neon/10 text-white placeholder-white/20 focus:outline-none focus:border-neon/40 transition-all"
                      placeholder="John Doe"
                      required
                    />
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: focusedField === 'name' ? 1 : 0 }}
                      className="absolute bottom-0 left-0 right-0 h-px bg-neon origin-left"
                    />
                  </div>
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 rounded-xl bg-void-800/50 border border-neon/10 text-white placeholder-white/20 focus:outline-none focus:border-neon/40 transition-all"
                      placeholder="john@example.com"
                      required
                    />
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: focusedField === 'email' ? 1 : 0 }}
                      className="absolute bottom-0 left-0 right-0 h-px bg-neon origin-left"
                    />
                  </div>
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-void-800/50 border border-neon/10 text-white placeholder-white/20 focus:outline-none focus:border-neon/40 transition-all resize-none"
                      placeholder="Hi Mathew, I'd like to discuss..."
                      required
                    />
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: focusedField === 'message' ? 1 : 0 }}
                      className="absolute bottom-0 left-0 right-0 h-px bg-neon origin-left"
                    />
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-neon border-t-transparent rounded-full"
                    />
                  ) : submitted ? (
                    <span className="text-neon">Message Sent Successfully!</span>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
