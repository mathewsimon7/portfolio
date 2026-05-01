import { motion, useSpring, useMotionValue } from 'framer-motion'
import { useEffect } from 'react'

const MouseGlow = ({ mousePosition }) => {
  // Smooth spring configuration for fluid movement
  const springConfig = { damping: 25, stiffness: 120, mass: 0.8 }
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const xSmooth = useSpring(x, springConfig)
  const ySmooth = useSpring(y, springConfig)

  useEffect(() => {
    x.set(mousePosition.x)
    y.set(mousePosition.y)
  }, [mousePosition, x, y])

  return (
    <>
      {/* Main Glow Aura - Large soft green radial gradient */}
      <motion.div
        className="fixed pointer-events-none z-0"
        style={{
          x: xSmooth,
          y: ySmooth,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div 
          className="w-[400px] h-[400px] rounded-full opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 136, 0.15) 0%, rgba(0, 255, 136, 0.05) 30%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </motion.div>

      {/* Secondary Glow - Medium glow for depth */}
      <motion.div
        className="fixed pointer-events-none z-0"
        style={{
          x: xSmooth,
          y: ySmooth,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div 
          className="w-[200px] h-[200px] rounded-full opacity-60"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 136, 0.2) 0%, rgba(0, 204, 106, 0.1) 40%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />
      </motion.div>

      {/* Core Glow - Small intense glow at cursor center */}
      <motion.div
        className="fixed pointer-events-none z-0"
        style={{
          x: xSmooth,
          y: ySmooth,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div 
          className="w-16 h-16 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 136, 0.3) 0%, transparent 70%)',
            filter: 'blur(8px)',
          }}
        />
      </motion.div>

      {/* Cursor Dot - Minimal center point */}
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{
          x: xSmooth,
          y: ySmooth,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-neon shadow-[0_0_10px_rgba(0,255,136,0.8)]" />
      </motion.div>

      {/* Cursor Ring - Subtle ring around dot */}
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{
          x: xSmooth,
          y: ySmooth,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div 
          className="w-8 h-8 rounded-full border border-neon/30"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </>
  )
}

export default MouseGlow
