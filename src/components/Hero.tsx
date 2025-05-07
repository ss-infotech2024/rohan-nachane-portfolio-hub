
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-8">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-5"
        >
          <h2 className="text-accent text-lg font-medium">Hello, I'm</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Rohan Nachane
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate font-semibold">
            Software Developer | API Architect | AI Enthusiast
          </h2>
          <p className="text-lg text-slate-light max-w-2xl mt-2">
            A full-stack software developer specializing in scalable backend systems, 
            RESTful APIs, and efficient cross-functional collaboration.
          </p>
          <div className="flex gap-4 mt-6">
            <Button asChild size="lg">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent/20">
              <img 
                src="/placeholder.svg" 
                alt="Rohan Nachane" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/20 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
