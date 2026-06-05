import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Network, Code2, Send } from 'lucide-react';

export const ImpactStats = () => {
  const stats = [
    { label: "Manual Effort Reduction", value: "80%", sub: "Eliminating mundane tasks" },
    { label: "Reporting Execution", value: "<5s", sub: "From hours to seconds" },
    { label: "System Cost Reduction", value: "25%", sub: "Optimized infrastructure" },
    { label: "Email Success Rate", value: "95%", sub: "Highly deliverable outreach" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-600/5 -skew-y-3 transform origin-right" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-mono text-xs uppercase tracking-widest">Efficiency Audit</span>
          <h2 className="text-4xl font-bold mt-2">SYSTEMS IMPACT</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-gray-900/60 border border-gray-800 text-center space-y-2 backdrop-blur-sm"
            >
              <div className="text-4xl font-bold text-white tracking-tighter">{s.value}</div>
              <div className="text-xs font-mono text-blue-400 uppercase tracking-wider">{s.label}</div>
              <div className="text-[10px] text-gray-500 italic">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-system-bg/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center font-bold text-white font-mono">Y</div>
          <span className="font-bold tracking-tight hidden sm:inline">YASH BHANSALI</span>
        </div>

        <div className="flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#about" className="hover:text-white transition-colors hidden md:inline">About</a>
          <a href="#services" className="hover:text-white transition-colors hidden md:inline">Services</a>
          <a href="#projects" className="hover:text-white transition-colors">Systems</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Resume</a>
          <a href="#contact" className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors">Connect</a>
        </div>
      </div>
    </nav>
  );
};

export const Footer = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const timeoutRef = React.useRef<NodeJS.Timeout>(null);

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
        timeoutRef.current = setTimeout(() => setStatus('idle'), 5000);
      } else {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          const err = await response.json();
          throw new Error(err.error || 'Transmission failed');
        } else {
          throw new Error(`Server returned status: ${response.status}`);
        }
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      timeoutRef.current = setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <footer id="contact" className="py-24 bg-black/40 border-t border-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-5xl font-bold tracking-tight">LET'S BUILD <br /> <span className="text-blue-500">SYSTEMS THAT SCALE</span></h2>
            <p className="text-gray-400 text-lg max-w-md">
              Ready to automate your operations and scale your data workflows? 
              I am currently open to new projects and system architectural consultations.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/yash-bhansali951/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-gray-900 border border-gray-800 hover:border-blue-500 transition-colors text-gray-400 hover:text-white">
                <Network size={20} />
              </a>
              <a href="https://github.com/yashbhansali951" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-gray-900 border border-gray-800 hover:border-blue-500 transition-colors text-gray-400 hover:text-white">
                <Code2 size={20} />
              </a>
              <a href="mailto:yashbhansali747@gmail.com" className="p-3 rounded-xl bg-gray-900 border border-gray-800 hover:border-blue-500 transition-colors text-gray-400 hover:text-white">
                <Mail size={20} />
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-gray-900 border border-gray-800 hover:border-blue-500 transition-colors text-gray-400 hover:text-white group flex items-center gap-2">
                <span className="text-[10px] font-mono group-hover:block hidden">VIEW_CV</span>
                <Send size={20} className="rotate-45" />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-gray-900 border border-gray-800 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-gray-500 uppercase">Input Name</label>
                <input 
                  required 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black border border-gray-800 rounded-lg p-3 text-sm focus:border-blue-500 outline-none" 
                  placeholder="Engineer/Founder" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-gray-500 uppercase">Input Email</label>
                <input 
                  required 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black border border-gray-800 rounded-lg p-3 text-sm focus:border-blue-500 outline-none" 
                  placeholder="system@org.com" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-gray-500 uppercase">Workflow Description</label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Describe your operational bottleneck..."
                required
              />
            </div>
            <button 
              disabled={status !== 'idle'}
              type="submit"
              className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                status === 'sent' ? 'bg-green-600 text-white' : 
                status === 'error' ? 'bg-red-600 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'
              } disabled:opacity-50`}
            >
              <span>
                {status === 'idle' && 'Execute Request'}
                {status === 'sending' && 'Initializing Transmission...'}
                {status === 'sent' && 'Request Delivered Successfully'}
                {status === 'error' && 'Transmission Error - Try Again'}
              </span>
              <Send size={18} className={status === 'sending' ? 'animate-pulse' : ''} />
            </button>
          </form>
        </div>

        <div className="mt-24 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs font-mono">
          <div>© 2026 YASH BHANSALI // ALL_RIGHTS_RESERVED</div>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">PRIVACY_PROTOCOL</span>
            <span className="hover:text-white cursor-pointer">TERMS_OF_SERVICE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
