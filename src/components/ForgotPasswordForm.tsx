import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ForgotPasswordForm() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Logic will be added once Firebase is set up
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1500);
  };

  if (sent) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-4"
      >
        <div className="flex justify-center mb-4">
          <div className="bg-green-50 p-3 rounded-full">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
        </div>
        <h3 className="text-lg font-semibold text-[#1a1a1a]">Check your email</h3>
        <p className="text-[#9e9e9e] text-sm mt-2 mb-6">
          We've sent a password reset link to <span className="text-[#1a1a1a] font-medium">{email}</span>.
        </p>
        <Link 
          to="/login" 
          className="text-sm font-semibold text-[#1a1a1a] border border-[#e5e5e5] px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Back to login
        </Link>
      </motion.div>
    );
  }

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

      <motion.button
        whileTap={{ scale: 0.98 }}
        disabled={loading}
        className="w-full h-16 bg-black text-white hover:bg-zinc-800 uppercase tracking-[0.2em] text-xs font-bold transition-all mt-4 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          "Request Recovery"
        )}
      </motion.button>

      <footer className="mt-12 flex items-center gap-6">
        <div className="h-[1px] flex-1 bg-zinc-200"></div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">Secure Protocol</div>
        <div className="h-[1px] flex-1 bg-zinc-200"></div>
      </footer>
    </form>
  );
}
