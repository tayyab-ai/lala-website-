import { motion } from 'framer-motion';
import { Bell, Sun, Moon, Calendar, Sparkles, Radio } from 'lucide-react';

const notifications = [
  {
    icon: Sun,
    time: "6:00 AM",
    title: "Good Morning",
    description: "Daily motivation to start your day",
    color: "#fbbf24",
  },
  {
    icon: Moon,
    time: "12:01 AM",
    title: "Good Night",
    description: "Sweet dreams anime message",
    color: "#8b5cf6",
  },
  {
    icon: Calendar,
    time: "Every Monday",
    title: "Monday Motivation",
    description: "Weekly inspiration boost",
    color: "#10b981",
  },
  {
    icon: Sparkles,
    time: "Every 6 Hours",
    title: "New Anime Updates",
    description: "Fresh anime recommendations",
    color: "#f472b6",
  },
  {
    icon: Radio,
    time: "24 Hours",
    title: "Daily Update",
    description: "Complete daily summary",
    color: "#3b82f6",
  },
];

export function NotificationsSection() {
  return (
    <section className="relative py-24 px-4" id="notifications">
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
            <Bell className="w-5 h-5 text-[#ff1e1e]" />
            <span className="text-sm font-medium text-[#ff1e1e]">Auto Notifications</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 font-orbitron">
            Smart <span className="gradient-text">Notification</span> System
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Automated messages to keep your community engaged
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#ff1e1e]/50 to-transparent md:transform md:-translate-x-1/2" />

          <div className="space-y-8">
            {notifications.map((notification, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className={`relative flex items-center gap-6 md:gap-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    className="w-4 h-4 rounded-full bg-[#0f0f0f] border-2"
                    style={{ 
                      borderColor: notification.color,
                      boxShadow: `0 0 15px ${notification.color}50`,
                    }}
                  />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`ml-16 md:ml-0 flex-1 glass rounded-2xl p-6 group cursor-pointer relative overflow-hidden ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  {/* Glow Background */}
                  <div 
                    className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"
                    style={{ background: notification.color }}
                  />

                  <div className="relative flex items-start gap-4">
                    {/* Icon */}
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${notification.color}20` }}
                    >
                      <notification.icon 
                        className="w-7 h-7" 
                        style={{ color: notification.color }}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span 
                          className="text-xs font-bold px-2 py-1 rounded-full"
                          style={{ 
                            background: `${notification.color}20`,
                            color: notification.color,
                          }}
                        >
                          ⏰ {notification.time}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#ff1e1e] transition-colors">
                        {notification.title}
                      </h3>
                      <p className="text-white/60">
                        {notification.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover Border */}
                  <div 
                    className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-opacity-50 transition-all pointer-events-none"
                    style={{ borderColor: notification.color }}
                  />
                </motion.div>

                {/* Empty space for alternating layout on desktop */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
