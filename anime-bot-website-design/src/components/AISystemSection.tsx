import { motion } from 'framer-motion';
import { Brain, ArrowDown, Zap, CheckCircle, Cpu, Activity } from 'lucide-react';

const aiModels = [
  { name: "Grok LLaMA 3.3", badge: "Primary", color: "#ff1e1e", description: "Ultra-fast primary response" },
  { name: "Google Gemini 2.0", badge: "Fallback 1", color: "#4285f4", description: "Advanced reasoning capabilities" },
  { name: "OpenRouter LLaMA", badge: "Fallback 2", color: "#10b981", description: "Open-source intelligence" },
  { name: "DeepSeek", badge: "Fallback 3", color: "#8b5cf6", description: "Deep learning specialist" },
  { name: "Claude 3.5", badge: "Fallback 4", color: "#f59e0b", description: "Nuanced conversations" },
  { name: "Perplexity AI", badge: "Fallback 5", color: "#ec4899", description: "Real-time knowledge" },
];

export function AISystemSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden" id="ai-system">
      {/* Special Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0505] via-[#100808] to-[#0a0505]" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff1e1e]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff1e1e]/10 rounded-full blur-3xl" />
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(255,30,30,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,30,30,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="relative z-10 max-w-5xl mx-auto">
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
            <Brain className="w-5 h-5 text-[#ff1e1e]" />
            <span className="text-sm font-medium text-[#ff1e1e]">AI Priority System</span>
            <Activity className="w-4 h-4 text-[#ff1e1e] animate-pulse" />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 font-orbitron">
            6 AI <span className="gradient-text">Models</span> Working Together
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Intelligent fallback system ensures uninterrupted anime intelligence
          </p>
        </motion.div>

        {/* Central Brain Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-32 h-32 border-2 border-dashed border-[#ff1e1e]/30 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 border border-[#ff1e1e]/20 rounded-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-16 h-16 bg-gradient-to-br from-[#ff1e1e] to-[#cc0000] rounded-full flex items-center justify-center pulse-glow"
              >
                <Cpu className="w-8 h-8 text-white" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* AI Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#ff1e1e]/50 to-transparent transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-6">
            {aiModels.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`flex items-center gap-4 md:gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="flex-1 glass rounded-2xl p-6 relative group cursor-pointer overflow-hidden"
                  style={{ 
                    borderColor: `${model.color}20`,
                  }}
                >
                  {/* Animated Background Glow */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ 
                      background: `radial-gradient(circle at center, ${model.color}10, transparent 70%)`,
                    }}
                  />
                  
                  {/* Glow effect on hover */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ boxShadow: `0 0 40px ${model.color}30, inset 0 0 20px ${model.color}10` }}
                  />
                  
                  <div className="relative flex items-center gap-4">
                    {/* Priority Number */}
                    <motion.div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-xl font-black text-white relative overflow-hidden"
                      style={{ background: `linear-gradient(135deg, ${model.color}, ${model.color}80)` }}
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.3 }}
                    >
                      {index + 1}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-white transition-colors">
                        {model.name}
                      </h3>
                      <p className="text-white/50 text-sm mb-2">{model.description}</p>
                      <span 
                        className="text-xs font-bold px-3 py-1 rounded-full inline-flex items-center gap-1"
                        style={{ 
                          background: `${model.color}20`,
                          color: model.color,
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: model.color }} />
                        {model.badge}
                      </span>
                    </div>

                    <CheckCircle 
                      className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" 
                      style={{ color: model.color }}
                    />
                  </div>

                  {/* Hover Border */}
                  <div 
                    className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-opacity-50 transition-all pointer-events-none"
                    style={{ borderColor: model.color }}
                  />
                </motion.div>

                {/* Center Node */}
                <div className="hidden md:flex w-14 h-14 rounded-full bg-[#0f0f0f] border-2 border-[#ff1e1e]/50 items-center justify-center relative z-10">
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    className="w-5 h-5 rounded-full"
                    style={{ background: model.color, boxShadow: `0 0 15px ${model.color}` }}
                  />
                </div>

                {/* Empty Space for Alternating Layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>

          {/* Animated Arrows */}
          <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 hidden md:flex flex-col items-center justify-around pointer-events-none py-20">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: [0.3, 1, 0.3], y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              >
                <ArrowDown className="w-5 h-5 text-[#ff1e1e]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Logic Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl glass border border-[#ff1e1e]/30 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff1e1e]/0 via-[#ff1e1e]/5 to-[#ff1e1e]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <Zap className="w-6 h-6 text-[#ff1e1e]" />
            <p className="text-white/80 text-lg relative">
              <span className="text-white font-semibold">"If one AI fails,</span> the system automatically switches —{' '}
              <span className="text-[#ff1e1e] font-semibold">ensuring uninterrupted anime intelligence."</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
