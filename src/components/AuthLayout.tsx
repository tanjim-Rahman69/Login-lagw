import React from 'react';
import { motion } from 'motion/react';
import { useLocation } from 'react-router-dom';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export default function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  const location = useLocation();
  const isSignup = location.pathname === '/signup';
  const isForgot = location.pathname === '/forgot-password';

  return (
    <div className="min-h-screen bg-editorial-bg text-editorial-text flex overflow-hidden font-sans">
      {/* Sidebar - Dark Editorial Column */}
      <div className="hidden lg:flex w-[420px] h-screen bg-editorial-dark p-12 flex-col justify-between text-white relative flex-shrink-0">
        <div className="absolute top-0 right-0 h-full w-[1px] bg-white/10"></div>
        
        <div className="space-y-6">
          <div className="text-[10px] tracking-[0.3em] uppercase font-semibold text-zinc-400">
            SecureAuth v4.2
          </div>
          <h1 className="text-7xl font-serif leading-[0.9] italic mt-12">
            Vault<br/>Secure.
          </h1>
          <p className="text-sm text-zinc-400 leading-relaxed max-w-[280px] mt-8">
            Experience a seamless gateway to your digital assets. Engineered for high-stakes security with human-centric design.
          </p>
        </div>

        <div className="space-y-8">
          {[
            { num: '01', text: 'End-to-End Encryption' },
            { num: '02', text: 'Biometric Multi-Factor' },
            { num: '03', text: 'Privacy-First Policy' }
          ].map((item) => (
            <div key={item.num} className="flex items-center gap-4 group">
              <div className="w-10 h-10 border border-white/20 flex items-center justify-center text-xs">
                {item.num}
              </div>
              <div className="text-[11px] tracking-widest uppercase">{item.text}</div>
            </div>
          ))}
        </div>

        <div className="text-[10px] text-zinc-500 uppercase tracking-widest">
          © 2024 SecureAuth Pro International
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 h-screen overflow-y-auto flex items-center justify-center p-8 md:p-20">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-md"
        >
          {/* Navigation Tabs */}
          <nav className="flex gap-12 mb-16 border-b border-zinc-200">
            <a 
              href="/login" 
              className={`pb-4 text-sm uppercase tracking-widest transition-all ${
                !isSignup && !isForgot ? 'font-bold border-b-2 border-black' : 'font-medium text-zinc-400 hover:text-black'
              }`}
            >
              Login
            </a>
            <a 
              href="/signup" 
              className={`pb-4 text-sm uppercase tracking-widest transition-all ${
                isSignup ? 'font-bold border-b-2 border-black' : 'font-medium text-zinc-400 hover:text-black'
              }`}
            >
              Sign Up
            </a>
          </nav>

          <header className="mb-10">
            <h2 className="text-4xl font-serif mb-2">{title}</h2>
            <p className="text-zinc-500 italic text-sm">{subtitle}</p>
          </header>
          
          {children}
        </motion.div>
      </main>
    </div>
  );
}
