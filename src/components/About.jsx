const About = () => {
  const handleMouseMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    card.style.setProperty('--mouse-x', `${x}px`)
    card.style.setProperty('--mouse-y', `${y}px`)
  }

  const coreCompetencies = [
    'Machine Learning', 
    'Generative AI & LLMs',
    'Data Science & Analytics', 
    'FastAPI / Flask', 
    'Cloud Systems (AWS)', 
    'Full-Stack Integration'
  ]

  return (
    <section id="about" className="py-20 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-4 font-display">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div
            onMouseMove={handleMouseMove}
            className="glass-card glow-spotlight rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300"
          >
            {/* Open to Opportunities Badge */}
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold uppercase tracking-wider animate-pulse">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Currently open to opportunities
              </span>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed mb-6 font-sans">
              I'm a passionate AI Developer and Software Engineer with a strong foundation in 
              machine learning, LLM integrations, and modern cloud technologies. I specialize in building 
              intelligent applications and leveraging state-of-the-art AI services to solve complex problems.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6 font-sans">
              My journey in tech is driven by creating systems that combine cognitive computing capabilities (NLP, Computer Vision) 
              with solid backend development. I work extensively with Python, LangChain, API integrations (OpenAI, Hugging Face), and cloud architectures like AWS.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed font-sans">
              I thrive on continuous learning and am excited about deploying robust AI systems. 
              Let's connect and build something smart together!
            </p>

            {/* B.Tech Education Sub-block */}
            <div className="border-t border-white/5 mt-8 pt-6">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-display">Education</h3>
              <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-3">
                <div>
                  <h4 className="font-bold text-white text-base">B.Tech in Electronics & Computer Engineering</h4>
                  <p className="text-gray-400 text-sm">Sanjivani College of Engineering (SPPU), Pune</p>
                </div>
                <span className="px-3.5 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-gray-300 whitespace-nowrap">
                  Graduating 2026
                </span>
              </div>
            </div>

            {/* Competency Pills */}
            <div className="border-t border-white/5 mt-6 pt-6">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-display">Focus Areas</h3>
              <div className="flex flex-wrap gap-2">
                {coreCompetencies.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3.5 py-1.5 bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 text-gray-300 hover:text-white hover:border-primary/45 rounded-lg text-xs font-semibold transition-all duration-300 transform hover:-translate-y-0.5 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:opacity-90 transform hover:scale-105 transition-all duration-300 text-center text-sm"
              >
                Get In Touch
              </a>
              <a
                href="/Ritesh_Salve_Resume.pdf"
                download="Ritesh_Salve_Resume.pdf"
                className="px-6 py-3 border border-primary/30 text-primary hover:text-white rounded-lg font-semibold hover:bg-primary/20 hover:border-primary transform hover:scale-105 transition-all duration-300 text-center text-sm flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
