
import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-center md:text-left">
              &copy; {currentYear} Rohan Nachane. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/rohannachane" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-foreground/10 hover:bg-highlight/20 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} className="text-highlight" />
            </a>
            <a 
              href="https://linkedin.com/in/rohannachane" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-foreground/10 hover:bg-highlight/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-highlight" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
