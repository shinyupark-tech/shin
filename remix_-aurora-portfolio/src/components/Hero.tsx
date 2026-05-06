import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';
import { useRef } from 'react';

export default function Hero({ isLightMode }: { isLightMode: boolean }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
      <motion.div 
        style={{ y, opacity }}
        className="z-10 text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
           <span className={`font-mono text-[10px] uppercase tracking-[0.5em] mb-8 block transition-colors ${isLightMode ? "text-zinc-400" : "text-zinc-500"}`}>
            {isLightMode ? "Elevating Digital Standards" : "Building the Digital Future"}
          </span>
          <h1 className={`font-serif text-[clamp(3.5rem,12vw,9rem)] leading-[0.82] tracking-tighter mb-12 transition-colors ${isLightMode ? "text-zinc-900" : "text-white"}`}>
            {isLightMode ? (
              <>Design that <br /><span className="italic text-zinc-400">Transcends.</span></>
            ) : (
              <>Visual Harmony <br /><span className="not-italic text-zinc-400">Through Design</span></>
            )}
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className={`max-w-xl mx-auto font-sans text-base md:text-lg leading-relaxed mb-14 transition-colors ${isLightMode ? "text-zinc-500" : "text-zinc-400"}`}
        >
          {isLightMode 
            ? "We build refined digital architectures that prioritize clarity, sophistication, and the user experience."
            : "We create immersive digital experiences that blend artistic vision with technical precision. Your vision, elevated by our craft."
          }
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex gap-6 justify-center"
        >
          <button className={`px-10 py-5 font-sans font-bold uppercase text-[10px] tracking-[0.2em] rounded-full transition-all flex items-center gap-3 group sm:shadow-xl ${
            isLightMode 
              ? "bg-zinc-900 text-white hover:bg-zinc-800 shadow-zinc-200" 
              : "bg-white text-black hover:bg-zinc-200"
          }`}>
            {isLightMode ? "The Portfolio" : "View Projects"}
            <ArrowDownRight size={14} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </motion.div>

      {/* Atmospheric Background Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {isLightMode ? (
          <>
            <motion.div 
              animate={{ scale: [1, 1.1, 1], x: [0, 30, 0], y: [0, 20, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[-10%] left-[-10%] w-[100vw] h-[100vw] bg-[#F2F2EE] rounded-full blur-[150px] opacity-60"
            />
            <motion.div 
              animate={{ scale: [1, 1.2, 1], x: [0, -40, 0], y: [0, -30, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-[#EBECE7] rounded-full blur-[120px] opacity-50"
            />
          </>
        ) : (
          <>
            <motion.div 
              animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], x: [0, 50, 0], y: [0, 30, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] bg-zinc-800/10 rounded-full blur-[120px]"
            />
            <motion.div 
              animate={{ scale: [1, 1.1, 1], rotate: [0, -45, 0], x: [0, -30, 0], y: [0, -50, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-zinc-900/20 rounded-full blur-[100px]"
            />
          </>
        )}
      </div>

      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40"
      >
        <span className={`font-mono text-[9px] uppercase tracking-[0.4em] transition-colors ${isLightMode ? "text-zinc-900" : "text-zinc-500"}`}>
          {isLightMode ? "Discover" : "Scroll"}
        </span>
        <div className={`w-px h-16 transition-colors ${isLightMode ? "bg-zinc-200" : "bg-zinc-500"}`} />
      </motion.div>
    </section>
  );
}
