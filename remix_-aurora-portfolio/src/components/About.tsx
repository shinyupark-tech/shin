import { motion } from 'motion/react';

export default function About({ isLightMode }: { isLightMode: boolean }) {
  return (
    <section id="about" className={`py-32 px-6 transition-colors duration-500 ${isLightMode ? "bg-[#F8F8F5]" : "bg-zinc-900/30"}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={`relative overflow-hidden transition-all duration-500 ${
            isLightMode ? "aspect-[4/5] rounded-[3rem] shadow-2xl shadow-zinc-200" : "aspect-square rounded-3xl border border-white/5"
          }`}
        >
          <img 
            src={isLightMode ? "https://picsum.photos/seed/studio/1000/1250" : "https://picsum.photos/seed/studio/1000/1000"}
            alt="The Studio" 
            referrerPolicy="no-referrer"
            className={`w-full h-full object-cover grayscale transition-all ${isLightMode ? "brightness-110" : "opacity-50 contrast-125"}`}
          />
          {!isLightMode && <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className={`font-mono text-[10px] uppercase tracking-[0.4em] mb-8 block ${isLightMode ? "text-zinc-400" : "text-zinc-500"}`}>
            {isLightMode ? "The Philosophy" : "Our Philosophy"}
          </span>
          <h2 className={`font-serif text-5xl md:text-6xl tracking-tighter mb-10 leading-[1.1] ${isLightMode ? "text-zinc-900" : "text-white italic"}`}>
            {isLightMode 
              ? <>Sophistication <span className="italic">through</span> simplify.</>
              : "Minimalism is not the absence of things, but the perfect amount of them."
            }
          </h2>
          <div className={`space-y-8 text-lg leading-relaxed ${isLightMode ? "text-zinc-500 font-sans" : "text-zinc-400 font-light"}`}>
            <p>
              {isLightMode 
                ? "We believe that true elegance lies in the details. Our approach combines classic design principles with modern technology to create digital experiences that are both timeless and forward-thinking."
                : "At Aurora, we believe that digital spaces should be as thoughtfully crafted as physical ones. We strip away the noise to find the essence of your brand, creating experiences that are both functional and emotionally resonant."
              }
            </p>
            {!isLightMode && (
              <p>Our process is rooted in a deep understanding of human behavior and a relentless pursuit of technical excellence. We don't just build websites; we create digital atmospheres.</p>
            )}
          </div>

          <div className={`mt-16 grid grid-cols-2 gap-12 pt-12 ${isLightMode ? "border-t border-zinc-200" : ""}`}>
            <div>
              <span className={`block font-serif text-4xl mb-2 ${isLightMode ? "text-zinc-900" : "text-white italic"}`}>
                {isLightMode ? <>08<span className="text-zinc-300">.</span></> : "12+"}
              </span>
              <span className={`font-mono text-[9px] uppercase tracking-[0.2em] font-bold ${isLightMode ? "text-zinc-400" : "text-zinc-500"}`}>
                {isLightMode ? "Years Experience" : "Awards Won"}
              </span>
            </div>
            <div>
              <span className={`block font-serif text-4xl mb-2 ${isLightMode ? "text-zinc-900" : "text-white italic"}`}>
                {isLightMode ? <>120<span className="text-zinc-300">+</span></> : "80+"}
              </span>
              <span className={`font-mono text-[9px] uppercase tracking-[0.2em] font-bold ${isLightMode ? "text-zinc-400" : "text-zinc-500"}`}>
                {isLightMode ? "Refined Solutions" : "Projects Delivered"}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
