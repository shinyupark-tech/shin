import { motion } from 'motion/react';
import { Menu, X, Github, Mail, Sun, Moon } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  isLightMode: boolean;
  toggleTheme: () => void;
}

export default function Header({ isLightMode, toggleTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isLightMode 
          ? "bg-white/70 backdrop-blur-md border-b border-zinc-100" 
          : "mix-blend-difference"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <motion.div 
          className="flex flex-col cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <span className={`font-serif italic text-2xl tracking-tighter transition-colors ${isLightMode ? "text-zinc-900" : "text-white"}`}>Aurora</span>
          <span className={`font-mono text-[9px] uppercase tracking-[0.3em] transition-colors ${isLightMode ? "text-zinc-400" : "text-white/60"}`}>Creative Studio</span>
        </motion.div>

        <nav className="hidden md:flex gap-10 items-center">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className={`font-sans text-[10px] uppercase tracking-[0.25em] font-semibold transition-colors ${
                isLightMode ? "text-zinc-500 hover:text-zinc-900" : "text-zinc-100 hover:text-zinc-400"
              }`}
            >
              {item.name}
            </motion.a>
          ))}
          
          <div className={`flex gap-4 ml-6 pl-6 border-l transition-colors ${isLightMode ? "border-zinc-200" : "border-white/20"}`}>
            <motion.a href="#" className={`transition-colors ${isLightMode ? "text-zinc-400 hover:text-zinc-900" : "text-white"}`} whileHover={{ y: -2 }}><Github size={14} /></motion.a>
            <motion.a href="#" className={`transition-colors ${isLightMode ? "text-zinc-400 hover:text-zinc-900" : "text-white"}`} whileHover={{ y: -2 }}><Mail size={14} /></motion.a>
          </div>

          <motion.button 
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`ml-4 p-2 rounded-full transition-colors ${
              isLightMode ? "bg-zinc-100 text-zinc-900" : "bg-white/10 text-white"
            }`}
          >
            {isLightMode ? <Moon size={14} /> : <Sun size={14} />}
          </motion.button>
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <button onClick={toggleTheme} className={isLightMode ? "text-zinc-900" : "text-white"}>
            {isLightMode ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button className={isLightMode ? "text-zinc-900" : "text-white"} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 transition-colors ${
            isLightMode ? "bg-white" : "bg-black/95"
          }`}
        >
           {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`font-serif italic text-6xl transition-colors ${
                isLightMode ? "text-zinc-900 hover:text-zinc-400" : "text-white hover:text-zinc-400"
              }`}
            >
              {item.name}
            </motion.a>
          ))}
          <button 
            className={`absolute top-8 right-8 ${isLightMode ? "text-zinc-900" : "text-white"}`} 
            onClick={() => setIsOpen(false)}
          >
            <X size={32} />
          </button>
        </motion.div>
      )}
    </motion.header>
  );
}
