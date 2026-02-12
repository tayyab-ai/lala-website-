import { motion } from 'framer-motion';
import { 
  Search, Bot, Tv, Image, Bell, Shield, 
  BarChart3, Database, Globe, Zap
} from 'lucide-react';

const features = [
  {
    icon: Search,
    title: "Anime Search & Detailed Info",
    description: "Search any anime and get comprehensive details including synopsis, ratings, episodes, and more.",
    gradient: "from-red-500 to-orange-500",
    emoji: "🔍",
  },
  {
    icon: Bot,
    title: "6 AI Smart Fallback System",
    description: "Intelligent AI system with automatic switching between 6 models for uninterrupted service.",
    gradient: "from-purple-500 to-pink-500",
    emoji: "🤖",
  },
  {
    icon: Tv,
    title: "Legal Streaming Guide",
    description: "Access to 15+ legal streaming platforms with direct links to watch your favorite anime.",
    gradient: "from-blue-500 to-cyan-500",
    emoji: "📺",
  },
  {
    icon: Image,
    title: "10+ Anime Image APIs",
    description: "High-quality anime images, wallpapers, and character art from multiple sources.",
    gradient: "from-green-500 to-emerald-500",
    emoji: "🖼️",
  },
  {
    icon: Bell,
    title: "Auto Notifications System",
    description: "Scheduled good morning/night messages, weekly motivation, and anime updates.",
    gradient: "from-yellow-500 to-amber-500",
    emoji: "🔔",
  },
  {
    icon: Shield,
    title: "Advanced Security Protection",
    description: "Anti-spam, rate limiting, auto-ban system, and input sanitization for safety.",
    gradient: "from-red-600 to-rose-500",
    emoji: "🛡️",
  },
  {
    icon: BarChart3,
    title: "User Statistics Dashboard",
    description: "Track your anime searches, commands used, and personal statistics.",
    gradient: "from-indigo-500 to-purple-500",
    emoji: "📊",
  },
  {
    icon: Database,
    title: "Dual Database Support",
    description: "Reliable data storage with MongoDB and PostgreSQL dual database architecture.",
    gradient: "from-teal-500 to-cyan-500",
    emoji: "💾",
  },
  {
    icon: Globe,
    title: "World Time (50+ Countries)",
    description: "Get current time for any country with timezone support for global users.",
    gradient: "from-orange-500 to-red-500",
    emoji: "🌍",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export function FeaturesSection() {
  return (
    <section className="relative py-24 px-4" id="features">
      {/* Background Accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff1e1e]/5 rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff1e1e]/10 border border-[#ff1e1e]/30 mb-4"
          >
            <Zap className="w-4 h-4 text-[#ff1e1e]" />
            <span className="text-sm font-medium text-[#ff1e1e]">Premium Features</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 font-orbitron">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Everything you need for the ultimate anime experience on Discord
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl p-6 h-full relative overflow-hidden border border-white/5 hover:border-[#ff1e1e]/30 transition-colors"
              >
                {/* Gradient Accent Background */}
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 blur-3xl rounded-full transform translate-x-10 -translate-y-10 transition-opacity duration-500`} />
                
                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                {/* Header Row */}
                <div className="flex items-start gap-4 mb-4">
                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-3 relative flex-shrink-0 overflow-hidden`}
                  >
                    <feature.icon className="w-full h-full text-white relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                  
                  {/* Emoji Badge */}
                  <motion.span
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                    className="text-2xl"
                  >
                    {feature.emoji}
                  </motion.span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#ff1e1e] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  {feature.description}
                </p>

                {/* Bottom Gradient Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                  <div className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-500`} />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-white/40 text-sm mb-4">
            And many more features being added regularly...
          </p>
          <motion.a
            href="https://discord.com/oauth2/authorize?client_id=1464846117777965188"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff1e1e] to-[#cc0000] text-white font-semibold text-sm btn-glow"
          >
            <Zap className="w-4 h-4" />
            Experience All Features
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
