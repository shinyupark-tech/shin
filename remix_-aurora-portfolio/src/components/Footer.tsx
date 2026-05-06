import { motion } from 'motion/react';

export default function Footer({ isLightMode }: { isLightMode: boolean }) {
  return (
    <footer className={`py-24 px-6 transition-colors duration-500 ${isLightMode ? "bg-white border-t border-zinc-100" : "border-t border-white/5"}`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col items-center md:items-start text-current">
          <span className={`font-serif italic text-3xl tracking-tighter mb-3 ${isLightMode ? "text-zinc-900" : ""}`}>Aurora</span>
          <span className={`font-mono text-[9px] uppercase tracking-[0.2em] font-bold ${isLightMode ? "text-zinc-400" : "text-zinc-500"}`}>
            © 2024 Aurora Creative Studio.
          </span>
        </div>

        <div className="flex gap-10">
          {(isLightMode ? ['Instagram', 'LinkedIn', 'Behance'] : ['Instagram', 'Dribbble', 'LinkedIn', 'Twitter']).map((social) => (
            <motion.a
              key={social}
              href="#"
              whileHover={{ y: -1, color: isLightMode ? '#18181b' : '#fff' }}
              className={`font-mono text-[10px] uppercase tracking-[0.15em] transition-colors font-medium ${isLightMode ? "text-zinc-400" : "text-zinc-500"}`}
            >
              {social}
            </motion.a>
          ))}
        </div>

        <div className="text-center md:text-right">
          <span className={`font-mono text-[9px] uppercase tracking-[0.2em] block mb-2 font-bold ${isLightMode ? "text-zinc-400" : "text-zinc-500"}`}>
            {isLightMode ? "Inquiry" : "Local Time"}
          </span>
          <span className={`font-serif text-lg ${isLightMode ? "text-zinc-900 italic" : "font-mono text-xs"}`}>
            {isLightMode ? "hello@aurora.studio" : `${new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })} UTC`}
          </span>
        </div>
      </div>
    </footer>
  );
}
