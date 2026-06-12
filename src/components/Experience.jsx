const Experience = () => {
  const experiences = [
    {
      title: 'Data Analytics Trainee',
      company: 'Scatterpie Analytics',
      duration: 'Aug 2025 – Nov 2025',
      highlights: [
        'Elicited and documented detailed business requirements using scenario-based techniques; produced functional specifications and project definition documents that guided Python and SQL pipeline development for client KPI dashboards.',
        'Executed system test scripts and participated in UAT processes — validated data accuracy, tracked issues, assumptions, and dependencies, and maintained change control documentation throughout the project lifecycle.',
        'Engaged stakeholders to resolve requirement conflicts and effectively presented analytical options and recommendations, enabling informed decisions across business and technology teams.',
      ],
    },
    {
      title: 'Data Analyst Intern',
      company: 'Godrej Infotech Ltd.',
      duration: 'Jan 2025 – Mar 2025',
      highlights: [
        'Conducted post-engagement requirement elicitation with operations and management teams; documented use cases and translated business needs into functional database table structures using MySQL, supporting 12+ Power BI dashboard implementations.',
        'Analysed 10,000+ client records and produced project scoping documents, trend analysis reports, and pricing strategy insights — directly adopted by the client business team after structured stakeholder presentations.',
        'Built and validated an ML pipeline for stock-out risk prediction — managed project risks, test execution, and system performance analysis, reducing incidents by 15% with measurable client impact.',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-dark rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] mb-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-primary text-lg font-semibold">
                    {exp.company}
                  </p>
                </div>
                <div className="mt-2 sm:mt-0">
                  <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
                    {exp.duration}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Highlights:</h4>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, highlightIndex) => (
                    <li
                      key={highlightIndex}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <span className="w-2 h-2 mt-2 bg-gradient-to-r from-primary to-secondary rounded-full flex-shrink-0"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
