import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, ArrowRight, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Logic will be added once Firebase is set up
    setTimeout(() => {
      setLoading(false);
      console.log('Login attempt:', email);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
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
          Password
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

      <div className="flex items-center justify-between pt-2">
        <label className="flex items-center gap-2 cursor-pointer">
          <div className="w-4 h-4 border border-zinc-400 rounded-sm flex items-center justify-center">
            <div className="w-2 h-2 bg-black"></div>
          </div>
          <span className="text-[11px] uppercase tracking-wider text-zinc-500">Keep me logged in</span>
        </label>
        <Link 
          to="/forgot-password" 
          className="text-[11px] uppercase tracking-wider text-zinc-900 font-bold underline underline-offset-4"
        >
          Forgot Secret?
        </Link>
      </div>

      <motion.button
        whileTap={{ scale: 0.98 }}
        disabled={loading}
        className="w-full h-16 bg-black text-white hover:bg-zinc-800 uppercase tracking-[0.2em] text-xs font-bold transition-all mt-4 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          "Authorize Access"
        )}
      </motion.button>

      <footer className="mt-12 flex items-center gap-6">
        <div className="h-[1px] flex-1 bg-zinc-200"></div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">Security Verified</div>
        <div className="h-[1px] flex-1 bg-zinc-200"></div>
      </footer>
    </form>
  );
}
