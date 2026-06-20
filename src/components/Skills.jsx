const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: '💻',
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
      icon: '🤖',
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
      icon: '📊',
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
      icon: '🌐',
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
