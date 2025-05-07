
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Terminal, Laptop, Briefcase } from 'lucide-react';

const skillsData = {
  "Backend": [
    { name: "Java", icon: <Server size={24} className="text-accent" /> },
    { name: "Spring Boot", icon: <Server size={24} className="text-accent" /> },
    { name: "Microservices", icon: <Code size={24} className="text-accent" /> },
    { name: "REST APIs", icon: <Code size={24} className="text-accent" /> }
  ],
  "Frontend": [
    { name: "HTML", icon: <Code size={24} className="text-accent" /> },
    { name: "CSS", icon: <Code size={24} className="text-accent" /> },
    { name: "JavaScript", icon: <Code size={24} className="text-accent" /> }
  ],
  "Cloud & Tools": [
    { name: "AWS (EC2)", icon: <Laptop size={24} className="text-accent" /> },
    { name: "GCP", icon: <Laptop size={24} className="text-accent" /> },
    { name: "ngrok", icon: <Terminal size={24} className="text-accent" /> }
  ],
  "Databases": [
    { name: "MySQL", icon: <Database size={24} className="text-accent" /> },
    { name: "MongoDB", icon: <Database size={24} className="text-accent" /> },
    { name: "Cassandra", icon: <Database size={24} className="text-accent" /> },
    { name: "Derby", icon: <Database size={24} className="text-accent" /> },
    { name: "Redis", icon: <Database size={24} className="text-accent" /> }
  ],
  "Core Strengths": [
    { name: "Debugging", icon: <Terminal size={24} className="text-accent" /> },
    { name: "Designing", icon: <Briefcase size={24} className="text-accent" /> },
    { name: "Problem Solving", icon: <Briefcase size={24} className="text-accent" /> },
    { name: "Communication", icon: <Briefcase size={24} className="text-accent" /> }
  ]
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="bg-secondary/50 section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Skills</h2>
          <div className="w-24 h-1 bg-accent"></div>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="skills-category"
            >
              <h3 className="text-2xl font-semibold mb-6 text-center">{category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="skill-item"
                  >
                    {skill.icon}
                    <p className="mt-2 font-medium">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
