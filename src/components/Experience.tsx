
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: "SS Infotech",
    position: "Sr. Software Developer",
    period: "May 2024 - Present",
    description: [
      "Lead backend development initiatives using Java and Spring Boot",
      "Design and implement RESTful APIs for client applications",
      "Integrate AI solutions to enhance product capabilities",
      "Create comprehensive API documentation for development teams",
      "Coordinate with cross-functional teams to deliver high-quality software"
    ]
  },
  {
    company: "AliGn Infotech Pvt Ltd",
    position: "Software Developer",
    period: "May 2023 - April 2024",
    description: [
      "Designed algorithms for efficient data processing",
      "Developed virtual portfolio systems for financial applications",
      "Created and maintained stock data APIs with high performance requirements",
      "Collaborated with front-end teams to ensure seamless integration",
      "Implemented security features for sensitive financial data"
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Work Experience</h2>
          <div className="w-24 h-1 bg-blue"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="timeline-item"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">{exp.position}</h3>
                <div className="bg-blue/10 text-blue px-3 py-1 rounded-full text-sm">
                  {exp.period}
                </div>
              </div>
              <h4 className="text-lg text-blue mb-3">{exp.company}</h4>
              <ul className="space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <Briefcase size={16} className="text-blue mt-1 mr-2 flex-shrink-0" />
                    <span className="text-slate-light">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
