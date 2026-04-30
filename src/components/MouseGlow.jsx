import { motion } from 'framer-motion'

const MouseGlow = ({ mousePosition }) => {
  return (
    <>
      {/* Cursor Ring */}
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
        }}
        animate={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div className="w-8 h-8 rounded-full border-2 border-white/80" />
      </motion.div>

      {/* Cursor Dot */}
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
        }}
        animate={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
        }}
        transition={{
          type: 'spring',
          stiffness: 800,
          damping: 20,
          mass: 0.1,
        }}
      >
        <div className="w-2 h-2 rounded-full bg-white" />
      </motion.div>

      {/* Subtle Glow Effect */}
      <motion.div
        className="fixed w-32 h-32 rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, transparent 70%)',
          left: mousePosition.x - 64,
          top: mousePosition.y - 64,
        }}
        animate={{
          left: mousePosition.x - 64,
          top: mousePosition.y - 64,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      />
    </>
  )
}

export default MouseGlow
