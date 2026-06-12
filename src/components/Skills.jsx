const Skills = () => {
  const skillCategories = [
    {
      title: 'Core AI & ML',
      icon: '🤖',
      skills: ['Python', 'TensorFlow / PyTorch', 'Scikit-Learn', 'OpenCV'],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Generative AI & LLMs',
      icon: '✨',
      skills: ['OpenAI / Anthropic APIs', 'Hugging Face', 'LangChain', 'Prompt Engineering'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Cloud & AI Ops',
      icon: '☁️',
      skills: ['AWS Bedrock / SageMaker', 'FastAPI / Flask', 'Docker', 'Vector Databases (Chroma/Pinecone)'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Development & SQL',
      icon: '🛠️',
      skills: ['SQL & NoSQL', 'Git & GitHub', 'React / Node.js', 'CI/CD Basics'],
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <section id="skills" className="py-20 bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-4">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-dark rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-3xl group-hover:animate-pulse`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-darker rounded-lg px-4 py-2 text-center text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-primary/20 hover:to-secondary/20 transition-all duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
