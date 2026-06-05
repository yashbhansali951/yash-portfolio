import { motion, useScroll, useTransform } from 'motion/react';
import { Terminal, Cpu, Database, Network } from 'lucide-react';
import { useRef } from 'react';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden px-4">
      {/* Background Visualization */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="relative w-full max-w-4xl aspect-video opacity-30">
          <svg viewBox="0 0 800 400" className="w-full h-full text-blue-500 fill-none stroke-current stroke-[0.5]">
            {/* Background Radial Glow */}
            <defs>
              <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.4)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
              </radialGradient>
            </defs>

            {/* Static Connection Lines */}
            <path 
              d="M 100 200 L 250 200 M 270 200 L 400 100 M 270 200 L 400 300 M 420 100 L 550 100 M 420 300 L 550 300 M 570 100 L 700 200 M 570 300 L 700 200" 
              className="opacity-20"
            />

            {/* Animated Path Trails */}
            <motion.path
              d="M 100 200 L 250 200 M 270 200 L 400 100 M 270 200 L 400 300 M 420 100 L 550 100 M 420 300 L 550 300 M 570 100 L 700 200 M 570 300 L 700 200"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Data Packets (Traveling Circles) */}
            {[
              { path: "M 100 200 L 250 200", delay: 0 },
              { path: "M 270 200 L 400 100", delay: 1 },
              { path: "M 420 100 L 550 100", delay: 2 },
              { path: "M 270 200 L 400 300", delay: 1.5 },
              { path: "M 570 100 L 700 200", delay: 3 },
            ].map((packet, i) => (
              <motion.circle
                key={`packet-${i}`}
                r="2"
                fill="currentColor"
                initial={{ offsetDistance: "0%", opacity: 0 }}
                animate={{ offsetDistance: "100%", opacity: [0, 1, 0] }}
                style={{ offsetPath: `path("${packet.path}")`, offsetRotate: "0deg" }}
                transition={{ 
                  duration: 2.5, 
                  delay: packet.delay, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              />
            ))}

            {/* Pulsing Nodes with Glow */}
            {[
              [100, 200], [260, 200], [410, 100], [410, 300], [560, 100], [560, 300], [700, 200]
            ].map(([cx, cy], i) => (
              <g key={`node-${i}`}>
                <circle cx={cx} cy={cy} r="12" fill="url(#nodeGlow)" className="opacity-0 group-hover:opacity-100" />
                <motion.circle
                  cx={cx}
                  cy={cy}
                  r="3.5"
                  initial={{ r: 2, opacity: 0.2 }}
                  animate={{ 
                    r: [3.5, 5, 3.5], 
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{ 
                    duration: 2.5, 
                    delay: i * 0.3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </g>
            ))}
          </svg>
        </div>
      </motion.div>

      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
            ENGINEERING <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              INTELLIGENT <br /> WORKFLOWS
            </span>
          </h1>
          <p className="max-w-md text-gray-400 text-lg leading-relaxed font-light">
            Automation-first developer focused on scalable systems, data pipelines, and AI-driven execution. 
            Eliminating manual bottlenecks through code.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all transform hover:scale-105 flex items-center gap-2 cursor-pointer">
              <span>Connect</span>
              <Network size={18} />
            </a>
            <a href="#projects" className="px-8 py-3 border border-gray-800 hover:border-gray-600 text-gray-300 rounded-lg font-medium transition-all cursor-pointer">
              View Systems
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 w-full max-w-md"
        >
          <div className="relative p-1 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-800 shadow-2xl">
            <div className="bg-system-bg rounded-xl overflow-hidden">
              <div className="bg-gray-900 px-4 py-2 flex items-center gap-2 border-b border-gray-800">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
                <div className="text-[10px] text-gray-500 font-mono flex-1 text-center">yash-bhansali -- automation-shell -- 80x24</div>
              </div>
              <div className="p-6 font-mono text-sm space-y-4">
                <div className="flex gap-2">
                  <span className="text-gray-500">$</span>
                  <span className="text-gray-300">fetch --profile "Yash Bhansali"</span>
                </div>
                <div className="space-y-1">
                  <div className="text-blue-400 text-xs">{"{"}</div>
                  <div className="pl-4 text-emerald-400">role: "Automation Engineer",</div>
                  <div className="pl-4 text-emerald-400">stack: ["Python", "n8n", "AI", "React"],</div>
                  <div className="pl-4 text-emerald-400">drive: "Efficiency & Performance",</div>
                  <div className="pl-4 text-emerald-400">status: "Building the Future"</div>
                  <div className="text-blue-400 text-xs">{"}"}</div>
                </div>
                <div className="flex gap-2 pt-2">
                  <span className="text-gray-500">$</span>
                  <span className="text-gray-300 animate-pulse">_</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
