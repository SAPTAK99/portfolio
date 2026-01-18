import './Hero.css'

const Hero = () => {
  const handleScrollClick = (sectionId) => {
    const target = document.querySelector(`#${sectionId}`)
    if (target) {
      const offsetTop = target.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="greeting">Hi, I'm</span>
              <span className="name">Saptak Majumder</span>
            </h1>
            <p className="hero-subtitle">Full Stack Developer & Creative Problem Solver</p>
            <p className="hero-description">
              I create beautiful, functional, and user-centered digital experiences.
              Welcome to my portfolio!
            </p>
            <div className="hero-buttons">
              <button
                className="btn btn-primary"
                onClick={() => handleScrollClick('projects')}
              >
                View My Work
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => handleScrollClick('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="80" fill="url(#gradient)"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:"#667eea", stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:"#764ba2", stopOpacity:1}} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  )
}

export default Hero
