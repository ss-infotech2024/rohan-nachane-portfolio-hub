
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // In a real application, you would send this data to a backend API
    toast.success('Message sent successfully! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Phone size={20} className="text-accent" />,
      label: "Phone",
      value: "+91 9325954352",
      link: "tel:+919325954352"
    },
    {
      icon: <Mail size={20} className="text-accent" />,
      label: "Email",
      value: "rnachane007@gmail.com",
      link: "mailto:rnachane007@gmail.com"
    },
    {
      icon: <Linkedin size={20} className="text-accent" />,
      label: "LinkedIn",
      value: "linkedin.com/in/rohannachane",
      link: "https://linkedin.com/in/rohannachane"
    },
    {
      icon: <Github size={20} className="text-accent" />,
      label: "GitHub",
      value: "github.com/rohannachane",
      link: "https://github.com/rohannachane"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Contact Me</h2>
          <div className="w-24 h-1 bg-accent"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            <p className="text-slate-light mb-8">
              I'm always open to discussing new projects, opportunities, and partnerships.
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="p-3 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-slate-light">{info.label}</p>
                    <a 
                      href={info.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-medium hover:text-accent transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-card p-6 rounded-lg shadow-sm">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email address"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message"
                  rows={5}
                />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
