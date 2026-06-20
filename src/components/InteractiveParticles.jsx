import { useEffect, useRef } from 'react'

const InteractiveParticles = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let particles = []
    let mouse = { x: null, y: null, radius: 150 }

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth || window.innerWidth
      canvas.height = canvas.parentElement.offsetHeight || window.innerHeight
      initParticles()
    }

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.4
        this.vy = (Math.random() - 0.5) * 0.4
        this.radius = Math.random() * 1.5 + 1
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy

        // Smooth mouse push away effect
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x
          const dy = mouse.y - this.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius
            this.x -= (dx / dist) * force * 0.5
            this.y -= (dy / dist) * force * 0.5
          }
        }
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(99, 102, 241, 0.4)'
        ctx.fill()
      }
    }

    const initParticles = () => {
      particles = []
      const density = Math.floor((canvas.width * canvas.height) / 9500)
      const count = Math.min(density, 120) // Cap to avoid cpu issues
      for (let i = 0; i < count; i++) {
        particles.push(new Particle())
      }
    }

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 100) {
            const alpha = ((100 - dist) / 100) * 0.1
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }

        // Interactive mouse connection line
        if (mouse.x !== null && mouse.y !== null) {
          const dx = particles[i].x - mouse.x
          const dy = particles[i].y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < mouse.radius) {
            const alpha = ((mouse.radius - dist) / mouse.radius) * 0.25
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.update()
        p.draw()
      })
      connectParticles()
      animationFrameId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouse.x = null
      mouse.y = null
    }

    window.addEventListener('resize', resizeCanvas)
    canvas.parentElement.addEventListener('mousemove', handleMouseMove)
    canvas.parentElement.addEventListener('mouseleave', handleMouseLeave)

    resizeCanvas()
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (canvas.parentElement) {
        canvas.parentElement.removeEventListener('mousemove', handleMouseMove)
        canvas.parentElement.removeEventListener('mouseleave', handleMouseLeave)
      }
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  )
}

export default InteractiveParticles
