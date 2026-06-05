import { motion } from 'motion/react';

const TOOLS = [
  "Python", "n8n", "OpenAI", "Google Sheets API", "Web Scraping", 
  "Process Optimization", "React", "Node.js", "Docker", "SQL", "Git", "AI Integration"
];

const SYSTEMS = [
  "Zero-Touch CRM", "Lead Ingestion Pipelines", "Resume Multi-Mailer", 
  "Dynamic Scrapers", "Reporting Dashboards", "AI Workflow Agents", "Database Sync"
];

const MarqueeRow = ({ items, reverse = false }: { items: string[], reverse?: boolean }) => {
  return (
    <div className="flex overflow-hidden group py-4">
      <motion.div 
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap gap-8 pr-8"
      >
        {[...items, ...items].map((item, i) => (
          <div 
            key={i} 
            className="px-6 py-2 rounded-lg border border-gray-800 bg-gray-900/50 text-gray-400 font-mono text-sm hover:border-blue-500/50 hover:text-blue-400 transition-colors uppercase tracking-wider"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const MarqueeSection = () => {
  return (
    <section className="py-12 border-y border-gray-900 bg-black/40 relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-system-bg to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-system-bg to-transparent z-10" />
      
      <div className="container mx-auto px-4 mb-4">
        <h3 className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] mb-4">Core Stack & Systems</h3>
      </div>
      
      <div className="space-y-4">
        <MarqueeRow items={TOOLS} />
        <MarqueeRow items={SYSTEMS} reverse />
      </div>
    </section>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-24 container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="space-y-6"
        >
          <div className="space-y-2">
            <span className="text-blue-500 font-mono text-xs uppercase tracking-widest">Philosophy</span>
            <h2 className="text-4xl font-bold tracking-tight">THE EFFICIENCY ENGINE</h2>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed">
            I am a systems thinker who views every manual task as a bug that needs to be fixed. 
            My expertise lies in building automation-first systems that eliminate repetitive 
            work and scale operations effortlessly.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            From designing data ingestion pipelines to integrating AI agents into business workflows, 
            I focus on modular architectures that transform raw data into actionable intelligence. 
            Driven by performance and real-world impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square md:aspect-auto md:h-full min-h-[400px] rounded-3xl overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-emerald-600/20 flex items-center justify-center border border-gray-800">
            <div className="flex flex-col items-center gap-4 text-center p-8">
              <div className="w-24 h-24 rounded-full border-4 border-dashed border-blue-500/30 flex items-center justify-center animate-spin-slow">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><path d="M12 2v4"/><path d="m16.2 7.8 2.9-2.9"/><path d="M18 12h4"/><path d="m16.2 16.2 2.9 2.9"/><path d="M12 18v4"/><path d="m4.9 19.1 2.9-2.9"/><path d="M2 12h4"/><path d="m4.9 4.9 2.9 2.9"/></svg>
                  </motion.div>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-white">System Operator</h4>
                <p className="text-sm text-gray-500 max-w-xs">Building bridges between raw capability and automated execution.</p>
              </div>
            </div>
          </div>
          {/* Grid deco */}
          <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-blue-500/30 text-right space-y-1">
            <div>LOAD_STATE: ACTIVE</div>
            <div>CPU_AUTH: VERIFIED</div>
            <div>MEM_LINK: OPTIMIZED</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
