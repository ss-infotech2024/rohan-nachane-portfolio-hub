
import { useEffect, useState } from 'react';

export const useThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    // Check for system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Return true if savedTheme is 'dark' or if there's no savedTheme but system prefers dark
    return savedTheme 
      ? savedTheme === 'dark' 
      : prefersDark;
  });

  useEffect(() => {
    // Apply theme to document root element
    const root = window.document.documentElement;
    
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return { isDarkMode, toggleTheme };
};
