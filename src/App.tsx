import React, { useState, useEffect } from 'react';
import { CustomerPortal } from './components/CustomerPortal';
import { AdminApp } from './components/admin/AdminApp';
import { Ticket, ShieldCheck } from 'lucide-react';

export default function App() {
  // Read initial portal mode from URL hash or default to 'customer'
  const [portalMode, setPortalMode] = useState<'customer' | 'admin'>(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#admin') {
      return 'admin';
    }
    return 'customer';
  });

  // Sync hash with mode
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#admin') {
        setPortalMode('admin');
      } else if (window.location.hash === '#customer') {
        setPortalMode('customer');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSwitchToAdmin = () => {
    setPortalMode('admin');
    window.location.hash = 'admin';
  };

  const handleSwitchToCustomer = () => {
    setPortalMode('customer');
    window.location.hash = 'customer';
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans relative">
      {/* Global Quick Floating Mode Switcher (Always accessible) */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center bg-neutral-900/90 backdrop-blur-md border border-neutral-700/80 rounded-full p-1 shadow-2xl">
        <button
          id="global-switch-customer-pill"
          onClick={handleSwitchToCustomer}
          className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
            portalMode === 'customer'
              ? 'bg-orange-600 text-white shadow-md'
              : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
          }`}
          title="Switch to Fan & Customer Portal"
        >
          <Ticket className="w-3.5 h-3.5" />
          <span>Customer Portal</span>
        </button>

        <button
          id="global-switch-admin-pill"
          onClick={handleSwitchToAdmin}
          className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
            portalMode === 'admin'
              ? 'bg-neutral-700 text-white shadow-md'
              : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
          }`}
          title="Switch to Uppal Stadium Admin Portal"
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Admin Portal</span>
        </button>
      </div>

      {/* Active Portal Experience */}
      {portalMode === 'customer' ? (
        <CustomerPortal onNavigateToAdmin={handleSwitchToAdmin} />
      ) : (
        <AdminApp onSwitchToCustomer={handleSwitchToCustomer} />
      )}
    </div>
  );
}
