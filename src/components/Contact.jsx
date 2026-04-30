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

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mathewsimon2006@gmail.com',
      href: 'mailto:mathewsimon2006@gmail.com',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: 'https://www.linkedin.com/in/mathew-simon-612b8b3b1/',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View Projects',
      href: 'https://github.com/mathewsimon7',
      color: 'from-gray-600 to-gray-700',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@mathew_.simon',
      href: 'https://www.instagram.com/mathew_.simon/?hl=en',
      color: 'from-pink-500 to-purple-500',
    },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="section-padding py-24 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 text-sm font-medium tracking-wider uppercase mb-2 block">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
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
                whileHover={{ scale: 1.02, x: 8 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-4 p-4 rounded-xl glass-card hover:border-primary-500/30 transition-colors"
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br ${link.color} text-white shadow-lg`}>
                  <link.icon size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-medium">{link.label}</h3>
                  <p className="text-gray-400 text-sm">{link.value}</p>
                </div>
                <ArrowUpRight 
                  size={20} 
                  className="text-gray-500 group-hover:text-primary-400 transition-colors" 
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8">
              <h3 className="text-xl font-semibold text-white mb-6">
                Send a Message
              </h3>

              <div className="space-y-5">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dark-600/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all"
                    placeholder="John Doe"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-sm text-gray-400 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dark-600/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-sm text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-dark-600/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all resize-none"
                    placeholder="Hi Mathew, I'd like to discuss..."
                    required
                  />
                </motion.div>

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
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : submitted ? (
                    <span>Message Sent!</span>
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
