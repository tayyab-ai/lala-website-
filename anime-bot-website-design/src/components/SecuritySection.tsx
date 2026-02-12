import { motion } from 'framer-motion';
import { 
  Shield, Ban, Timer, AlertTriangle, 
  UserX, Gauge, Sparkles, FileText, Lock, Eye
} from 'lucide-react';

const securityFeatures = [
  {
    icon: Ban,
    title: "Anti-Spam Protection",
    description: "5 commands / 10 seconds",
    color: "#ff1e1e",
    detail: "Prevents rapid command abuse"
  },
  {
    icon: Timer,
    title: "15s Cooldown",
    description: "Smart command spacing",
    color: "#f59e0b",
    detail: "Ensures fair usage for all"
  },
  {
    icon: AlertTriangle,
    title: "3 Warning Auto-Ban",
    description: "Zero tolerance policy",
    color: "#ef4444",
    detail: "Automatic enforcement"
  },
  {
    icon: UserX,
    title: "Alt Account Detection",
    description: "Advanced fingerprinting",
    color: "#8b5cf6",
    detail: "Prevents ban evasion"
  },
  {
    icon: Gauge,
    title: "Rate Limiting",
    description: "Intelligent throttling",
    color: "#10b981",
    detail: "Prevents server overload"
  },
  {
    icon: Sparkles,
    title: "Daily AI Limits",
    description: "25 requests per day",
    color: "#3b82f6",
    detail: "Fair AI distribution"
  },
  {
    icon: Lock,
    title: "Input Sanitization",
    description: "XSS & injection prevention",
    color: "#ec4899",
    detail: "Enterprise-grade security"
  },
  {
    icon: FileText,
    title: "Message Length Limit",
    description: "Spam prevention",
    color: "#14b8a6",
    detail: "Keeps responses clean"
  },
];

export function SecuritySection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden" id="security">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff1e1e]/3 to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff1e1e]/10 border border-[#ff1e1e]/30 mb-6"
          >
            <Shield className="w-5 h-5 text-[#ff1e1e]" />
            <span className="text-sm font-medium text-[#ff1e1e]">Enterprise Security</span>
            <Eye className="w-4 h-4 text-[#ff1e1e]" />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 font-orbitron">
            Advanced <span className="gradient-text">Security</span> Protection
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Multi-layered security system keeping your server safe and secure
          </p>
        </motion.div>

        {/* Security Shield Visual */}
        <div className="relative">
          {/* Central Shield - Desktop Only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 hidden lg:flex items-center justify-center pointer-events-none"
          >
            {/* Rotating Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-[#ff1e1e]/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-6 rounded-full border border-dashed border-[#ff1e1e]/30"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-12 rounded-full border border-[#ff1e1e]/40"
            />
            
            {/* Center Shield */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#ff1e1e] to-[#990000] flex items-center justify-center relative"
              style={{ boxShadow: '0 0 50px rgba(255, 30, 30, 0.5)' }}
            >
              <Shield className="w-12 h-12 md:w-16 md:h-16 text-white" />
              
              {/* Pulse Effect */}
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-[#ff1e1e]/30"
              />
            </motion.div>

            {/* Orbiting Dots */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#ff1e1e] rounded-full"
                style={{
                  boxShadow: '0 0 10px #ff1e1e',
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.5,
                }}
                initial={{
                  x: Math.cos((i * 45 * Math.PI) / 180) * 100,
                  y: Math.sin((i * 45 * Math.PI) / 180) * 100,
                }}
              />
            ))}
          </motion.div>

          {/* Security Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="glass rounded-2xl p-5 md:p-6 text-center group cursor-pointer relative overflow-hidden"
              >
                {/* Animated Background on Hover */}
                <motion.div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ 
                    background: `radial-gradient(circle at center, ${feature.color}15, transparent 70%)` 
                  }}
                />

                {/* Top Glow Line */}
                <div 
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0.5 group-hover:w-full transition-all duration-500"
                  style={{ background: feature.color }}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-xl mx-auto mb-4 flex items-center justify-center relative overflow-hidden"
                  style={{ background: `${feature.color}15` }}
                >
                  <feature.icon 
                    className="w-7 h-7 md:w-8 md:h-8 relative z-10" 
                    style={{ color: feature.color }}
                  />
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                  />
                </motion.div>

                {/* Content */}
                <h3 className="text-sm md:text-base font-bold text-white mb-1 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm text-white/50 mb-2">
                  {feature.description}
                </p>
                <p className="text-[10px] md:text-xs text-white/30 opacity-0 group-hover:opacity-100 transition-opacity">
                  {feature.detail}
                </p>

                {/* Border Glow on Hover */}
                <div 
                  className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-opacity-50 transition-all pointer-events-none"
                  style={{ borderColor: feature.color }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {[
            { emoji: '🔒', text: 'Secure', color: '#ff1e1e' },
            { emoji: '✅', text: 'Verified', color: '#10b981' },
            { emoji: '⚡', text: 'Fast', color: '#f59e0b' },
            { emoji: '🛡️', text: 'Protected', color: '#3b82f6' },
            { emoji: '🔐', text: 'Encrypted', color: '#8b5cf6' },
          ].map((badge, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, y: -3 }}
              className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium flex items-center gap-2 cursor-default hover:border-opacity-50 transition-all"
              style={{ ['--hover-color' as string]: badge.color }}
            >
              <span>{badge.emoji}</span>
              <span>{badge.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Security Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-white/40 text-sm max-w-lg mx-auto">
            Your server's safety is our top priority. All security features are enabled by default and continuously monitored.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
