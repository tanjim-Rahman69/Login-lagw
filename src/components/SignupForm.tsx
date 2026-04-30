import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, User, ArrowRight, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SignupForm() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Logic will be added once Firebase is set up
    setTimeout(() => {
      setLoading(false);
      console.log('Signup attempt:', { name, email });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="relative border-b border-zinc-300 focus-within:border-black py-2 transition-colors">
        <label className="block text-[10px] uppercase tracking-widest text-zinc-400 mb-1">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-transparent outline-none text-lg font-medium"
          placeholder="John Anderson"
        />
      </div>

      <div className="relative border-b border-zinc-300 focus-within:border-black py-2 transition-colors">
        <label className="block text-[10px] uppercase tracking-widest text-zinc-400 mb-1">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-transparent outline-none text-lg font-medium"
          placeholder="j.anderson@sentinel.com"
        />
      </div>

      <div className="relative border-b border-zinc-300 focus-within:border-black py-2 transition-colors">
        <label className="block text-[10px] uppercase tracking-widest text-zinc-400 mb-1">
          Security Password
        </label>
        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-transparent outline-none text-lg font-medium"
          placeholder="••••••••••••"
        />
      </div>

      <motion.button
        whileTap={{ scale: 0.98 }}
        disabled={loading}
        className="w-full h-16 bg-black text-white hover:bg-zinc-800 uppercase tracking-[0.2em] text-xs font-bold transition-all mt-4 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          "Initialize Account"
        )}
      </motion.button>

      <footer className="mt-12 flex items-center gap-6">
        <div className="h-[1px] flex-1 bg-zinc-200"></div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">Join the Sentinel</div>
        <div className="h-[1px] flex-1 bg-zinc-200"></div>
      </footer>
    </form>
  );
}
