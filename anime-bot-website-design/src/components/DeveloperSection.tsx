import { motion } from 'framer-motion';
import { Heart, Code, Sparkles, Star } from 'lucide-react';

export function DeveloperSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff1e1e]/5 to-transparent" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#ff1e1e] rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <Code className="w-6 h-6 text-[#ff1e1e]" />
            <h2 className="text-3xl md:text-4xl font-black text-white font-orbitron">
              Built With <span className="gradient-text">Passion</span>
            </h2>
            <Heart className="w-6 h-6 text-[#ff1e1e] animate-pulse" />
          </div>

          {/* Developer Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass-intense rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#ff1e1e]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#ff1e1e]/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#ff1e1e]/5 rounded-full blur-[100px]" />

            {/* Profile Image */}
            <motion.div
              className="relative mx-auto w-36 h-36 md:w-44 md:h-44 mb-8"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Outer Glow Ring */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-[#ff1e1e]/20 via-[#ff6b6b]/10 to-[#ff1e1e]/20 blur-xl" />
              
              {/* Animated Ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                style={{
                  background: 'conic-gradient(from 0deg, #ff1e1e, #ff6b6b, #ff1e1e, #990000, #ff1e1e)',
                  padding: 4,
                }}
              >
                <div className="w-full h-full rounded-full bg-[#0f0f0f]" />
              </motion.div>

              {/* Secondary Animated Ring */}
              <motion.div
                className="absolute -inset-2 rounded-full border-2 border-dashed border-[#ff1e1e]/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />

              {/* Profile Picture */}
              <div className="absolute inset-1 rounded-full overflow-hidden pulse-glow shine-effect">
                <img
                  src="https://cdn.discordapp.com/attachments/1208690742050947082/1471369779196596294/k8VtviQ.png?ex=698eaf64&is=698d5de4&hm=6844fe2481c01638166259a1e454706aea2daab9d5771d2896010184ddd2e9b4"
                  alt="Developer Avatar"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Sparkle Icon */}
              <motion.div
                className="absolute -top-2 -right-2 bg-[#ff1e1e] rounded-full p-2 shadow-lg"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ boxShadow: '0 0 20px #ff1e1e' }}
              >
                <Sparkles className="w-4 h-4 text-white" />
              </motion.div>

              {/* Star Icon */}
              <motion.div
                className="absolute -bottom-1 -left-1 bg-[#fbbf24] rounded-full p-1.5 shadow-lg"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                style={{ boxShadow: '0 0 15px #fbbf24' }}
              >
                <Star className="w-3 h-3 text-white fill-white" />
              </motion.div>
            </motion.div>

            {/* Developer Name */}
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-white mb-2 font-orbitron"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Developed with <span className="text-[#ff1e1e]">❤️</span> by
            </motion.h3>
            <motion.p
              className="text-2xl md:text-3xl gradient-text font-bold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              !^Mysterious^!
            </motion.p>

            {/* Bio */}
            <motion.p
              className="text-white/70 text-lg max-w-xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              A passionate anime fan & developer bringing technology and anime together.
              Creating unforgettable experiences for the anime community.
            </motion.p>

            {/* Quote */}
            <motion.div
              className="mt-6 px-6 py-4 bg-[#ff1e1e]/10 rounded-xl border border-[#ff1e1e]/20 max-w-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.65 }}
            >
              <p className="text-white/80 italic text-sm">
                "Building bridges between the anime world and technology, one line of code at a time."
              </p>
            </motion.div>

            {/* Tech Stack Badges */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              {['Discord.js', 'Node.js', 'AI/ML', 'APIs', 'MongoDB', 'PostgreSQL'].map((tech, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-2 text-sm font-medium text-white/80 bg-[#ff1e1e]/10 border border-[#ff1e1e]/30 rounded-full hover:bg-[#ff1e1e]/20 hover:border-[#ff1e1e]/50 transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
