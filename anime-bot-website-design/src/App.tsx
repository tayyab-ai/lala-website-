import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { ParticleBackground } from './components/ParticleBackground';
import { HeroSection } from './components/HeroSection';
import { SetupGuideSection } from './components/SetupGuideSection';
import { DeveloperSection } from './components/DeveloperSection';
import { FeaturesSection } from './components/FeaturesSection';
import { AISystemSection } from './components/AISystemSection';
import { SecuritySection } from './components/SecuritySection';
import { NotificationsSection } from './components/NotificationsSection';
import { CommandsSection } from './components/CommandsSection';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';

export function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-screen bg-[#080808] text-white overflow-x-hidden"
      >
        {/* Fixed Background with Particles */}
        <ParticleBackground />

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="relative z-10">
          {/* Hero Section */}
          <HeroSection />

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#ff1e1e]/30 to-transparent" />

          {/* Setup Guide Section */}
          <SetupGuideSection />

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#ff1e1e]/30 to-transparent" />

          {/* Features Section */}
          <FeaturesSection />

          {/* AI System Section */}
          <AISystemSection />

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#ff1e1e]/30 to-transparent" />

          {/* Developer Section */}
          <DeveloperSection />

          {/* Security Section */}
          <SecuritySection />

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#ff1e1e]/30 to-transparent" />

          {/* Notifications Section */}
          <NotificationsSection />

          {/* Commands Section */}
          <CommandsSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Ambient Effects */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#ff1e1e]/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#ff1e1e]/3 rounded-full blur-[200px]" />
        </div>
      </motion.div>
    </>
  );
}
