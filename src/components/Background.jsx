import { useEffect, useRef } from 'react'

const Background = () => {
  const canvasRef = useRef(null)
  const gridCanvasRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  // Animated Grid Background
  useEffect(() => {
    const canvas = gridCanvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const gridSize = 60
      
      const bgGradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width
      )
      bgGradient.addColorStop(0, '#0d1210')
      bgGradient.addColorStop(0.5, '#0a0f0d')
      bgGradient.addColorStop(1, '#080c0a')
      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.strokeStyle = 'rgba(0, 255, 136, 0.03)'
      ctx.lineWidth = 1

      for (let x = 0; x <= canvas.width; x += gridSize) {
        const offset = Math.sin(time * 0.001 + x * 0.01) * 2
        ctx.beginPath()
        ctx.moveTo(x + offset, 0)
        ctx.lineTo(x + offset, canvas.height)
        ctx.stroke()
      }

      for (let y = 0; y <= canvas.height; y += gridSize) {
        const offset = Math.cos(time * 0.001 + y * 0.01) * 2
        ctx.beginPath()
        ctx.moveTo(0, y + offset)
        ctx.lineTo(canvas.width, y + offset)
        ctx.stroke()
      }

      time += 1
      animationFrameId = requestAnimationFrame(drawGrid)
    }

    drawGrid()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  // Interactive Constellation Particles
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)

    // Track mouse
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    // Create constellation nodes
    const particleCount = 40
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        baseX: Math.random() * canvas.width,
        baseY: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        pulse: Math.random() * Math.PI * 2,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const mouse = mouseRef.current

      particles.forEach((particle, i) => {
        // Gentle floating motion
        particle.pulse += 0.02
        const floatX = Math.sin(particle.pulse) * 0.5
        const floatY = Math.cos(particle.pulse * 0.8) * 0.5

        // Mouse interaction - gentle attraction
        const dx = mouse.x - particle.x
        const dy = mouse.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 200

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance * 0.02
          particle.x += dx * force
          particle.y += dy * force
        }

        // Return to base position slowly
        particle.x += (particle.baseX - particle.x) * 0.01 + floatX
        particle.y += (particle.baseY - particle.y) * 0.01 + floatY

        // Pulse opacity
        const pulseOpacity = particle.opacity * (0.7 + 0.3 * Math.sin(particle.pulse))

        // Draw glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.radius * 3
        )
        gradient.addColorStop(0, `rgba(0, 255, 136, ${pulseOpacity * 0.8})`)
        gradient.addColorStop(0.5, `rgba(0, 255, 136, ${pulseOpacity * 0.3})`)
        gradient.addColorStop(1, 'transparent')
        
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius * 3, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Core dot
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 255, 136, ${pulseOpacity})`
        ctx.fill()

        // Draw connections to nearby particles (constellation effect)
        particles.slice(i + 1).forEach((other) => {
          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(0, 255, 136, ${0.1 * (1 - distance / 120)})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        })

        // Connect to mouse when close
        if (mouse.x && mouse.y) {
          const mouseDx = mouse.x - particle.x
          const mouseDy = mouse.y - particle.y
          const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy)

          if (mouseDistance < 150) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.strokeStyle = `rgba(0, 255, 136, ${0.15 * (1 - mouseDistance / 150)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <>
      {/* Grid Layer */}
      <canvas
        ref={gridCanvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
      />
      {/* Constellation Particles Layer */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-[1] pointer-events-none"
      />
    </>
  )
}

export default Background
