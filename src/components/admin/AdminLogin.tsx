import React, { useState } from 'react';
import { Shield, Key, Mail, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';

interface AdminLoginProps {
  onLogin: (email: string) => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('admin@uppalstadium.com');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      onLogin(email);
    } else {
      setError('Please provide valid administrator credentials.');
    }
  };

  const handleQuickDemoLogin = () => {
    setEmail('admin@uppalstadium.com');
    setPassword('admin123');
    onLogin('admin@uppalstadium.com');
  };

  return (
    <div className="min-h-screen bg-[#111111] flex items-center justify-center p-4 text-white select-none">
      <div className="max-w-md w-full bg-neutral-900 border border-neutral-800 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
        {/* Stadium Glow / Brand header */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-orange-600 flex items-center justify-center font-black text-2xl text-white shadow-xl shadow-orange-950 mb-3">
            U
          </div>
          <span className="text-[11px] font-bold text-orange-400 uppercase tracking-widest">
            Rajiv Gandhi International Cricket Stadium
          </span>
          <h2 className="text-xl font-black text-white uppercase tracking-wider mt-0.5">
            Uppal Stadium Admin
          </h2>
          <p className="text-xs text-neutral-400 mt-1">
            Enterprise Event &amp; Seat Operations Portal
          </p>
        </div>

        {/* Pre-filled Demo Credentials Banner */}
        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-3.5 mb-6 text-xs text-neutral-300 space-y-1.5">
          <div className="flex items-center justify-between text-[11px] font-bold text-orange-400 uppercase tracking-wider">
            <span className="flex items-center space-x-1">
              <Key className="w-3.5 h-3.5" />
              <span>Demo Administrator Access</span>
            </span>
            <span className="text-emerald-400 font-normal">Active Session</span>
          </div>
          <div className="flex justify-between text-neutral-400 font-mono text-[11px]">
            <span>Email:</span>
            <strong className="text-white font-mono">admin@uppalstadium.com</strong>
          </div>
          <div className="flex justify-between text-neutral-400 font-mono text-[11px]">
            <span>Password:</span>
            <strong className="text-white font-mono">admin123</strong>
          </div>
        </div>

        {error && (
          <div className="mb-4 p-2.5 bg-rose-950/60 border border-rose-800 text-rose-300 text-xs rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block text-neutral-400 font-semibold mb-1">
              Administrator Email
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-neutral-500 absolute left-3 top-2.5" />
              <input
                type="email"
                id="admin-login-email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-700 rounded-lg pl-9 pr-3 py-2 text-white focus:outline-none focus:border-orange-500 text-xs"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-neutral-400 font-semibold mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-neutral-500 absolute left-3 top-2.5" />
              <input
                type="password"
                id="admin-login-password-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-700 rounded-lg pl-9 pr-3 py-2 text-white focus:outline-none focus:border-orange-500 text-xs"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            id="admin-login-submit-btn"
            className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-2.5 rounded-lg text-xs tracking-wider uppercase transition-colors shadow-lg shadow-orange-950 flex items-center justify-center space-x-2 mt-2"
          >
            <span>Sign In to Stadium Console</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* 1-Click Fast Demo Login */}
        <div className="mt-4 pt-4 border-t border-neutral-800 text-center">
          <button
            id="admin-quick-demo-login-btn"
            onClick={handleQuickDemoLogin}
            type="button"
            className="w-full py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white rounded-lg text-xs font-bold transition-colors flex items-center justify-center space-x-2"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>1-Click Demo Login</span>
          </button>
        </div>

        <div className="mt-6 text-center text-[10px] text-neutral-500">
          Uppal Stadium Seating &amp; Operations Management System v2.4
        </div>
      </div>
    </div>
  );
};
