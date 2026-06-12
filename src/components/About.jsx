const About = () => {
  return (
    <section id="about" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-darker rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a passionate AI Developer and Software Engineer with a strong foundation in 
              machine learning, LLM integrations, and modern cloud technologies. I specialize in building 
              intelligent applications and leveraging state-of-the-art AI services to solve complex problems.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              My journey in tech is driven by creating systems that combine cognitive computing capabilities (NLP, Computer Vision) 
              with solid backend development. I work extensively with Python, LangChain, API integrations (OpenAI, Hugging Face), and cloud architectures like AWS.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I thrive on continuous learning and am excited about deploying robust AI systems. 
              Let's connect and build something smart together!
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:opacity-90 transform hover:scale-105 transition-all duration-300 text-center"
              >
                Get In Touch
              </a>
              <a
                href="/resume.pdf"
                download="Ritesh_Salve_Resume.pdf"
                className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transform hover:scale-105 transition-all duration-300 text-center flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
