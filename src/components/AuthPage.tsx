import React, { useState } from 'react';
import {
  Lock,
  Mail,
  User,
  Phone,
  Eye,
  EyeOff,
  Ticket,
  ShieldCheck,
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { customerAuthService } from '../services/customerAuthService';
import { StadiumEvent, Seat, UserProfile } from '../types';

interface AuthPageProps {
  initialMode?: 'login' | 'register';
  pendingBooking?: {
    event: StadiumEvent;
    seats: Seat[];
    totalAmount: number;
  } | null;
  onAuthSuccess: (user: UserProfile) => void;
  onCancel?: () => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({
  initialMode = 'login',
  pendingBooking,
  onAuthSuccess,
  onCancel
}) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Login Form State
  const [loginEmail, setLoginEmail] = useState('miriyamrevathi4@gmail.com');
  const [loginPassword, setLoginPassword] = useState('password123');

  // Register Form State
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(true);

  // Quick Demo Accounts Fill
  const handleQuickDemo = (email: string) => {
    setMode('login');
    setLoginEmail(email);
    setLoginPassword('password123');
    setErrorMessage('');
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    setIsLoading(true);

    setTimeout(() => {
      const res = customerAuthService.login(loginEmail, loginPassword);
      setIsLoading(false);

      if (res.success && res.user) {
        setSuccessMessage(`Welcome back, ${res.user.name}!`);
        setTimeout(() => {
          onAuthSuccess(res.user!);
        }, 300);
      } else {
        setErrorMessage(res.error || 'Login failed. Please check your credentials.');
      }
    }, 400);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (regPassword !== regConfirmPassword) {
      setErrorMessage('Passwords do not match. Please re-enter.');
      return;
    }

    if (!agreeTerms) {
      setErrorMessage('Please accept the stadium entry and ticket booking terms.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const res = customerAuthService.register({
        name: regName,
        email: regEmail,
        phone: regPhone,
        password: regPassword
      });
      setIsLoading(false);

      if (res.success && res.user) {
        setSuccessMessage('Account registered successfully! Redirecting...');
        setTimeout(() => {
          onAuthSuccess(res.user!);
        }, 400);
      } else {
        setErrorMessage(res.error || 'Registration failed. Please check inputs.');
      }
    }, 450);
  };

  return (
    <div className="min-h-[calc(100vh-80px)] w-full py-10 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center bg-neutral-950 text-white">
      {/* Top back button if cancelable */}
      {onCancel && (
        <div className="w-full max-w-md mb-4 flex items-center justify-between">
          <button
            id="auth-back-to-browse-btn"
            onClick={onCancel}
            className="flex items-center space-x-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-orange-500" />
            <span>Back to Matches</span>
          </button>
          <span className="text-[11px] text-neutral-500 font-mono">
            Rajiv Gandhi International Cricket Stadium
          </span>
        </div>
      )}

      {/* Main Auth Card */}
      <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden">
        {/* Pending Booking Notice Banner (Redirected when booking while logged out) */}
        {pendingBooking && (
          <div className="bg-gradient-to-r from-orange-950/80 via-neutral-900 to-amber-950/80 border-b border-orange-500/40 p-4">
            <div className="flex items-start space-x-3">
              <div className="p-2 rounded-xl bg-orange-600/20 text-orange-400 border border-orange-500/30 shrink-0">
                <Ticket className="w-5 h-5" />
              </div>
              <div className="text-xs space-y-1">
                <div className="flex items-center space-x-1.5 font-bold text-orange-400 uppercase tracking-wide">
                  <span>Booking in Progress</span>
                  <span className="text-neutral-500">•</span>
                  <span>Payment Step</span>
                </div>
                <p className="text-white font-bold text-sm">
                  {pendingBooking.event.name}
                </p>
                <div className="flex items-center flex-wrap gap-2 text-[11px] text-neutral-300">
                  <span className="bg-neutral-800 px-2 py-0.5 rounded text-neutral-300 font-mono">
                    {pendingBooking.seats.length} {pendingBooking.seats.length === 1 ? 'Seat' : 'Seats'} Selected
                  </span>
                  <span className="font-mono text-orange-300 font-bold">
                    ₹{pendingBooking.totalAmount.toLocaleString('en-IN')}
                  </span>
                </div>
                <p className="text-[11px] text-neutral-400 pt-1">
                  Please <strong className="text-white">sign in</strong> or <strong className="text-white">register</strong> below to proceed directly to the payment gateway.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Card Header & Tabs */}
        <div className="p-6 pb-2 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-orange-500 mb-3">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-black uppercase tracking-tight text-white">
            {mode === 'login' ? 'Fan Sign In' : 'Create Fan Account'}
          </h2>
          <p className="text-xs text-neutral-400 mt-1">
            {mode === 'login'
              ? 'Access your tickets, match passes, and reserved seating.'
              : 'Join the Rajiv Gandhi Stadium fan club for exclusive match access.'}
          </p>

          {/* Mode Switcher Tabs */}
          <div className="grid grid-cols-2 p-1 bg-neutral-950 rounded-xl border border-neutral-800 mt-6">
            <button
              id="auth-tab-login"
              type="button"
              onClick={() => {
                setMode('login');
                setErrorMessage('');
              }}
              className={`py-2 text-xs font-bold rounded-lg transition-all ${
                mode === 'login'
                  ? 'bg-orange-600 text-white shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Sign In
            </button>
            <button
              id="auth-tab-register"
              type="button"
              onClick={() => {
                setMode('register');
                setErrorMessage('');
              }}
              className={`py-2 text-xs font-bold rounded-lg transition-all ${
                mode === 'register'
                  ? 'bg-orange-600 text-white shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Register
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="px-6 pt-2">
          {errorMessage && (
            <div className="flex items-start space-x-2 bg-red-950/60 border border-red-800/80 rounded-xl p-3 text-xs text-red-300 animate-fadeIn">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-400 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {successMessage && (
            <div className="flex items-center space-x-2 bg-emerald-950/60 border border-emerald-800/80 rounded-xl p-3 text-xs text-emerald-300 animate-fadeIn">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>{successMessage}</span>
            </div>
          )}
        </div>

        {/* FORMS */}
        <div className="p-6 pt-4">
          {mode === 'login' ? (
            /* LOGIN FORM */
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" />
                  <input
                    id="login-email-input"
                    type="email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="e.g. user@example.com"
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-semibold text-neutral-300">
                    Password
                  </label>
                  <span className="text-[11px] text-neutral-500">Demo: password123</span>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" />
                  <input
                    id="login-password-input"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-xl pl-10 pr-10 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                id="login-submit-btn"
                type="submit"
                disabled={isLoading}
                className="w-full bg-orange-600 hover:bg-orange-500 disabled:opacity-50 text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center space-x-2 mt-2"
              >
                {isLoading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Signing In...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>
                      {pendingBooking ? 'Sign In & Proceed to Payment' : 'Sign In to Account'}
                    </span>
                  </>
                )}
              </button>

              {/* Quick Fill Demo Credentials */}
              <div className="pt-4 border-t border-neutral-800">
                <span className="block text-[11px] font-semibold text-neutral-400 mb-2">
                  Quick demo login:
                </span>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    id="demo-login-revathi-btn"
                    onClick={() => handleQuickDemo('miriyamrevathi4@gmail.com')}
                    className="text-[11px] bg-neutral-800 hover:bg-neutral-700 text-neutral-200 px-2.5 py-1 rounded-lg border border-neutral-700 transition-colors"
                  >
                    Revathi Miriyam
                  </button>
                  <button
                    type="button"
                    id="demo-login-rahul-btn"
                    onClick={() => handleQuickDemo('rahul.sharma@example.com')}
                    className="text-[11px] bg-neutral-800 hover:bg-neutral-700 text-neutral-200 px-2.5 py-1 rounded-lg border border-neutral-700 transition-colors"
                  >
                    Rahul Sharma
                  </button>
                </div>
              </div>
            </form>
          ) : (
            /* REGISTER FORM */
            <form onSubmit={handleRegisterSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" />
                  <input
                    id="reg-name-input"
                    type="text"
                    required
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                    placeholder="e.g. Ramesh Chandra"
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-xl pl-10 pr-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" />
                  <input
                    id="reg-email-input"
                    type="email"
                    required
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    placeholder="e.g. ramesh@example.com"
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-xl pl-10 pr-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  Mobile Phone Number
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" />
                  <input
                    id="reg-phone-input"
                    type="tel"
                    required
                    value={regPhone}
                    onChange={(e) => setRegPhone(e.target.value)}
                    placeholder="+91 98490 00000"
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-xl pl-10 pr-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Password
                  </label>
                  <input
                    id="reg-password-input"
                    type="password"
                    required
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    placeholder="At least 6 chars"
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Confirm Password
                  </label>
                  <input
                    id="reg-confirm-password-input"
                    type="password"
                    required
                    value={regConfirmPassword}
                    onChange={(e) => setRegConfirmPassword(e.target.value)}
                    placeholder="Repeat password"
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="flex items-start space-x-2 pt-1">
                <input
                  id="reg-terms-checkbox"
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="mt-0.5 h-3.5 w-3.5 rounded border-neutral-700 text-orange-600 focus:ring-orange-500"
                />
                <label htmlFor="reg-terms-checkbox" className="text-[11px] text-neutral-400 leading-tight">
                  I agree to the Uppal Stadium entry terms, 3-day refund policy, and ticket conditions.
                </label>
              </div>

              <button
                id="register-submit-btn"
                type="submit"
                disabled={isLoading}
                className="w-full bg-orange-600 hover:bg-orange-500 disabled:opacity-50 text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center space-x-2 mt-3"
              >
                {isLoading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Creating Account...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>
                      {pendingBooking ? 'Register & Proceed to Payment' : 'Create Fan Account'}
                    </span>
                  </>
                )}
              </button>
            </form>
          )}

          {/* Footer note */}
          <div className="text-center pt-5 text-xs text-neutral-500">
            {mode === 'login' ? (
              <p>
                Don't have an account?{' '}
                <button
                  id="switch-to-register-link"
                  onClick={() => {
                    setMode('register');
                    setErrorMessage('');
                  }}
                  className="text-orange-400 font-bold hover:underline"
                >
                  Create one now
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{' '}
                <button
                  id="switch-to-login-link"
                  onClick={() => {
                    setMode('login');
                    setErrorMessage('');
                  }}
                  className="text-orange-400 font-bold hover:underline"
                >
                  Sign in here
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
