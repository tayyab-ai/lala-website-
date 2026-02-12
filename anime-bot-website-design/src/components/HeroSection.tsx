import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageCircle, Play, ExternalLink, ChevronDown } from 'lucide-react';

const typingTexts = ["Search.", "Discover.", "Watch.", "Explore."];

function AnimatedButton({ 
  children, 
  href, 
  icon: Icon,
  delay = 0,
  variant = 'primary'
}: { 
  children: React.ReactNode; 
  href: string; 
  icon: React.ElementType;
  delay?: number;
  variant?: 'primary' | 'secondary' | 'tertiary';
}) {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    
    setRipples((prev) => [...prev, { x, y, id }]);
    
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);
  }, []);

  const baseClasses = "relative overflow-hidden px-6 py-4 rounded-xl font-semibold text-white transition-all duration-300 flex items-center gap-3 group";
  
  const variants = {
    primary: "bg-gradient-to-r from-[#ff1e1e] to-[#cc0000] hover:from-[#ff3333] hover:to-[#ff1e1e] shadow-lg shadow-[#ff1e1e]/25",
    secondary: "bg-[#0f0f0f] border-2 border-[#ff1e1e]/50 hover:border-[#ff1e1e] hover:bg-[#ff1e1e]/10",
    tertiary: "bg-[#0f0f0f] border-2 border-white/20 hover:border-white/40 hover:bg-white/5",
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variants[variant]} btn-glow`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 + delay, duration: 0.6 }}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Animated border glow for primary */}
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            boxShadow: '0 0 30px rgba(255, 30, 30, 0.6), inset 0 0 30px rgba(255, 30, 30, 0.1)',
          }}
        />
      )}
      
      <span className="relative z-10 flex items-center gap-3">
        <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
        {children}
        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-70 -ml-1 transition-opacity" />
      </span>
      
      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="ripple absolute rounded-full bg-white/30"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 10,
            height: 10,
            marginLeft: -5,
            marginTop: -5,
          }}
        />
      ))}
    </motion.a>
  );
}

function TypingEffect() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = typingTexts[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % typingTexts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <span className="text-[#ff1e1e] font-semibold">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="text-[#ff1e1e]"
      >
        |
      </motion.span>
    </span>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ff1e1e]/10 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff1e1e]/5 rounded-full blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass mb-8 border border-[#ff1e1e]/30"
        >
          <motion.div 
            className="relative w-7 h-7"
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Red glow border */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              style={{
                background: 'conic-gradient(from 0deg, #ff1e1e, #ff6b6b, #ff1e1e, #990000, #ff1e1e)',
                padding: 1.5,
              }}
            >
              <div className="w-full h-full rounded-full bg-[#0f0f0f]" />
            </motion.div>
            {/* Profile image */}
            <img
              src="https://cdn.discordapp.com/avatars/1464846117777965188/e76571b6fcfaaed901eabf15cf9c6cdc.png?size=1024"
              alt="Lala Anime Bot"
              className="absolute inset-0.5 rounded-full object-cover"
              style={{ boxShadow: '0 0 10px rgba(255, 30, 30, 0.3)' }}
            />
          </motion.div>
          <span className="text-sm text-white/80 font-medium">Lala Anime Bot</span>
          <span className="px-2 py-0.5 text-xs bg-[#ff1e1e]/20 rounded-full text-[#ff1e1e] font-bold">v2.0</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight font-orbitron"
        >
          Ultimate{' '}
          <span className="relative inline-block">
            <span className="gradient-text text-glow-intense">Anime</span>
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff1e1e] to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              style={{ boxShadow: '0 0 20px #ff1e1e, 0 0 40px #ff1e1e50' }}
            />
          </span>
          <br />
          Companion on{' '}
          <span className="text-white relative">
            Discord
            <motion.div
              className="absolute -inset-2 bg-[#5865F2]/20 rounded-lg -z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            />
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/70 mb-4 max-w-3xl mx-auto"
        >
          <span className="text-[#ff1e1e] font-bold">6 AI Models.</span>{' '}
          <span className="text-white/90">15+ Legal Platforms.</span>{' '}
          <span className="text-[#ff1e1e] font-bold">10+ Image APIs.</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl text-white/90 mb-8 font-medium"
        >
          One Powerful Anime Experience.
        </motion.p>

        {/* Typing Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-2xl md:text-3xl mb-12 h-12"
        >
          <TypingEffect />
        </motion.div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
          <AnimatedButton 
            href="https://discord.com/oauth2/authorize?client_id=1464846117777965188"
            icon={Sparkles}
            delay={0}
            variant="primary"
          >
            🔥 Add to Discord
          </AnimatedButton>
          
          <AnimatedButton 
            href="https://discord.gg/EmwadgFMJE"
            icon={MessageCircle}
            delay={0.1}
            variant="secondary"
          >
            💬 Join Discord Server
          </AnimatedButton>
          
          <AnimatedButton 
            href="https://anikai.to/"
            icon={Play}
            delay={0.2}
            variant="tertiary"
          >
            🎬 Watch Free Anime
          </AnimatedButton>
        </div>

        {/* Secondary Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-6 flex flex-wrap justify-center gap-4"
        >
          <a
            href="https://discord.gg/j4unRUPUAb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/50 hover:text-[#ff1e1e] transition-colors flex items-center gap-1"
          >
            Support Server <ExternalLink className="w-3 h-3" />
          </a>
          <span className="text-white/20">•</span>
          <a
            href="https://9animetv.to/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/50 hover:text-[#ff1e1e] transition-colors flex items-center gap-1"
          >
            9Anime <ExternalLink className="w-3 h-3" />
          </a>
          <span className="text-white/20">•</span>
          <a
            href="https://www.youtube.com/@Animityworld"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/50 hover:text-[#ff1e1e] transition-colors flex items-center gap-1"
          >
            Animity World <ExternalLink className="w-3 h-3" />
          </a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '6', label: 'AI Models', icon: '🤖' },
            { value: '15+', label: 'Legal Platforms', icon: '📺' },
            { value: '10+', label: 'Image APIs', icon: '🖼️' },
            { value: '50+', label: 'Countries', icon: '🌍' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-xl p-4 card-hover cursor-default"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-black gradient-text font-orbitron">{stat.value}</div>
              <div className="text-white/60 text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-xs font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-[#ff1e1e] rounded-full"
            />
          </div>
          <ChevronDown className="w-4 h-4 -mt-1" />
        </motion.div>
      </motion.div>
    </section>
  );
}
