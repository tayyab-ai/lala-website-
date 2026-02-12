import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ChevronDown, Users, Shield, Crown } from 'lucide-react';

const commandCategories = [
  {
    id: 'public',
    icon: Users,
    title: 'Public Commands',
    description: 'Available for all users',
    color: '#10b981',
    commands: [
      { name: '/anime', desc: 'Search for any anime with detailed info' },
      { name: '/manga', desc: 'Search manga titles and chapters' },
      { name: '/character', desc: 'Get character information' },
      { name: '/waifu', desc: 'Random waifu images' },
      { name: '/quote', desc: 'Anime quotes and inspiration' },
      { name: '/wallpaper', desc: 'High-quality anime wallpapers' },
      { name: '/streaming', desc: 'Legal streaming links' },
      { name: '/time', desc: 'World time for 50+ countries' },
      { name: '/ai', desc: 'Chat with AI assistants' },
      { name: '/stats', desc: 'View your usage statistics' },
    ],
  },
  {
    id: 'admin',
    icon: Shield,
    title: 'Admin Commands',
    description: 'Server administrators only',
    color: '#f59e0b',
    commands: [
      { name: '/setup', desc: 'Configure bot for your server' },
      { name: '/setnotify', desc: 'Set notification channel' },
      { name: '/setwelcome', desc: 'Configure welcome messages' },
      { name: '/blacklist', desc: 'Manage blacklisted users' },
      { name: '/settings', desc: 'View and edit bot settings' },
      { name: '/logs', desc: 'View command usage logs' },
    ],
  },
  {
    id: 'owner',
    icon: Crown,
    title: 'Owner Commands',
    description: 'Bot owner exclusive',
    color: '#ff1e1e',
    commands: [
      { name: '/broadcast', desc: 'Send message to all servers' },
      { name: '/maintenance', desc: 'Toggle maintenance mode' },
      { name: '/eval', desc: 'Execute code (dangerous)' },
      { name: '/reload', desc: 'Reload bot modules' },
      { name: '/dbstats', desc: 'Database statistics' },
    ],
  },
];

function AccordionItem({ 
  category, 
  isOpen, 
  onToggle 
}: { 
  category: typeof commandCategories[0]; 
  isOpen: boolean; 
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass rounded-2xl overflow-hidden"
    >
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between group hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ background: `${category.color}20` }}
          >
            <category.icon className="w-6 h-6" style={{ color: category.color }} />
          </div>
          <div className="text-left">
            <h3 className="text-lg font-bold text-white group-hover:text-[#ff1e1e] transition-colors">
              {category.title}
            </h3>
            <p className="text-sm text-white/50">{category.description}</p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center"
        >
          <ChevronDown className="w-5 h-5 text-white/70" />
        </motion.div>
      </button>

      {/* Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {category.commands.map((command, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                  >
                    <code 
                      className="px-2 py-1 rounded-md text-sm font-mono font-bold flex-shrink-0"
                      style={{ 
                        background: `${category.color}20`,
                        color: category.color,
                      }}
                    >
                      {command.name}
                    </code>
                    <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors">
                      {command.desc}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function CommandsSection() {
  const [openCategory, setOpenCategory] = useState<string | null>('public');

  return (
    <section className="relative py-24 px-4" id="commands">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff1e1e]/5 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff1e1e]/10 border border-[#ff1e1e]/30 mb-6">
            <Terminal className="w-5 h-5 text-[#ff1e1e]" />
            <span className="text-sm font-medium text-[#ff1e1e]">Command Reference</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 font-orbitron">
            Bot <span className="gradient-text">Commands</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Explore all available commands organized by permission level
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-4">
          {commandCategories.map((category) => (
            <AccordionItem
              key={category.id}
              category={category}
              isOpen={openCategory === category.id}
              onToggle={() => setOpenCategory(openCategory === category.id ? null : category.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
