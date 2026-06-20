const Skills = () => {
  const skillCategories = [
    {
      title: 'Core AI & ML',
      icon: '🤖',
      skills: ['Python', 'TensorFlow / PyTorch', 'Scikit-Learn', 'OpenCV'],
      color: 'from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/30'
    },
    {
      title: 'Generative AI & LLMs',
      icon: '✨',
      skills: ['OpenAI / Anthropic APIs', 'Hugging Face', 'LangChain', 'Prompt Engineering'],
      color: 'from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30'
    },
    {
      title: 'Cloud & AI Ops',
      icon: '☁️',
      skills: ['AWS Bedrock / SageMaker', 'FastAPI / Flask', 'Docker', 'Vector Databases (Chroma/Pinecone)'],
      color: 'from-orange-500/20 to-red-500/20 text-orange-400 border-orange-500/30'
    },
    {
      title: 'Development & SQL',
      icon: '🛠️',
      skills: ['SQL & NoSQL', 'Git & GitHub', 'React / Node.js', 'CI/CD Basics'],
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-4">
            Skills
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
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${category.color.split(' ')[0]} ${category.color.split(' ')[1]} border ${category.color.split(' ')[3]} flex items-center justify-center text-3xl transition-transform duration-300 group-hover:scale-110 shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-6 text-center tracking-wide">
                  {category.title}
                </h3>
                <div className="space-y-2.5">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-darker/60 border border-white/5 rounded-lg px-4 py-2 text-center text-gray-300 text-sm font-medium hover:text-white hover:border-primary/35 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all duration-300 shadow-sm"
                    >
                      {skill}
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
