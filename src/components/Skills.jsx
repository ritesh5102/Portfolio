const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: (
        <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: [
        { name: 'Python', level: 90 },
        { name: 'SQL', level: 85 },
        { name: 'JavaScript', level: 75 },
        { name: 'C++', level: 70 }
      ],
      color: 'from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/30'
    },
    {
      title: 'ML / AI',
      icon: (
        <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      skills: [
        { name: 'TensorFlow / PyTorch', level: 80 },
        { name: 'Scikit-Learn', level: 85 },
        { name: 'LLM API Integration', level: 80 },
        { name: 'OpenCV', level: 75 }
      ],
      color: 'from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30'
    },
    {
      title: 'Data Tools',
      icon: (
        <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2m0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      skills: [
        { name: 'Pandas & NumPy', level: 90 },
        { name: 'Power BI & Excel', level: 85 },
        { name: 'Data Visualization', level: 85 },
        { name: 'ETL Pipelines', level: 75 }
      ],
      color: 'from-orange-500/20 to-red-500/20 text-orange-400 border-orange-500/30'
    },
    {
      title: 'Web Stack',
      icon: (
        <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      skills: [
        { name: 'React.js / Node.js', level: 75 },
        { name: 'FastAPI / Flask', level: 80 },
        { name: 'AWS Bedrock / Cloud', level: 75 },
        { name: 'Git & GitHub', level: 90 }
      ],
      color: 'from-green-500/20 to-emerald-500/20 text-green-400 border-green-500/30'
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

  return (
    <section id="skills" className="py-20 bg-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.03),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-4 font-display">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              onMouseMove={handleMouseMove}
              className="glass-card glow-spotlight rounded-2xl p-6 hover:-translate-y-2 group flex flex-col justify-between"
            >
              <div>
                <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${category.color.split(' ')[0]} ${category.color.split(' ')[1]} border ${category.color.split(' ')[3]} flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110 shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-6 text-center tracking-wide font-display">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-semibold text-gray-300">
                        <span>{skill.name}</span>
                        <span className="text-primary font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-darker/60 border border-white/5 rounded-full overflow-hidden relative">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full relative transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        >
                          <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-white shadow-[0_0_8px_#ffffff] rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
