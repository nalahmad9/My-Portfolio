function ProjectCard({ name, description, technologies, github }) {
  return (
    <div className="project-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="project-tags">
        {technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
      <a href={github} target="_blank" rel="noreferrer">
        GitHub
      </a>
    </div>
  )
}

export default ProjectCard