import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const navLinks = [
  { name: 'Setup', href: '#setup' },
  { name: 'Features', href: '#features' },
  { name: 'Security', href: '#security' },
  { name: 'Commands', href: '#commands' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <motion.div 
              className="relative w-10 h-10"
              animate={{ y: [0, -3, 0] }}
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
                className="absolute inset-0.5 w-9 h-9 rounded-full object-cover"
                style={{ boxShadow: '0 0 15px rgba(255, 30, 30, 0.4)' }}
              />
            </motion.div>
            <span className="text-xl font-bold text-white font-orbitron">
              Lala <span className="gradient-text">Bot</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="text-white/70 hover:text-white font-medium transition-colors relative group"
                whileHover={{ scale: 1.05 }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff1e1e] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.a
              href="https://discord.com/oauth2/authorize?client_id=1464846117777965188"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#ff1e1e] to-[#cc0000] text-white font-semibold text-sm btn-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Sparkles className="w-4 h-4" />
              Add to Discord
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-4 right-4 z-50 glass-intense rounded-2xl p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/80 hover:text-white font-medium py-2 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://discord.com/oauth2/authorize?client_id=1464846117777965188"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#ff1e1e] to-[#cc0000] text-white font-semibold mt-2"
              >
                <Sparkles className="w-4 h-4" />
                Add to Discord
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
