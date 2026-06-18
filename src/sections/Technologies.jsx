function Technologies() {
  const techs = [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JavaScript' },
    { name: 'React' },
    { name: 'Tailwind' },
    { name: 'Bootstrap' },
    { name: 'Git' },
    { name: 'GitHub' },
  ]

  return (
    <section>
      <h2>Technologies & Tools</h2>
      <div className="tech-grid">
        {techs.map((tech) => (
          <span className="tech-chip" key={tech.name}>{tech.name}</span>
        ))}
      </div>
    </section>
  )
}

export default Technologies