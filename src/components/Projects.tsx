
import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const projectsData = [
  {
    title: "BookMyFarms",
    description: "A farmhouse booking platform with a robust backend built using Spring Boot and MongoDB. Features include user authentication, booking management, and payment processing.",
    image: "/placeholder.svg",
    technologies: ["Java", "Spring Boot", "MongoDB", "REST API"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "SAiPropertyService",
    description: "AI-integrated property search service using GROQ AI for natural language processing to match property listings with user search queries and preferences.",
    image: "/placeholder.svg",
    technologies: ["Java", "AI Integration", "Spring Boot", "REST API"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "PharmaConnect",
    description: "Healthcare full-stack solution providing secure access control for pharmaceutical inventory management and distribution tracking.",
    image: "/placeholder.svg",
    technologies: ["Java", "Spring Boot", "MySQL", "Security"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "SFDevOrgService",
    description: "Salesforce diagnostic data automation tool that simplifies development workflow and improves maintenance processes.",
    image: "/placeholder.svg",
    technologies: ["Java", "Salesforce API", "Automation"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "EmailService",
    description: "Custom email automation service built with Java and Spring Boot that handles templating, scheduling, and delivery analytics.",
    image: "/placeholder.svg",
    technologies: ["Java", "Spring Boot", "Email Automation"],
    githubUrl: "#",
    liveUrl: "#"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Projects</h2>
          <div className="w-24 h-1 bg-accent"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card flex flex-col overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-slate-light mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  <Button asChild size="sm" variant="outline">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github size={16} /> GitHub
                    </a>
                  </Button>
                  <Button asChild size="sm">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
