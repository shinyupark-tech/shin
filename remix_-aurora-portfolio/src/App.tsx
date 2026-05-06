/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';
import { useState } from 'react';

export default function App() {
  const [isLightMode, setIsLightMode] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const toggleTheme = () => setIsLightMode(!isLightMode);

  return (
    <main className={`min-h-screen transition-colors duration-700 ${
      isLightMode 
        ? "bg-[#FDFDFB] text-zinc-900 selection:bg-zinc-200 selection:text-zinc-900" 
        : "bg-zinc-950 text-zinc-100 selection:bg-zinc-700 selection:text-white"
    }`}>
      <motion.div
        className={`fixed top-0 left-0 right-0 h-1 origin-left z-[100] ${
          isLightMode ? "bg-zinc-900" : "bg-zinc-400"
        }`}
        style={{ scaleX }}
      />
      
      <Header isLightMode={isLightMode} toggleTheme={toggleTheme} />
      <Hero isLightMode={isLightMode} />
      <Projects isLightMode={isLightMode} />
      <About isLightMode={isLightMode} />
      <Contact isLightMode={isLightMode} />
      <Footer isLightMode={isLightMode} />
    </main>
  );
}

