import profilePhoto from '../assets/profile.jpeg'

function Hero() {

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I'm Nada</h1>
          <h2>Frontend Web Developer</h2>
          <p>
            I build clean, responsive web applications using React.
            Passionate about great design and maintainable code.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => scrollTo('projects')}>View My Projects</button>
            <button className="btn-outline" onClick={() => scrollTo('contact')}>Contact Me</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={profilePhoto} alt="Nada" />
        </div>
      </div>
    </section>
  )
}

export default Hero