import { motion } from 'framer-motion';
import { Heart, ExternalLink, Sparkles, MessageCircle, Play, Youtube } from 'lucide-react';

const quickLinks = [
  { name: 'Add to Discord', url: 'https://discord.com/oauth2/authorize?client_id=1464846117777965188', icon: Sparkles },
  { name: 'Join Server', url: 'https://discord.gg/EmwadgFMJE', icon: MessageCircle },
  { name: 'Support Server', url: 'https://discord.gg/j4unRUPUAb', icon: MessageCircle },
];

const animeLinks = [
  { name: 'AniKai', url: 'https://anikai.to/', icon: Play },
  { name: '9Anime', url: 'https://9animetv.to/', icon: Play },
  { name: 'Animity World', url: 'https://www.youtube.com/@Animityworld', icon: Youtube },
];

export function Footer() {
  return (
    <footer className="relative py-20 px-4 border-t border-white/10 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#ff1e1e]/10 via-transparent to-transparent opacity-50" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#ff1e1e]/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Logo */}
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="relative w-12 h-12"
              animate={{ y: [0, -4, 0], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Red glow border */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{
                  background: 'conic-gradient(from 0deg, #ff1e1e, #ff6b6b, #ff1e1e, #990000, #ff1e1e)',
                  padding: 2,
                }}
              >
                <div className="w-full h-full rounded-full bg-[#080808]" />
              </motion.div>
              {/* Profile image */}
              <img
                src="https://cdn.discordapp.com/avatars/1464846117777965188/e76571b6fcfaaed901eabf15cf9c6cdc.png?size=1024"
                alt="Lala Anime Bot"
                className="absolute inset-0.5 rounded-full object-cover"
                style={{ boxShadow: '0 0 20px rgba(255, 30, 30, 0.4)' }}
              />
            </motion.div>
            <h3 className="text-3xl font-black text-white font-orbitron">
              Lala <span className="gradient-text">Anime Bot</span>
            </h3>
          </motion.div>
          <p className="text-white/60 max-w-md mx-auto text-lg">
            Ultimate anime companion on Discord. Experience the future of anime discovery.
          </p>
        </motion.div>

        {/* Links Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {/* Discord Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center justify-center md:justify-start gap-2">
              <MessageCircle className="w-5 h-5 text-[#5865F2]" />
              Discord
            </h4>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium hover:bg-[#5865F2]/20 hover:border-[#5865F2]/50 hover:text-white transition-all group"
                >
                  <link.icon className="w-4 h-4" />
                  {link.name}
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Anime Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center justify-center md:justify-end gap-2">
              <Play className="w-5 h-5 text-[#ff1e1e]" />
              Watch Anime
            </h4>
            <div className="flex flex-wrap justify-center md:justify-end gap-3">
              {animeLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium hover:bg-[#ff1e1e]/20 hover:border-[#ff1e1e]/50 hover:text-white transition-all group"
                >
                  <link.icon className="w-4 h-4" />
                  {link.name}
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.a
            href="https://discord.com/oauth2/authorize?client_id=1464846117777965188"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#ff1e1e] to-[#cc0000] text-white font-bold text-lg btn-glow transition-transform"
          >
            <Sparkles className="w-5 h-5" />
            Add to Discord Now
            <Sparkles className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-8 mb-12 pb-12 border-b border-white/10"
        >
          {[
            { label: '6 AI Models', emoji: '🤖' },
            { label: '15+ Platforms', emoji: '📺' },
            { label: '10+ APIs', emoji: '🖼️' },
            { label: '50+ Countries', emoji: '🌍' },
          ].map((stat, index) => (
            <div key={index} className="flex items-center gap-2 text-white/50 text-sm">
              <span>{stat.emoji}</span>
              <span>{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center"
        >
          <p className="text-white/40 text-sm flex items-center justify-center gap-2 flex-wrap mb-2">
            © 2024 Lala Anime Bot. Made with{' '}
            <Heart className="w-4 h-4 text-[#ff1e1e] inline animate-pulse" />
            by{' '}
            <span className="text-[#ff1e1e] font-semibold">!^Mysterious^!</span>
          </p>
          <p className="text-white/30 text-xs">
            All anime content belongs to their respective owners. This bot is for entertainment purposes only.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
