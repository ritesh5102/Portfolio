import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-darker">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <footer className="bg-dark py-6 text-center text-gray-400">
        <p>&copy; 2024 Ritesh Sudhakar Salve. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
