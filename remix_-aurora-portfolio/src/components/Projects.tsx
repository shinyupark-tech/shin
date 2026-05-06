import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Nexus Data Hub',
    category: 'System Architecture',
    description: 'A revolutionary approach to real-time data visualization and processing.',
    image: 'https://picsum.photos/seed/nexus/800/1000'
  },
  {
    id: 2,
    title: 'Prism Visuals',
    category: 'Digital Art',
    description: 'Exploring the intersection of light, geometry, and human perception.',
    image: 'https://picsum.photos/seed/prism/800/1000'
  },
  {
    id: 3,
    title: 'The Void Engine',
    category: 'Game Dev',
    description: 'Performance-driven rendering engine for next-generation immersive worlds.',
    image: 'https://picsum.photos/seed/void/800/1000'
  }
];

export default function Projects({ isLightMode }: { isLightMode: boolean }) {
  return (
    <section id="work" className="py-32 px-6 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <span className={`font-mono text-[10px] uppercase tracking-[0.4em] mb-6 block transition-colors ${isLightMode ? "text-zinc-400" : "text-zinc-500"}`}>
            {isLightMode ? "Legacy of Craft" : "Selected Works"}
          </span>
          <h2 className={`font-serif text-6xl md:text-7xl tracking-tighter transition-colors ${isLightMode ? "text-zinc-900" : "text-white italic"}`}>
            {isLightMode ? <><span className="not-italic">Featured</span> <span className="italic">Works</span></> : "Crafted with Purpose"}
          </h2>
        </motion.div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 transition-all duration-500 ${isLightMode ? "gap-12" : "gap-8"}`}>
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer"
            >
              <div className={`relative aspect-[3/4] overflow-hidden transition-all duration-500 ${
                isLightMode ? "rounded-[2rem] bg-zinc-100 shadow-2xl shadow-zinc-200/50" : "rounded-2xl bg-zinc-900 border border-white/5"
              }`}>
                <motion.img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover transition-transform ${isLightMode ? "duration-1000 group-hover:scale-105" : "duration-700 group-hover:scale-110"}`}
                />
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px] ${
                  isLightMode ? "bg-white/10" : "bg-black/40"
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`p-5 rounded-full shadow-2xl transition-colors ${isLightMode ? "bg-zinc-900 text-white" : "bg-white text-black"}`}
                  >
                    <ExternalLink size={20} />
                  </motion.div>
                </div>
              </div>
              
              <div className={`flex flex-col gap-3 transition-all ${isLightMode ? "px-2 mt-8" : "mt-6"}`}>
                <span className={`font-mono text-[9px] uppercase tracking-[0.3em] transition-colors ${isLightMode ? "text-zinc-400" : "text-zinc-500"}`}>{project.category}</span>
                <h3 className={`font-serif text-3xl tracking-tight transition-colors ${
                  isLightMode ? "text-zinc-900 group-hover:text-zinc-600" : "text-white italic group-hover:text-zinc-400"
                }`}>{project.title}</h3>
                <p className={`text-sm leading-relaxed font-sans transition-colors ${isLightMode ? "text-zinc-500" : "text-zinc-500 max-w-[280px]"}`}>{project.description}</p>
                {isLightMode && <div className="w-8 h-px bg-zinc-200 mt-2 group-hover:w-full transition-all duration-700" />}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
