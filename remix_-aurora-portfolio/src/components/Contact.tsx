import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export default function Contact({ isLightMode }: { isLightMode: boolean }) {
  return (
    <section id="contact" className="py-32 px-6 transition-colors duration-500">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className={`font-mono text-[10px] uppercase tracking-[0.4em] mb-6 block transition-colors ${isLightMode ? "text-zinc-400" : "text-zinc-500"}`}>
            {isLightMode ? "Ready to Begin?" : "Get in Touch"}
          </span>
          <h2 className={`font-serif text-6xl md:text-7xl tracking-tighter transition-colors ${isLightMode ? "text-zinc-900 italic" : "text-white italic"}`}>
            {isLightMode ? <>Let's <span className="not-italic">Connect</span></> : "Let's Create Together"}
          </h2>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="text-left">
              <label className={`font-mono text-[9px] uppercase tracking-[0.2em] mb-3 block font-bold transition-colors ${isLightMode ? "text-zinc-400" : "text-zinc-500"}`}>
                {isLightMode ? "Full Name" : "Name"}
              </label>
              <input 
                type="text" 
                className={`w-full p-4 focus:outline-none transition-all font-sans ${
                  isLightMode 
                    ? "bg-[#F5F5F0] border-b border-zinc-200 focus:border-zinc-900 text-zinc-900" 
                    : "bg-zinc-900/50 border border-white/5 rounded-xl focus:border-zinc-500 text-zinc-100"
                }`}
                placeholder={isLightMode ? "Name" : "Jan Doe"}
              />
            </div>
            <div className="text-left">
              <label className={`font-mono text-[9px] uppercase tracking-[0.2em] mb-3 block font-bold transition-colors ${isLightMode ? "text-zinc-400" : "text-zinc-500"}`}>
                {isLightMode ? "Email Address" : "Email"}
              </label>
              <input 
                type="email" 
                className={`w-full p-4 focus:outline-none transition-all font-sans ${
                  isLightMode 
                    ? "bg-[#F5F5F0] border-b border-zinc-200 focus:border-zinc-900 text-zinc-900" 
                    : "bg-zinc-900/50 border border-white/5 rounded-xl focus:border-zinc-500 text-zinc-100"
                }`}
                placeholder={isLightMode ? "email@example.com" : "jan@example.com"}
              />
            </div>
          </div>
          
          <div className="text-left">
            <label className={`font-mono text-[9px] uppercase tracking-[0.2em] mb-3 block font-bold transition-colors ${isLightMode ? "text-zinc-400" : "text-zinc-500"}`}>
              {isLightMode ? "Project Brief" : "Message"}
            </label>
            <textarea 
              rows={isLightMode ? 4 : 5}
              className={`w-full p-4 focus:outline-none transition-all font-sans resize-none ${
                isLightMode 
                  ? "bg-[#F5F5F0] border-b border-zinc-200 focus:border-zinc-900 text-zinc-900" 
                  : "bg-zinc-900/50 border border-white/5 rounded-xl focus:border-zinc-500 text-zinc-100"
              }`}
              placeholder={isLightMode ? "Tell us about your story..." : "Tell us about your project..."}
            />
          </div>

          <motion.button
            whileHover={isLightMode ? { scale: 1.01, backgroundColor: '#18181b' } : { scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
            className={`w-full py-6 font-sans font-bold uppercase text-[10px] tracking-[0.4em] rounded-full flex items-center justify-center gap-3 transition-all ${
              isLightMode 
                ? "bg-zinc-900 text-white shadow-xl shadow-zinc-200" 
                : "bg-white text-black hover:bg-zinc-200"
            }`}
          >
            {isLightMode ? "Start a Conversation" : "Send Inquiry"}
            <Send size={14} />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
