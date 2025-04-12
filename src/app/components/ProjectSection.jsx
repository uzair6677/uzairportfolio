import React from 'react'
import ProjectCard from './ProjectCard'

const projectData = [
  {
    id: 1,
    title: 'Portfolio Website in Next.js',
    description: 'Project 1 description',
    image: '/assets/images/projects/1.jpg',
    tag: ['All', 'Web']
  }
]

const ProjectSection = () => {
  return (
    <div>
      <h1>My Projects</h1>
      <div>
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tag={project.tag}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectSection
