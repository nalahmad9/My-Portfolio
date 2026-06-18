function Skills() {
  const skills = [
    {
      category: 'Frontend Skills',
      items: ['Component-based development', 'Responsive design', 'React hooks'],
    },
    {
      category: 'UI / UX Basics',
      items: ['Clean layouts', 'Accessible markup', 'Typography'],
    },
    {
      category: 'Problem Solving',
      items: ['Debugging', 'Clean code practices', 'API integration'],
    },
    {
      category: 'Collaboration',
      items: ['Git workflow', 'Code review', 'Documentation'],
    },
  ]

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.category}>
            <h3>{skill.category}</h3>
            <ul>
              {skill.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills