import { useState, useEffect } from 'react'
import InteractiveParticles from './InteractiveParticles'

// Scramble Text component for premium decoding visual effect
const ScrambleText = ({ text }) => {
  const [displayText, setDisplayText] = useState(text)
  
  useEffect(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>[]{}$#@%&'
    let iteration = 0
    let interval = null
    
    interval = setInterval(() => {
      setDisplayText(() => 
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' '
            if (index < iteration) {
              return text[index]
            }
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join('')
      )
      
      if (iteration >= text.length) {
        clearInterval(interval)
      }
      iteration += 1 / 3
    }, 25)

    return () => clearInterval(interval)
  }, [text])

  return <span>{displayText}</span>
}

const Hero = () => {
  const [imgErr, setImgErr] = useState(false)

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-darker relative overflow-hidden">
      {/* Background Neural Particles */}
      <InteractiveParticles />
      
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8 relative group inline-block">
          {/* Animated gradient spinning ring */}
          <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-tr from-cyan-400 via-primary to-secondary p-[3px] shadow-[0_0_25px_rgba(99,102,241,0.2)] group-hover:shadow-[0_0_35px_rgba(99,102,241,0.35)] transition-all duration-500 relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 via-primary to-secondary animate-spin-slow opacity-60 blur-sm"></div>
            <div className="w-full h-full rounded-full bg-darker flex items-center justify-center overflow-hidden relative z-10">
              {!imgErr ? (
                <img
                  src="/profile.jpg"
                  alt="Ritesh Sudhakar Salve"
                  onError={() => setImgErr(true)}
                  className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <span className="text-4xl font-bold text-gradient tracking-widest">RS</span>
              )}
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
          <span className="text-gradient">Ritesh Sudhakar Salve</span>
        </h1>
        
        <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4 font-semibold tracking-wide h-8">
          <ScrambleText text="AI Developer | Software Engineer" />
        </h2>
        
        <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Passionate about building intelligent, scalable solutions and integrating diverse AI services
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/30"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-primary/50 text-primary hover:text-white rounded-lg font-semibold hover:bg-primary/20 hover:border-primary transform hover:scale-105 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-12 flex justify-center gap-6">
          <a
            href="https://github.com/ritesh5102"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
            aria-label="GitHub Profile"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/ritesh-salve-7b2010377"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
            aria-label="LinkedIn Profile"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="mailto:riteshsalveorg95@gmail.com"
            className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
            aria-label="Email Contact"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#about" className="text-gray-400 hover:text-white" aria-label="Scroll Down">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Hero
