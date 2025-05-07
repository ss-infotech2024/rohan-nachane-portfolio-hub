
import React from 'react';
import { motion } from 'framer-motion';
import { Code, BookOpen, Mail } from 'lucide-react';

const servicesData = [
  {
    title: "Web Design",
    description: "Custom web solutions tailored to your specific business needs with clean, modern code and responsive design.",
    icon: <Code size={36} className="text-blue" />
  },
  {
    title: "Email Marketing Campaigns",
    description: "Strategic email campaigns with custom templates and automation to engage your audience and drive conversions.",
    icon: <Mail size={36} className="text-blue" />
  },
  {
    title: "Guest Lectures",
    description: "Engaging presentations on software development best practices for corporates and educational institutions.",
    icon: <BookOpen size={36} className="text-blue" />
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Services</h2>
          <div className="w-24 h-1 bg-blue"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="service-card hover:border-blue"
            >
              <div className="mb-5">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-slate-light">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
