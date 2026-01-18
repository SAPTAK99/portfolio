import { useEffect, useRef } from 'react'
import './Skills.css'

const Skills = () => {
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

  const skills = [
    {
      icon: '💻',
      title: 'Frontend',
      description: 'React, HTML5, CSS3, JavaScript, TypeScript'
    },
    {
      icon: '⚙️',
      title: 'Backend',
      description: 'Node.js, Express, REST APIs'
    },
    {
      icon: '🗄️',
      title: 'Database',
      description: 'MongoDB, MySQL'
    },
    {
      icon: '☁️',
      title: 'DevOps',
      description: 'AWS, Git, Linux'
    },
    {
      icon: '🎨',
      title: 'Design',
      description: 'Figma, UI/UX Design'
    }
  ]

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
