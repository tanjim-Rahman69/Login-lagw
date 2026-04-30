import React from 'react';
import { motion } from 'motion/react';
import { LogOut, User, Settings, Shield, Bell, CreditCard, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-editorial-bg flex flex-col font-sans text-editorial-text">
      <header className="bg-white border-b border-zinc-200 px-8 py-6 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <div className="bg-editorial-dark p-2 text-white">
            <Shield className="w-5 h-5" />
          </div>
          <span className="font-serif italic font-bold tracking-tight text-xl uppercase">Vault.</span>
        </div>
        
        <div className="flex items-center gap-6">
          <button className="text-zinc-400 hover:text-black transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <div className="h-6 w-[1px] bg-zinc-200"></div>
          <button 
            onClick={handleLogout}
            className="text-[10px] uppercase tracking-widest font-bold border-b border-black pb-1 hover:text-zinc-500 hover:border-zinc-500 transition-all"
          >
            Terminal Exit
          </button>
        </div>
      </header>

      <main className="flex-grow p-8 md:p-16 max-w-7xl mx-auto w-full">
        <header className="mb-16 border-l-4 border-black pl-8 py-4">
          <div className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 mb-4">Identity Authorization Success</div>
          <h2 className="text-5xl font-serif mb-4 leading-tight">Welcome, <span className="italic">Traveler.</span></h2>
          <p className="text-zinc-500 text-sm max-w-lg leading-relaxed">
            Your credentials have been verified against the Sentinel ledger. All systems are operational and encrypted.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <DashboardCard 
            icon={<User className="w-5 h-5" />} 
            title="Registry" 
            desc="Update your personal ledger and contact hooks."
            num="01"
          />
          <DashboardCard 
            icon={<Shield className="w-5 h-5" />} 
            title="Defense" 
            desc="Manage cryptographic passwords and active sessions."
            num="02"
          />
          <DashboardCard 
            icon={<Settings className="w-5 h-5" />} 
            title="Logic" 
            desc="Configure system heuristics and behavior flags."
            num="03"
          />
          <DashboardCard 
            icon={<CreditCard className="w-5 h-5" />} 
            title="Treasury" 
            desc="Balance allocations and resource subscriptions."
            num="04"
          />
        </div>

        <section className="mt-20 bg-white border border-zinc-200 p-12">
          <div className="flex justify-between items-end mb-10 pb-6 border-b border-zinc-100">
            <div>
              <h3 className="text-2xl font-serif">Audit Log</h3>
              <p className="text-[10px] uppercase tracking-widest text-zinc-400 mt-1">Terminal Activity Feed</p>
            </div>
          </div>
          
          <div className="space-y-0">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between py-6 border-b border-zinc-50 last:border-0 group hover:bg-zinc-50 transition-colors -mx-6 px-6">
                <div className="flex items-center gap-8">
                  <span className="text-[10px] font-bold text-zinc-300">0{i}</span>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest">Protocol Verification</p>
                    <p className="text-xs text-zinc-500 italic mt-1">Node sync completed with 0.00ms latency.</p>
                  </div>
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Timestamp: 16:31:00</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function DashboardCard({ icon, title, desc, num }: { icon: React.ReactNode, title: string, desc: string, num: string }) {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="bg-white p-8 border border-zinc-100 hover:border-black transition-all cursor-pointer group flex flex-col justify-between h-64"
    >
      <div>
        <div className="text-[10px] text-zinc-300 font-bold mb-6">{num}</div>
        <h3 className="text-lg font-serif italic mb-3">{title}</h3>
        <p className="text-xs text-zinc-500 leading-relaxed">{desc}</p>
      </div>
      <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowRight className="w-4 h-4" />
      </div>
    </motion.div>
  );
}
