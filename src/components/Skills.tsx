
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Html, Java, SpringBoot, Web } from 'lucide-react';

const skillsData = [
  {
    category: "Back-End",
    skills: [
      { name: "Java", icon: <Java size={32} className="text-accent" /> },
      { name: "Spring Boot", icon: <SpringBoot size={32} className="text-accent" /> },
      { name: "Microservices", icon: <Code size={32} className="text-accent" /> },
      { name: "REST APIs", icon: <Code size={32} className="text-accent" /> },
    ]
  },
  {
    category: "Front-End",
    skills: [
      { name: "HTML", icon: <Html size={32} className="text-accent" /> },
      { name: "CSS", icon: <Code size={32} className="text-accent" /> },
      { name: "JavaScript", icon: <Code size={32} className="text-accent" /> },
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", icon: <Database size={32} className="text-accent" /> },
      { name: "MongoDB", icon: <Database size={32} className="text-accent" /> },
      { name: "Cassandra", icon: <Database size={32} className="text-accent" /> },
      { name: "Redis", icon: <Database size={32} className="text-accent" /> },
    ]
  },
  {
    category: "Cloud & Tools",
    skills: [
      { name: "AWS (EC2)", icon: <Web size={32} className="text-accent" /> },
      { name: "GCP", icon: <Web size={32} className="text-accent" /> },
      { name: "ngrok", icon: <Web size={32} className="text-accent" /> },
    ]
  },
  {
    category: "Core Strengths",
    skills: [
      { name: "Debugging", icon: <Code size={32} className="text-accent" /> },
      { name: "Designing", icon: <Code size={32} className="text-accent" /> },
      { name: "Problem Solving", icon: <Code size={32} className="text-accent" /> },
      { name: "Communication", icon: <Code size={32} className="text-accent" /> },
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
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

        <div className="space-y-10">
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-center">{category.category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="skill-icon"
                  >
                    {skill.icon}
                    <span className="font-medium mt-2">{skill.name}</span>
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
