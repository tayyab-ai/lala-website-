import { motion } from 'framer-motion';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.5, duration: 0.8 }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[100] bg-[#080808] flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff1e1e]/10 rounded-full blur-[150px]"
        />
      </div>

      {/* Animated Rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 2, 2], opacity: [0, 0.3, 0] }}
          transition={{ duration: 2, times: [0, 0.5, 1], repeat: Infinity }}
          className="absolute w-40 h-40 border border-[#ff1e1e]/50 rounded-full"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 2, 2], opacity: [0, 0.2, 0] }}
          transition={{ duration: 2, times: [0, 0.5, 1], repeat: Infinity, delay: 0.5 }}
          className="absolute w-40 h-40 border border-[#ff1e1e]/30 rounded-full"
        />
      </div>

      <div className="relative z-10 text-center">
        {/* Animated Logo Container */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="relative mb-8"
        >
          {/* Rotating Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-28 h-28 mx-auto border-2 border-dashed border-[#ff1e1e]/30 rounded-full"
            style={{ top: -10, left: '50%', marginLeft: -56 }}
          />
          
          {/* Bot Profile Picture */}
          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative w-24 h-24 md:w-28 md:h-28 mx-auto"
          >
            {/* Animated glow border */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              style={{
                background: 'conic-gradient(from 0deg, #ff1e1e, #ff6b6b, #ff1e1e, #990000, #ff1e1e)',
                padding: 3,
              }}
            >
              <div className="w-full h-full rounded-full bg-[#080808]" />
            </motion.div>
            {/* Profile image */}
            <img
              src="https://cdn.discordapp.com/avatars/1464846117777965188/e76571b6fcfaaed901eabf15cf9c6cdc.png?size=1024"
              alt="Lala Anime Bot"
              className="absolute inset-1 rounded-full object-cover"
              style={{ boxShadow: '0 0 30px rgba(255, 30, 30, 0.5)' }}
            />
          </motion.div>

          {/* Sparkle Effects */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#ff1e1e] rounded-full"
              style={{
                top: '50%',
                left: '50%',
              }}
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{
                x: Math.cos((i * 60 * Math.PI) / 180) * 60,
                y: Math.sin((i * 60 * Math.PI) / 180) * 60,
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>

        {/* Brand Text */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-3xl md:text-4xl font-black text-white font-orbitron mb-2"
        >
          Lala <span className="gradient-text">Anime Bot</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-white/50 text-sm mb-8"
        >
          Ultimate Anime Companion
        </motion.p>

        {/* Loading Bar Container */}
        <div className="relative w-48 h-1 bg-white/10 rounded-full mx-auto overflow-hidden">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff1e1e] to-transparent"
            style={{ boxShadow: '0 0 20px #ff1e1e' }}
          />
        </div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 flex items-center justify-center gap-2"
        >
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-white/50 text-sm"
          >
            Loading experience
          </motion.span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-[#ff1e1e]"
          >
            ...</motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
}
