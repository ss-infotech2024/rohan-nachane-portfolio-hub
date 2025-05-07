
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <div className="w-24 h-1 bg-blue"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-2xl font-semibold mb-2 text-blue">Bio</h3>
            <p className="text-slate-light text-lg">
              I'm Rohan Nachane, a dedicated software developer with over two years of hands-on experience in full-stack development. 
              My expertise lies in creating scalable backend solutions, designing efficient APIs, and leveraging AI technologies to 
              solve complex business problems.
            </p>
            <p className="text-slate-light text-lg">
              I believe in continuous learning, collaborative problem-solving, and delivering high-quality code that makes a tangible impact. 
              My approach combines technical excellence with strong communication skills to build solutions that truly meet user needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue">Education</h3>
            
            <div className="mb-8 bg-card p-6 rounded-lg shadow-sm border border-blue/20 hover:border-blue/40 transition-colors">
              <h4 className="font-semibold text-lg">Bachelor of Engineering</h4>
              <p className="text-blue">G. H. Raisoni College of Engineering, Nagpur</p>
              <p className="text-sm text-muted-foreground mt-1">2018 - 2022</p>
              <p className="mt-2"><span className="font-medium">CGPA:</span> 9.33</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm border border-blue/20 hover:border-blue/40 transition-colors">
              <h4 className="font-semibold text-lg">Higher Secondary Certificate (HSC)</h4>
              <p className="text-blue">Sri Chaitanya Junior College, Hyderabad</p>
              <p className="text-sm text-muted-foreground mt-1">2016 - 2018</p>
              <p className="mt-2"><span className="font-medium">Percentage:</span> 90.5%</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
