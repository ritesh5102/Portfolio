import { useState } from 'react'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      title: 'Smart Farm AI/ML Control Center',
      description: 'An advanced IoT and AI-based agriculture dashboard. Implements custom CNN models for real-time plant disease detection, crop recommendation algorithms, and soil-specific yield prediction pipelines.',
      techStack: ['Python', 'TensorFlow', 'IoT', 'FastAPI', 'React'],
      github: 'https://github.com/ritesh5102/smart-farm-control-center',
      live: 'https://smartfarmcontrol.netlify.app',
      category: 'ai',
      featured: true
    },
    {
      title: 'Sign Language Detection System',
      description: 'AI/ML powered system using Flask for real-time sign language detection and translation using computer vision and CNN structures.',
      techStack: ['Python', 'Flask', 'TensorFlow', 'OpenCV'],
      github: 'https://github.com/ritesh5102/Project-on-Sign-Language-Translation.',
      category: 'ai'
    },
    {
      title: 'Customer Churn Prediction',
      description: 'Machine learning model predicting customer attrition. Integrates with a 4-page Power BI dashboard for interactive visual analytics.',
      techStack: ['Python', 'Scikit-learn', 'Pandas', 'Power BI'],
      github: 'https://github.com/ritesh5102/Customer_Churn_Prediction',
      category: 'ai'
    },
    {
      title: 'Crypto Fraud Intelligence',
      description: 'An intelligence dashboard for detecting real-time cryptocurrency fraud, analyzing transactional risk, and streaming live alerts over WebSockets.',
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
    <section id="projects" className="py-20 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.03),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-4 font-display">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: 'all', name: 'All' },
              { id: 'ai', name: 'AI/ML' },
              { id: 'data', name: 'Data & Analytics' }
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  filter === btn.id
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25'
                    : 'bg-darker border border-white/5 text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {btn.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            if (project.featured) {
              return (
                <div
                  key={index}
                  onMouseMove={handleMouseMove}
                  className="glass-card glow-spotlight rounded-3xl p-8 hover:-translate-y-1.5 lg:col-span-2 flex flex-col md:flex-row gap-8 transition-all duration-300 relative border border-primary/20 bg-gradient-to-br from-primary/5 via-dark to-dark"
                >
                  {/* Featured Project Preview Custom Interactive UI Mockup */}
                  <div className="w-full md:w-2/5 min-h-[240px] rounded-2xl border border-white/5 relative overflow-hidden bg-darker/60 flex flex-col justify-between p-4 group select-none self-stretch">
                    {/* Glass header */}
                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        <span className="text-[10px] font-mono font-semibold text-gray-400">NODE_CONTROL_A1</span>
                      </div>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">LIVE FEED</span>
                    </div>
                    
                    {/* Metric list */}
                    <div className="space-y-2.5 my-3">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-400 flex items-center gap-1">🌡️ Temp</span>
                        <span className="font-mono text-white font-bold">28.4°C</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-400 flex items-center gap-1">💧 Moisture</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-cyan-400 rounded-full" style={{ width: '64%' }}></div>
                          </div>
                          <span className="font-mono text-cyan-400 font-bold">64%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-400 flex items-center gap-1">🌾 Yield Forecast</span>
                        <span className="font-mono text-emerald-400 font-bold">+18.4%</span>
                      </div>
                    </div>

                    {/* Scan overlay footer */}
                    <div className="bg-white/5 rounded-lg p-2 flex items-center justify-between border border-white/10 text-[10px]">
                      <div className="flex items-center gap-1.5 text-gray-300">
                        <span className="text-xs">🔬</span>
                        <span>CNN Crop Scan:</span>
                      </div>
                      <span className="text-emerald-400 font-semibold font-mono">Healthy (0.0% disease)</span>
                    </div>
                    
                    {/* Grid background & sweep line */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none -z-10"></div>
                  </div>

                  {/* Featured Project Content */}
                  <div className="w-full md:w-3/5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2.5 py-1 bg-primary/25 border border-primary/45 rounded-full text-[10px] uppercase font-bold text-white tracking-widest">AI & IoT</span>
                        <span className="px-2.5 py-1 bg-emerald-500/15 border border-emerald-500/35 rounded-full text-[10px] uppercase font-bold text-emerald-400 tracking-widest">Active</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-display group-hover:text-gradient transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm mb-5 font-sans">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-semibold text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-secondary text-white rounded-xl text-sm font-semibold hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-md shadow-primary/20"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Live Demo
                          </a>
                        )}
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-darker border border-white/10 text-gray-300 hover:text-white rounded-xl text-sm font-semibold hover:bg-white/5 transform hover:scale-105 transition-all duration-300"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }

            return (
              <div
                key={index}
                onMouseMove={handleMouseMove}
                className="glass-card glow-spotlight rounded-2xl p-6 hover:-translate-y-2 group flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  {/* Visual Mockup Overlay */}
                  {project.title === 'Sign Language Detection System' && (
                    <div className="w-full h-32 rounded-xl bg-darker/60 border border-white/5 relative overflow-hidden flex items-center justify-center p-3 mb-4 group-hover:border-primary/25 transition-all duration-300 select-none">
                      <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/20"></div>
                      <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/20"></div>
                      <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/20"></div>
                      <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/20"></div>
                      <div className="text-center z-10">
                        <div className="relative inline-block px-3 py-1.5 bg-primary/10 border border-primary/30 rounded-lg text-primary text-[10px] font-mono font-bold tracking-wide animate-pulse">
                          Gesture: THANK YOU
                        </div>
                        <div className="mt-2 text-[9px] font-mono text-gray-500">
                          Accuracy: 96.7% | Latency: 24ms
                        </div>
                      </div>
                      <div className="absolute bottom-2 left-4 right-4 flex items-end justify-center gap-[3px] h-3">
                        <div className="w-[2px] bg-primary/30 rounded-full h-1 animate-bounce" style={{ animationDuration: '0.8s' }}></div>
                        <div className="w-[2px] bg-primary/50 rounded-full h-2 animate-bounce" style={{ animationDuration: '1.2s', animationDelay: '0.1s' }}></div>
                        <div className="w-[2px] bg-primary/80 rounded-full h-3 animate-bounce" style={{ animationDuration: '1s', animationDelay: '0.2s' }}></div>
                        <div className="w-[2px] bg-secondary/80 rounded-full h-2 animate-bounce" style={{ animationDuration: '0.9s', animationDelay: '0.3s' }}></div>
                        <div className="w-[2px] bg-secondary/40 rounded-full h-1 animate-bounce" style={{ animationDuration: '1.1s', animationDelay: '0.4s' }}></div>
                      </div>
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none"></div>
                    </div>
                  )}

                  {project.title === 'Customer Churn Prediction' && (
                    <div className="w-full h-32 rounded-xl bg-darker/60 border border-white/5 relative overflow-hidden flex flex-col justify-between p-3 mb-4 group-hover:border-secondary/25 transition-all duration-300 select-none">
                      <div className="flex justify-between items-center z-10">
                        <span className="text-[9px] font-mono text-gray-400">RETENTION_MODEL_V2</span>
                        <span className="text-[9px] font-mono text-orange-400 font-semibold px-1.5 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">PREDICTIVE</span>
                      </div>
                      <div className="flex justify-around items-center my-1.5 z-10">
                        <div className="text-center">
                          <span className="text-[8px] uppercase tracking-wider text-gray-500 block">Churn Risk</span>
                          <span className="text-lg font-mono font-bold text-white">24.2%</span>
                        </div>
                        <div className="flex gap-1.5 items-end h-8">
                          <div className="w-2.5 bg-red-500/80 rounded-t h-4"></div>
                          <div className="w-2.5 bg-orange-500/80 rounded-t h-6"></div>
                          <div className="w-2.5 bg-emerald-500/80 rounded-t h-8"></div>
                        </div>
                      </div>
                      <div className="flex justify-between text-[8px] text-gray-500 border-t border-white/5 pt-1.5 z-10">
                        <span>Accuracy: 89.4%</span>
                        <span>UAT: Passed</span>
                      </div>
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none"></div>
                    </div>
                  )}

                  {project.title === 'Crypto Fraud Intelligence' && (
                    <div className="w-full h-32 rounded-xl bg-darker/60 border border-white/5 relative overflow-hidden flex flex-col justify-between p-3 mb-4 group-hover:border-primary/25 transition-all duration-300 select-none">
                      <div className="flex justify-between items-center z-10">
                        <span className="text-[9px] font-mono text-gray-400">WEBSOCKET_MONITOR</span>
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                      </div>
                      <div className="font-mono text-[9px] text-gray-400 space-y-1 my-1 overflow-hidden h-14 z-10">
                        <div className="truncate text-gray-500">&gt; listening block #19403...</div>
                        <div className="truncate text-gray-500">&gt; Tx 0x7a...d3: risk score 0.05</div>
                        <div className="truncate text-red-400 bg-red-950/20 px-1 border border-red-500/20 rounded">
                          &gt; Tx 0x9f...8a: RISK 0.98! (CIRCULAR)
                        </div>
                      </div>
                      <div className="flex justify-between text-[8px] text-gray-500 border-t border-white/5 pt-1 z-10">
                        <span>Rate: 14 tx/sec</span>
                        <span className="text-red-400 font-bold">1 Alert</span>
                      </div>
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none"></div>
                    </div>
                  )}

                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-widest font-mono">Project</span>
                    {project.live && (
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300 font-display">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm mb-4 font-sans">
                    {project.description}
                  </p>
                </div>
                
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-md text-[11px] font-semibold text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 text-xs ${
                        project.live
                          ? 'bg-darker border border-white/10 text-gray-300 hover:text-white hover:bg-white/5'
                          : 'bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90'
                      }`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      {project.live ? 'GitHub' : 'View GitHub'}
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-xl text-xs font-semibold hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-md shadow-primary/10"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
