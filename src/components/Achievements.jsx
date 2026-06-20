const Achievements = () => {
  const achievements = [
    {
      title: 'IEEE Research Publication',
      desc: 'Author of a published research paper on Machine Learning-based cloudlet performance optimization in virtualized cloud environments.',
      category: 'Research Paper',
      metric: 'IEEE Xplore',
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: 'National Cybersecurity Hackathon',
      desc: 'Ranked in the Top 30 out of 500+ competing teams nationwide in a highly technical security tournament held at D.Y. Patil University.',
      category: 'Hackathon Rank',
      metric: 'Top 30 / 500+',
      icon: (
        <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
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
    <section id="achievements" className="py-20 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.03),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-4 font-display">
            Honors & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {achievements.map((item, index) => (
            <div
              key={index}
              onMouseMove={handleMouseMove}
              className="glass-card glow-spotlight rounded-2xl p-8 hover:-translate-y-1.5 transition-all duration-300 flex gap-6 relative border border-white/5"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                {item.icon}
              </div>
              <div className="flex-col flex justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="text-[10px] uppercase font-bold tracking-widest font-mono text-cyan-400">{item.category}</span>
                    <span className="px-2.5 py-0.5 bg-primary/20 border border-primary/30 rounded-md text-[10px] font-mono text-primary font-bold text-white">{item.metric}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 font-display">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
