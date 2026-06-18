function HireMe() {
  const reasons = [
    {
      title: 'Fast Learner',
      description: 'I pick up new tools and frameworks quickly and apply them to real projects.',
    },
    {
      title: 'Clean Code',
      description: 'I write readable, well-structured code that is easy for any team to work with.',
    },
    {
      title: 'Responsive Design',
      description: 'Every interface I build works perfectly on mobile, tablet, and desktop.',
    },
    {
      title: 'Team Player',
      description: 'I communicate clearly, document my work, and collaborate well with others.',
    },
    {
      title: 'Passionate',
      description: 'I genuinely love building for the web and I am always improving my skills.',
    },
    {
      title: 'Problem Solver',
      description: 'I break down complex challenges into simple, effective solutions that get the job done.',
    },
  ]

  return (
    <section>
      <h2>Why Hire Me</h2>
      <div className="hire-grid">
        {reasons.map((reason) => (
          <div className="hire-card" key={reason.title}>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HireMe