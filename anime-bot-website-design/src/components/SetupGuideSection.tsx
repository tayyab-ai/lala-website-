import { motion } from 'framer-motion';
import { 
  Sparkles, MousePointerClick, Server, Terminal, 
  BookOpen, CheckCircle, Search, Bot, Clock, Shield,
  BarChart3, Settings, Ban, Zap
} from 'lucide-react';

const setupSteps = [
  {
    step: 1,
    icon: MousePointerClick,
    title: 'Click "Add to Discord" button',
    description: 'Use the invite button at the top of this page',
  },
  {
    step: 2,
    icon: Server,
    title: 'Select your server',
    description: 'Choose the Discord server where you want to add Lala',
  },
  {
    step: 3,
    icon: Terminal,
    title: 'Use the /help command',
    description: 'Type /help inside your Discord server',
  },
  {
    step: 4,
    icon: BookOpen,
    title: 'Follow instructions inside the bot',
    description: 'The bot will guide you through all features',
  },
];

export function SetupGuideSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden" id="setup">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff1e1e]/5 to-transparent" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff1e1e]/10 border border-[#ff1e1e]/30 mb-6">
            <Settings className="w-5 h-5 text-[#ff1e1e]" />
            <span className="text-sm font-medium text-[#ff1e1e]">Quick Setup</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 font-orbitron">
            🎌 How To Setup <span className="gradient-text">Lala Anime Bot</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Get started in under a minute with these simple steps
          </p>
        </motion.div>

        {/* Setup Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {setupSteps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass rounded-2xl p-6 text-center relative group cursor-default overflow-hidden"
            >
              {/* Step Number Badge */}
              <motion.div
                className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-[#ff1e1e] to-[#cc0000] flex items-center justify-center text-white font-bold text-sm"
                style={{ boxShadow: '0 0 20px rgba(255, 30, 30, 0.4)' }}
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                {item.step}
              </motion.div>

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.4 }}
                className="w-16 h-16 rounded-xl bg-[#ff1e1e]/10 mx-auto mb-4 flex items-center justify-center"
              >
                <item.icon className="w-8 h-8 text-[#ff1e1e]" />
              </motion.div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#ff1e1e] transition-colors">
                {item.title}
              </h3>
              <p className="text-white/50 text-sm">
                {item.description}
              </p>

              {/* Connecting Arrow (except last) */}
              {index < setupSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-[#ff1e1e]/50"
                  >
                    →
                  </motion.div>
                </div>
              )}

              {/* Bottom Glow */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#ff1e1e] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>

        {/* Help Guide Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="glass-intense rounded-3xl p-8 md:p-10 relative overflow-hidden"
        >
          {/* Background Decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff1e1e]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#ff1e1e]/5 rounded-full blur-3xl" />

          {/* Header */}
          <div className="relative text-center mb-8">
            <motion.div
              className="inline-flex items-center gap-3 mb-4"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.div 
                className="relative w-12 h-12"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  style={{
                    background: 'conic-gradient(from 0deg, #ff1e1e, #ff6b6b, #ff1e1e, #990000, #ff1e1e)',
                    padding: 2,
                  }}
                >
                  <div className="w-full h-full rounded-full bg-[#0f0f0f]" />
                </motion.div>
                <img
                  src="https://cdn.discordapp.com/avatars/1464846117777965188/e76571b6fcfaaed901eabf15cf9c6cdc.png?size=1024"
                  alt="Lala Anime Bot"
                  className="absolute inset-0.5 rounded-full object-cover"
                  style={{ boxShadow: '0 0 15px rgba(255, 30, 30, 0.4)' }}
                />
              </motion.div>
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-black text-white font-orbitron mb-2">
              🎌 Lala Anime Bot — <span className="gradient-text">Help Guide</span>
            </h3>
            <p className="text-white/70 text-lg">Ultimate anime buddy!</p>
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              <span className="px-3 py-1 text-sm bg-[#ff1e1e]/20 rounded-full text-[#ff1e1e] font-medium">6 AI Models</span>
              <span className="px-3 py-1 text-sm bg-[#ff1e1e]/20 rounded-full text-[#ff1e1e] font-medium">10+ Sources</span>
              <span className="px-3 py-1 text-sm bg-[#ff1e1e]/20 rounded-full text-[#ff1e1e] font-medium">Legal Streaming</span>
            </div>
            <p className="text-white/50 text-sm mt-3">Created by <span className="text-[#ff1e1e]">!^Mysterious^!</span></p>
          </div>

          {/* Commands Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sayme Limits */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-[#ff1e1e]/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="w-5 h-5 text-[#ff1e1e]" />
                <h4 className="font-bold text-white">📊 /sayme Limits</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-white/70">
                  <span>Daily</span>
                  <span className="text-[#ff1e1e] font-mono">10/day</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Length</span>
                  <span className="text-[#ff1e1e] font-mono">200 chars</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Reset</span>
                  <span className="text-[#ff1e1e] font-mono">Every 24h</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Track</span>
                  <code className="text-[#10b981] font-mono bg-[#10b981]/10 px-1.5 py-0.5 rounded">/mystats</code>
                </div>
              </div>
            </motion.div>

            {/* Anime Search */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-[#ff1e1e]/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-4">
                <Search className="w-5 h-5 text-[#ff1e1e]" />
                <h4 className="font-bold text-white">🔍 Anime Search</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="text-white/70">
                  <code className="text-[#ff1e1e] font-mono bg-[#ff1e1e]/10 px-1.5 py-0.5 rounded">/anime &lt;name&gt;</code>
                  <span className="ml-2 text-white/50">— Search details</span>
                </div>
                <div className="text-white/70">
                  <code className="text-[#ff1e1e] font-mono bg-[#ff1e1e]/10 px-1.5 py-0.5 rounded">/season &lt;anime&gt;</code>
                  <span className="ml-2 text-white/50">— Seasons & movies</span>
                </div>
                <div className="text-white/70">
                  <code className="text-[#ff1e1e] font-mono bg-[#ff1e1e]/10 px-1.5 py-0.5 rounded">/new_season</code>
                  <span className="ml-2 text-white/50">— Upcoming anime</span>
                </div>
                <div className="text-white/70">
                  <code className="text-[#ff1e1e] font-mono bg-[#ff1e1e]/10 px-1.5 py-0.5 rounded">/where_to_watch</code>
                  <span className="ml-2 text-white/50">— Streaming</span>
                </div>
              </div>
            </motion.div>

            {/* AI & Utility */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-[#ff1e1e]/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-4">
                <Bot className="w-5 h-5 text-[#ff1e1e]" />
                <h4 className="font-bold text-white">🤖 AI & Utility</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="text-white/70">
                  <code className="text-[#ff1e1e] font-mono bg-[#ff1e1e]/10 px-1.5 py-0.5 rounded">/sayme &lt;prompt&gt;</code>
                  <span className="ml-2 text-white/50">— AI research</span>
                </div>
                <div className="text-white/70">
                  <code className="text-[#ff1e1e] font-mono bg-[#ff1e1e]/10 px-1.5 py-0.5 rounded">/mystats</code>
                  <span className="ml-2 text-white/50">— Your stats</span>
                </div>
                <div className="text-white/70">
                  <code className="text-[#ff1e1e] font-mono bg-[#ff1e1e]/10 px-1.5 py-0.5 rounded">/time &lt;country&gt;</code>
                  <span className="ml-2 text-white/50">— Time + image</span>
                </div>
                <div className="text-white/70">
                  <code className="text-[#ff1e1e] font-mono bg-[#ff1e1e]/10 px-1.5 py-0.5 rounded">/platforms</code>
                  <span className="ml-2 text-white/50">— Streaming sites</span>
                </div>
              </div>
            </motion.div>

            {/* Admin Commands */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-[#f59e0b]/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-4">
                <Settings className="w-5 h-5 text-[#f59e0b]" />
                <h4 className="font-bold text-white">🛠️ Admin</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="text-white/70">
                  <code className="text-[#f59e0b] font-mono bg-[#f59e0b]/10 px-1.5 py-0.5 rounded">/autosetup</code>
                  <span className="ml-2 text-white/50">— Configure bot</span>
                </div>
                <div className="text-white/70">
                  <code className="text-[#f59e0b] font-mono bg-[#f59e0b]/10 px-1.5 py-0.5 rounded">/notification status:</code>
                  <span className="ml-2 text-white/50">— on/off</span>
                </div>
                <div className="text-white/70">
                  <code className="text-[#f59e0b] font-mono bg-[#f59e0b]/10 px-1.5 py-0.5 rounded">/notification_info</code>
                  <span className="ml-2 text-white/50">— Details</span>
                </div>
                <div className="text-white/70">
                  <code className="text-[#f59e0b] font-mono bg-[#f59e0b]/10 px-1.5 py-0.5 rounded">/security_info</code>
                  <span className="ml-2 text-white/50">— Security info</span>
                </div>
                <div className="text-white/70">
                  <code className="text-[#f59e0b] font-mono bg-[#f59e0b]/10 px-1.5 py-0.5 rounded">/ban /unban</code>
                  <span className="ml-2 text-white/50">— Bot ban/unban</span>
                </div>
              </div>
            </motion.div>

            {/* Security Info */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-[#10b981]/30 transition-colors md:col-span-2 lg:col-span-2"
            >
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-[#10b981]" />
                <h4 className="font-bold text-white">🛡️ Security</h4>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-sm">
                <div className="bg-[#10b981]/10 rounded-lg p-3 text-center">
                  <Clock className="w-5 h-5 text-[#10b981] mx-auto mb-1" />
                  <div className="text-white/90 font-medium">Anti-Spam</div>
                  <div className="text-white/50 text-xs">15s cooldown</div>
                </div>
                <div className="bg-[#10b981]/10 rounded-lg p-3 text-center">
                  <Ban className="w-5 h-5 text-[#10b981] mx-auto mb-1" />
                  <div className="text-white/90 font-medium">Auto-Ban</div>
                  <div className="text-white/50 text-xs">3 warnings</div>
                </div>
                <div className="bg-[#10b981]/10 rounded-lg p-3 text-center">
                  <Zap className="w-5 h-5 text-[#10b981] mx-auto mb-1" />
                  <div className="text-white/90 font-medium">Daily</div>
                  <div className="text-white/50 text-xs">10/day</div>
                </div>
                <div className="bg-[#10b981]/10 rounded-lg p-3 text-center">
                  <CheckCircle className="w-5 h-5 text-[#10b981] mx-auto mb-1" />
                  <div className="text-white/90 font-medium">Alt Detect</div>
                  <div className="text-white/50 text-xs">Active</div>
                </div>
                <div className="bg-[#10b981]/10 rounded-lg p-3 text-center">
                  <Shield className="w-5 h-5 text-[#10b981] mx-auto mb-1" />
                  <div className="text-white/90 font-medium">Protection</div>
                  <div className="text-white/50 text-xs">Bot only</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative text-center mt-10"
          >
            <motion.a
              href="https://discord.com/oauth2/authorize?client_id=1464846117777965188"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#ff1e1e] to-[#cc0000] text-white font-bold text-lg btn-glow"
            >
              <Sparkles className="w-5 h-5" />
              Add Lala to Your Server
              <Sparkles className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
