import { Variants, motion } from 'motion/react';
import { 
  Zap, Database, Search, Bot, Code, BarChart3, 
  ArrowRight, ExternalLink, Code2 
} from 'lucide-react';

const SERVICES = [
  {
    id: "01",
    title: "Automation Systems",
    desc: "Designing zero-touch workflows using APIs, n8n, and custom scripting.",
    icon: Zap,
    color: "from-blue-500/20 to-blue-600/5",
  },
  {
    id: "02",
    title: "Data Pipelines",
    desc: "Building scalable data ingestion, transformation, and reporting systems.",
    icon: Database,
    color: "from-emerald-500/20 to-emerald-600/5",
  },
  {
    id: "03",
    title: "Web Scraping Systems",
    desc: "Cost-efficient data extraction engines replacing expensive third-party APIs.",
    icon: Search,
    color: "from-purple-500/20 to-purple-600/5",
  },
  {
    id: "04",
    title: "AI-assisted Tools",
    desc: "Leveraging LLMs for automation, smart analytics, and productivity systems.",
    icon: Bot,
    color: "from-orange-500/20 to-orange-600/5",
  },
  {
    id: "05",
    title: "Full-Stack Tools",
    desc: "Building internal tools with React and Node for business automation.",
    icon: Code,
    color: "from-pink-500/20 to-pink-600/5",
  },
];

const PROJECTS = [
  {
    title: "Automation Workflow Engine",
    platform: "n8n",
    desc: "Built a zero-touch system with API + Google Sheets integration, reducing manual ops significantly.",
    metrics: { label: "Manual Ops Reduction", value: "80%" },
    tags: ["API", "n8n", "JSON", "Webhooks"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com/yashbhansali951/automation-n8n", // placeholder repo name based on user identity
    link: "https://github.com/yashbhansali951"
  },
  {
    title: "Outreach Automation System",
    platform: "Node.js + React",
    desc: "Full-stack outbound system enabling 100+ personalized emails per session with high delivery success.",
    metrics: { label: "Effort Reduction", value: "80%" },
    tags: ["React", "Express", "Nodemailer", "Personalization"],
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com/yashbhansali951/Outreach-Automation-System",
    link: "https://github.com/yashbhansali951"
  },
  {
    title: "Data Acquisition System",
    platform: "Python",
    desc: "Hybrid scraping + API model reducing third-party data costs while increasing data volume.",
    metrics: { label: "Cost Reduction", value: "25%" },
    tags: ["Python", "Playwright", "ETL", "Cloud Functions"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com/yashbhansali951/",
    link: "https://github.com/yashbhansali951"
  },
  {
    title: "Password Strength Engine",
    platform: "Security Tool",
    desc: "Regex + entropy logic library for real-time security scoring in enterprise applications.",
    metrics: { label: "Accuracy", value: "99.9%" },
    tags: ["Regex", "Typescript", "Entropy", "Security"],
    image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com/yashbhansali951/password-strength-checker",
    link: "https://github.com/yashbhansali951"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.92 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 12
    }
  },
};

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-black/20">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <span className="text-blue-500 font-mono text-xs uppercase tracking-widest">Capabilities</span>
          <h2 className="text-4xl font-bold mt-2">SYSTEM MODULES</h2>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((s, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`p-8 rounded-2xl border border-gray-800 bg-gradient-to-br ${s.color} glow-card group`}
            >
              <div className="w-12 h-12 rounded-xl bg-gray-900 border border-gray-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <s.icon className="text-blue-400" size={24} />
              </div>
              <div className="text-xs font-mono text-gray-500 mb-2">{s.id} // ACTIVE</div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {s.desc}
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>VIEW MODULE</span>
                <ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-24 container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <span className="text-blue-500 font-mono text-xs uppercase tracking-widest">Showcase</span>
          <h2 className="text-4xl font-bold mt-2">EXECUTION BLOCKS</h2>
        </div>
        <p className="text-gray-500 max-w-sm text-sm font-mono leading-tight">
          EXPLORE PROJECT BLOCKS. HOVER CARDS TO REVEAL SYSTEM DETAILS.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/40"
          >
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={p.image} 
                alt={p.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
              
              <div className="absolute top-4 right-4 flex gap-2">
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black/60 border border-gray-700 hover:bg-blue-600 transition-colors">
                  <Code2 size={16} />
                </a>
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black/60 border border-gray-700 hover:bg-blue-600 transition-colors">
                  <ExternalLink size={16} />
                </a>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                 <div className="flex items-center gap-2 mb-2">
                    <div className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-[10px] font-mono text-blue-400 uppercase">
                      {p.platform}
                    </div>
                 </div>
                 <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{p.title}</h3>
              </div>
            </div>

            <div className="p-6 space-y-4">
               <p className="text-gray-400 text-sm leading-relaxed">
                 {p.desc}
               </p>
               
               <div className="flex flex-wrap gap-2">
                 {p.tags.map((tag, i) => (
                   <span key={i} className="text-[10px] font-mono text-gray-500 bg-gray-800/50 px-2 py-1 rounded">#{tag}</span>
                 ))}
               </div>
            </div>
            
            {/* Hover overlay pattern */}
            <div className="absolute inset-0 border-2 border-blue-500/0 group-hover:border-blue-500/20 pointer-events-none transition-all rounded-2xl" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
