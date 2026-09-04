import React, { useState } from 'react';
import {
  Ticket,
  Search,
  User,
  Menu,
  X,
  ShieldCheck,
  Calendar,
  Compass,
  ShoppingBag,
  LogOut,
  LogIn,
  UserPlus
} from 'lucide-react';
import { UserProfile } from '../types';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: 'home' | 'events' | 'stadiums' | 'my-bookings' | 'admin' | 'auth') => void;
  selectedSeatsCount: number;
  user: UserProfile | null;
  onLogout?: () => void;
  onOpenAuth?: (mode: 'login' | 'register') => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  selectedSeatsCount,
  user,
  onLogout,
  onOpenAuth,
  searchQuery,
  onSearchChange
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const navLinks: { id: 'home' | 'events' | 'stadiums' | 'my-bookings' | 'admin'; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <Compass className="w-4 h-4" /> },
    { id: 'events', label: 'Events', icon: <Calendar className="w-4 h-4" /> },
    { id: 'stadiums', label: 'Stadiums', icon: <Ticket className="w-4 h-4" /> },
    { id: 'my-bookings', label: 'My Bookings', icon: <ShoppingBag className="w-4 h-4" /> },
    { id: 'admin', label: 'Admin Portal', icon: <ShieldCheck className="w-4 h-4" /> }
  ];

  return (
    <header className="w-full sticky top-0 z-40 h-16 bg-black text-white border-b border-neutral-800 shadow-md">
      <div className="w-full px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Left */}
        <div className="flex items-center gap-8">
          <button
            id="brand-logo-btn"
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2 focus:outline-none rounded"
          >
            <span className="text-2xl font-black tracking-tighter text-[#F97316]">
              STADIA
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium uppercase tracking-widest" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentView === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => {
                    onNavigate(link.id);
                  }}
                  className={`transition-colors text-xs font-semibold uppercase tracking-widest py-1 ${
                    isActive
                      ? 'text-[#F97316] font-bold opacity-100'
                      : 'text-white opacity-80 hover:text-[#F97316] hover:opacity-100'
                  }`}
                >
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right Search & Controls */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Quick Search */}
          <div className="relative hidden sm:block">
            <input
              id="global-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search events..."
              className="bg-neutral-800 text-white placeholder-neutral-400 border-none rounded-full px-4 py-1.5 text-xs w-44 md:w-48 focus:ring-1 focus:ring-[#F97316] outline-none"
            />
          </div>

          {/* Selected Seats Counter if active */}
          {selectedSeatsCount > 0 && (
            <button
              id="nav-selected-seats-badge"
              onClick={() => onNavigate('events')}
              className="flex items-center space-x-1.5 bg-[#F97316] text-white font-bold text-xs px-3 py-1.5 rounded-full uppercase tracking-wider hover:bg-orange-600 transition-colors shadow-sm"
              title="View Selected Seats"
            >
              <Ticket className="w-3.5 h-3.5" />
              <span>{selectedSeatsCount} Selected</span>
            </button>
          )}

          {/* User Profile / Login & Register Controls */}
          {user ? (
            <div className="relative">
              <button
                id="user-profile-menu-btn"
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="w-8 h-8 rounded-full bg-[#F97316] flex items-center justify-center text-xs font-bold text-white transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500"
                title={user.name}
              >
                {user.avatarInitials}
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-60 bg-neutral-900 border border-neutral-700 rounded-xl shadow-2xl py-2 z-50 text-xs animate-fadeIn">
                  <div className="px-4 py-2.5 border-b border-neutral-800">
                    <p className="font-bold text-white truncate">{user.name}</p>
                    <p className="text-neutral-400 truncate text-[11px]">{user.email}</p>
                    <span className="inline-block mt-1 text-[10px] font-semibold bg-orange-500/10 text-orange-400 px-2 py-0.5 rounded border border-orange-500/20">
                      Uppal Stadium Fan
                    </span>
                  </div>
                  <button
                    id="dropdown-my-bookings"
                    onClick={() => {
                      setShowUserMenu(false);
                      onNavigate('my-bookings');
                    }}
                    className="w-full text-left px-4 py-2 text-neutral-200 hover:bg-neutral-800 hover:text-orange-500 flex items-center space-x-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>My Booked Tickets</span>
                  </button>
                  <button
                    id="dropdown-admin"
                    onClick={() => {
                      setShowUserMenu(false);
                      onNavigate('admin');
                    }}
                    className="w-full text-left px-4 py-2 text-neutral-200 hover:bg-neutral-800 hover:text-orange-500 flex items-center space-x-2"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Admin Management</span>
                  </button>

                  <div className="border-t border-neutral-800 my-1 pt-1">
                    <button
                      id="dropdown-logout-btn"
                      onClick={() => {
                        setShowUserMenu(false);
                        if (onLogout) onLogout();
                      }}
                      className="w-full text-left px-4 py-2 text-red-400 hover:bg-neutral-800/80 hover:text-red-300 flex items-center space-x-2 font-medium"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Log Out</span>
                    </button>
                  </div>
                  <div className="border-t border-neutral-800/60 px-4 py-1.5 text-[10px] text-neutral-500">
                    Rajiv Gandhi Intl Stadium, Uppal
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <button
                id="nav-login-btn"
                onClick={() => {
                  if (onOpenAuth) onOpenAuth('login');
                  else onNavigate('auth');
                }}
                className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-neutral-200 hover:text-white hover:bg-neutral-800/80 transition-colors border border-neutral-700 hover:border-neutral-500"
              >
                <LogIn className="w-3.5 h-3.5 text-orange-400" />
                <span>Sign In</span>
              </button>
              <button
                id="nav-register-btn"
                onClick={() => {
                  if (onOpenAuth) onOpenAuth('register');
                  else onNavigate('auth');
                }}
                className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-orange-600 hover:bg-orange-500 text-white transition-colors shadow-md"
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>Register</span>
              </button>
            </div>
          )}

          {/* Mobile hamburger button */}
          <button
            id="mobile-nav-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-950 border-b border-neutral-800 px-4 py-3 space-y-2">
          {/* User Auth Status in Mobile Drawer */}
          <div className="p-3 bg-neutral-900 rounded-xl border border-neutral-800 mb-2">
            {user ? (
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center font-bold text-xs">
                    {user.avatarInitials}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">{user.name}</p>
                    <p className="text-[10px] text-neutral-400 truncate">{user.email}</p>
                  </div>
                </div>
                <button
                  id="mobile-drawer-logout-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onLogout) onLogout();
                  }}
                  className="p-2 text-red-400 hover:text-red-300"
                  title="Log out"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <button
                  id="mobile-drawer-login-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenAuth) onOpenAuth('login');
                    else onNavigate('auth');
                  }}
                  className="py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg text-xs font-bold text-center border border-neutral-700 flex items-center justify-center space-x-1.5"
                >
                  <LogIn className="w-3.5 h-3.5 text-orange-400" />
                  <span>Sign In</span>
                </button>
                <button
                  id="mobile-drawer-register-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenAuth) onOpenAuth('register');
                    else onNavigate('auth');
                  }}
                  className="py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-lg text-xs font-bold text-center flex items-center justify-center space-x-1.5"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>Register</span>
                </button>
              </div>
            )}
          </div>

          <div className="mb-3">
            <input
              id="mobile-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search matches, stands..."
              className="w-full bg-neutral-900 text-white placeholder-neutral-400 text-xs px-3 py-2 border border-neutral-700 rounded focus:outline-none focus:border-orange-500"
            />
          </div>
          {navLinks.map((link) => (
            <button
              key={link.id}
              id={`mobile-nav-link-${link.id}`}
              onClick={() => {
                onNavigate(link.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-3 py-2 text-sm font-semibold rounded flex items-center space-x-2 ${
                currentView === link.id
                  ? 'bg-orange-500 text-black font-bold'
                  : 'text-neutral-300 hover:bg-neutral-900 hover:text-white'
              }`}
            >
              {link.icon}
              <span>{link.label}</span>
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
