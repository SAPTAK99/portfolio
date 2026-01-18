import { useEffect, useRef } from 'react'
import './About.css'

const About = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (sectionRef.current) {
      sectionRef.current.style.opacity = '0'
      sectionRef.current.style.transform = 'translateY(30px)'
      sectionRef.current.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate fresher developer with a strong enthusiasm for creating innovative solutions
              and beautiful user experiences. I'm constantly learning modern web technologies and
              bringing ideas to life through clean code and thoughtful design.
            </p>
            <p>
              As a fresher, I'm eager to explore new technologies, contribute to projects, and grow
              in the developer community. I'm always open to learning opportunities and excited to
              work on challenging projects that help me expand my skills.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">Fresher</div>
                <div className="stat-label">Experience Level</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Dedication</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
