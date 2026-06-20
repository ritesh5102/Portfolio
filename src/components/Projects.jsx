import { useState } from 'react'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      title: 'Sign Language Detection System',
      description: 'AI/ML powered system using Flask for real-time sign language detection and translation.',
      techStack: ['Python', 'Flask', 'TensorFlow', 'OpenCV'],
      github: 'https://github.com/ritesh5102/Project-on-Sign-Language-Translation.',
      category: 'ai'
    },
    {
      title: 'Customer Churn Prediction',
      description: 'Machine learning model predicting customer attrition by analyzing behavioral metrics and churn indicators.',
      techStack: ['Python', 'Scikit-learn', 'Pandas', 'XGBoost'],
      github: 'https://github.com/ritesh5102/Customer_Churn_Prediction',
      category: 'ai'
    },
    {
      title: 'Smart Farm Control Center',
      description: 'IoT and AI-based agriculture dashboard for real-time crop monitoring, disease detection, and pump controls.',
      techStack: ['Python', 'IoT', 'React', 'FastAPI'],
      github: 'https://github.com/ritesh5102/smart-farm-control-center',
      live: 'https://smartfarmcontrol.netlify.app',
      category: 'ai'
    },
    {
      title: 'Crypto Fraud Intelligence',
      description: 'An intelligence dashboard for detecting real-time cryptocurrency fraud, analyzing transactional risk, and streaming live alerts.',
      techStack: ['Python', 'FastAPI', 'WebSockets', 'React'],
      github: 'https://github.com/ritesh5102/crypto-fraud-platform',
      live: 'https://cryptofraudanalysis.netlify.app',
      category: 'data'
    }
  ]

  const handleMouseMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    card.style.setProperty('--mouse-x', `${x}px`)
    card.style.setProperty('--mouse-y', `${y}px`)
  }

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white'
                  : 'bg-darker text-gray-300 hover:text-white hover:bg-primary/20'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('ai')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === 'ai'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white'
                  : 'bg-darker text-gray-300 hover:text-white hover:bg-primary/20'
              }`}
            >
              AI/ML
            </button>
            <button
              onClick={() => setFilter('fullstack')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === 'fullstack'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white'
                  : 'bg-darker text-gray-300 hover:text-white hover:bg-primary/20'
              }`}
            >
              Full Stack
            </button>
            <button
              onClick={() => setFilter('data')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === 'data'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white'
                  : 'bg-darker text-gray-300 hover:text-white hover:bg-primary/20'
              }`}
            >
              Data Analysis
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              onMouseMove={handleMouseMove}
              className="glass-card glow-spotlight rounded-2xl p-6 hover:-translate-y-2 group flex flex-col justify-between"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 text-sm ${
                  project.live
                    ? 'bg-dark border border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800'
                    : 'bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                {project.live ? 'GitHub' : 'View on GitHub'}
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:opacity-90 transform hover:scale-105 transition-all duration-300 text-sm shadow-md hover:shadow-primary/30"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
