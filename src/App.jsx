import { useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {
  useEffect(() => {
    // Scroll reveal observer
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -10% 0px', // Trigger when elements start entering viewport
      threshold: 0.05
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, observerOptions)

    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-darker text-gray-100 font-sans antialiasedSelection">
      <Navbar />
      <Hero />
      
      {/* Scroll Reveal Wrappers */}
      <div className="reveal">
        <About />
      </div>
      <div className="reveal">
        <Skills />
      </div>
      <div className="reveal">
        <Projects />
      </div>
      <div className="reveal">
        <Experience />
      </div>
      <div className="reveal">
        <Achievements />
      </div>
      <div className="reveal">
        <Contact />
      </div>

      <footer className="bg-dark border-t border-white/5 py-8 text-center text-gray-500 text-sm">
        <p>&copy; 2026 Ritesh Sudhakar Salve. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
