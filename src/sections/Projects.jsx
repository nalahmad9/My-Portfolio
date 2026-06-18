import ProjectCard from '../components/ProjectCard'

function Projects(){
const projects = [
    {
      name: 'Home Services Website',
      description: 'A frontend design for a home services website with a clean, responsive layout.',
      technologies: ['React', 'CSS', 'Responsive Design'],
      github: 'https://github.com/nalahmad9/HomePro',
    },
    {
      name: 'E-Commerce Checkout Flow',
      description: 'A multi-step checkout flow for an e-commerce website with form validation and order summary.',
      technologies: ['React', 'useState', 'CSS'],
      github: 'https://github.com/nalahmad9/Checkout',
    },
    /*{
      name: 'Portfolio Website',
      description: 'This very site — component-based, responsive, built with React.',
      technologies: ['React', 'CSS'],
      github: 'https://github.com/yourusername/my-portfolio',
    },*/
  ]

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects