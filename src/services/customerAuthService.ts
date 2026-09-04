import { UserProfile } from '../types';

export type CustomerUser = UserProfile;

export interface CustomerAccount extends UserProfile {
  password?: string;
  createdAt: string;
}

const STORAGE_KEY_CURRENT_USER = 'stadia_current_customer';
const STORAGE_KEY_ALL_USERS = 'stadia_registered_customers';

function safeJsonParse<T>(raw: string | null, fallback: T): T {
  if (!raw || typeof raw !== 'string') return fallback;
  const trimmed = raw.trim();
  // Prevent "Unexpected token '<' ... is not valid JSON" when storage holds HTML
  if (!trimmed || trimmed.startsWith('<') || trimmed.startsWith('<!')) {
    return fallback;
  }
  try {
    return JSON.parse(trimmed) as T;
  } catch {
    return fallback;
  }
}

const SEEDED_CUSTOMERS: CustomerAccount[] = [
  {
    id: 'usr-001',
    name: 'Revathi Miriyam',
    email: 'miriyamrevathi4@gmail.com',
    phone: '+91 98490 54321',
    avatarInitials: 'RM',
    role: 'fan',
    password: 'password123',
    createdAt: '2026-08-15T10:00:00.000Z'
  },
  {
    id: 'usr-002',
    name: 'Rahul Sharma',
    email: 'rahul.sharma@example.com',
    phone: '+91 98765 43210',
    avatarInitials: 'RS',
    role: 'fan',
    password: 'password123',
    createdAt: '2026-08-20T14:30:00.000Z'
  },
  {
    id: 'usr-003',
    name: 'Priya Patel',
    email: 'priya.patel@example.com',
    phone: '+91 91234 56789',
    avatarInitials: 'PP',
    role: 'fan',
    password: 'password123',
    createdAt: '2026-08-25T09:15:00.000Z'
  }
];

class CustomerAuthService {
  private currentUser: UserProfile | null = null;
  private users: CustomerAccount[] = [];
  private listeners: ((user: UserProfile | null) => void)[] = [];

  constructor() {
    this.init();
  }

  public subscribe(listener: (user: UserProfile | null) => void): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  private notify() {
    for (const listener of this.listeners) {
      listener(this.currentUser);
    }
  }

  private init() {
    if (typeof window === 'undefined') return;

    // Load registered users or initialize with seeds
    const storedUsers = localStorage.getItem(STORAGE_KEY_ALL_USERS);
    const parsedUsers = safeJsonParse<CustomerAccount[]>(storedUsers, []);
    if (Array.isArray(parsedUsers) && parsedUsers.length > 0) {
      this.users = parsedUsers;
    } else {
      this.users = [...SEEDED_CUSTOMERS];
      this.saveUsers();
    }

    // Load currently logged in user
    const storedCurrent = localStorage.getItem(STORAGE_KEY_CURRENT_USER);
    if (storedCurrent === null) {
      // First visit: default to logged in user Revathi for demo comfort
      this.currentUser = {
        id: SEEDED_CUSTOMERS[0].id,
        name: SEEDED_CUSTOMERS[0].name,
        email: SEEDED_CUSTOMERS[0].email,
        phone: SEEDED_CUSTOMERS[0].phone,
        avatarInitials: SEEDED_CUSTOMERS[0].avatarInitials,
        role: SEEDED_CUSTOMERS[0].role
      };
      this.saveCurrentUser();
    } else {
      this.currentUser = safeJsonParse<UserProfile | null>(storedCurrent, null);
    }
  }

  private saveUsers() {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY_ALL_USERS, JSON.stringify(this.users));
    }
  }

  private saveCurrentUser() {
    if (typeof window !== 'undefined') {
      if (this.currentUser) {
        localStorage.setItem(STORAGE_KEY_CURRENT_USER, JSON.stringify(this.currentUser));
      } else {
        localStorage.removeItem(STORAGE_KEY_CURRENT_USER);
      }
    }
  }

  public getCurrentUser(): UserProfile | null {
    return this.currentUser;
  }

  public getRegisteredUsers(): CustomerAccount[] {
    return [...this.users];
  }

  public login(email: string, password?: string): { success: boolean; user?: UserProfile; error?: string } {
    const trimmedEmail = email.trim().toLowerCase();
    const existing = this.users.find((u) => u.email.toLowerCase() === trimmedEmail);

    if (!existing) {
      return {
        success: false,
        error: `No account found with ${email}. Please check your email or click Register to create an account.`
      };
    }

    if (password && existing.password && existing.password !== password) {
      return {
        success: false,
        error: 'Incorrect password. Please try again or use the demo password: password123'
      };
    }

    const profile: UserProfile = {
      id: existing.id,
      name: existing.name,
      email: existing.email,
      phone: existing.phone,
      avatarInitials: existing.avatarInitials,
      role: existing.role
    };

    this.currentUser = profile;
    this.saveCurrentUser();
    this.notify();
    return { success: true, user: profile };
  }

  public register(data: {
    name: string;
    email: string;
    phone: string;
    password?: string;
  }): { success: boolean; user?: UserProfile; error?: string } {
    const trimmedEmail = data.email.trim().toLowerCase();
    const trimmedName = data.name.trim();
    const trimmedPhone = data.phone.trim();

    if (!trimmedName) {
      return { success: false, error: 'Please enter your full name.' };
    }
    if (!trimmedEmail || !trimmedEmail.includes('@')) {
      return { success: false, error: 'Please provide a valid email address.' };
    }
    if (!trimmedPhone || trimmedPhone.length < 8) {
      return { success: false, error: 'Please provide a valid phone number (minimum 8 digits).' };
    }

    const existing = this.users.find((u) => u.email.toLowerCase() === trimmedEmail);
    if (existing) {
      return {
        success: false,
        error: 'An account with this email address already exists. Please log in instead.'
      };
    }

    // Compute initials
    const parts = trimmedName.split(' ').filter(Boolean);
    const initials =
      parts.length > 1
        ? `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
        : trimmedName.slice(0, 2).toUpperCase();

    const newAccount: CustomerAccount = {
      id: `usr-${Date.now().toString(36)}`,
      name: trimmedName,
      email: trimmedEmail,
      phone: trimmedPhone,
      avatarInitials: initials,
      role: 'fan',
      password: data.password || 'password123',
      createdAt: new Date().toISOString()
    };

    this.users.unshift(newAccount);
    this.saveUsers();

    const profile: UserProfile = {
      id: newAccount.id,
      name: newAccount.name,
      email: newAccount.email,
      phone: newAccount.phone,
      avatarInitials: newAccount.avatarInitials,
      role: newAccount.role
    };

    this.currentUser = profile;
    this.saveCurrentUser();
    this.notify();
    return { success: true, user: profile };
  }

  public logout(): void {
    this.currentUser = null;
    this.saveCurrentUser();
    this.notify();
  }
}

export const customerAuthService = new CustomerAuthService();
