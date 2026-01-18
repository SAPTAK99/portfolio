import { useEffect, useRef, useState } from 'react'
import TaskManager from '../apps/TaskManager'
import './Projects.css'

const Projects = () => {
  const sectionRef = useRef(null)
  const [showTaskManager, setShowTaskManager] = useState(false)

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

  const projects = [
    {
      title: 'Shery-OS',
      description: 'A realtime-based operating system built for frontend development with advanced features and smooth performance.',
      tags: ['Frontend', 'OS', 'Realtime'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'NFT Marketplace',
      description: 'A comprehensive NFT marketplace platform with blockchain integration, wallet connectivity, and trading features.',
      tags: ['Backend', 'Blockchain', 'NFT'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Task Management App',
      description: 'A simple and intuitive task management application to organize your daily tasks. Add, complete, and delete tasks with ease.',
      tags: ['React', 'LocalStorage', 'JavaScript'],
      demoLink: '#',
      githubLink: '#',
      isTaskManager: true
    }
  ]

  const handleProjectClick = (project) => {
    if (project.isTaskManager) {
      setShowTaskManager(true)
    }
  }

  return (
    <>
      <section id="projects" className="projects" ref={sectionRef}>
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <div className="project-overlay">
                    {project.isTaskManager ? (
                      <button
                        className="project-link"
                        onClick={() => handleProjectClick(project)}
                        style={{
                          padding: '0.75rem 1.5rem',
                          background: 'var(--white)',
                          color: 'var(--primary-color)',
                          textDecoration: 'none',
                          borderRadius: '25px',
                          fontWeight: '600',
                          border: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        View Project
                      </button>
                    ) : (
                      <>
                        <a href={project.demoLink} className="project-link" target="_blank" rel="noopener noreferrer">
                          View Project
                        </a>
                        <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                          GitHub
                        </a>
                      </>
                    )}
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Task Manager Modal */}
      {showTaskManager && (
        <div className="modal-overlay" onClick={() => setShowTaskManager(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setShowTaskManager(false)}>
              ✕
            </button>
            <TaskManager />
          </div>
        </div>
      )}
    </>
  )
}

export default Projects
