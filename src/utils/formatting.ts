/**
 * STADIA Formatting Helpers
 */
import type { CurrencyCode, LocaleCode, Money } from '../types/enterprise';
const CURRENCY_LOCALE: Record<CurrencyCode, string> = { INR: 'en-IN', USD: 'en-US', EUR: 'de-DE', GBP: 'en-GB', AED: 'ar-AE', SGD: 'en-SG', AUD: 'en-AU' };
const CURRENCY_SYMBOL: Record<CurrencyCode, string> = { INR: '₹', USD: '$', EUR: '€', GBP: '£', AED: 'د.إ', SGD: 'S$', AUD: 'A$' };
export function formatMoney(amount: number, currency: CurrencyCode = 'INR', compact = false): string {
  try {
    return new Intl.NumberFormat(CURRENCY_LOCALE[currency] || 'en-IN', { style: 'currency', currency, notation: compact ? 'compact' : 'standard', maximumFractionDigits: currency === 'INR' ? 0 : 2 }).format(amount);
  } catch { return `${CURRENCY_SYMBOL[currency] || ''}${amount.toLocaleString()}`; }
}
export function toMoney(amount: number, currency: CurrencyCode = 'INR'): Money {
  return { amount, currency, formatted: formatMoney(amount, currency) };
}
export function formatNumber(n: number, locale: LocaleCode = 'en-IN'): string { return new Intl.NumberFormat(locale).format(n); }
export function formatPercent(value: number, digits = 1): string { return `${value.toFixed(digits)}%`; }
export function formatDate(iso: string, locale: LocaleCode = 'en-IN'): string {
  const d = new Date(iso); if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString(locale, { year: 'numeric', month: 'short', day: 'numeric' });
}
export function formatDateTime(iso: string, locale: LocaleCode = 'en-IN'): string {
  const d = new Date(iso); if (isNaN(d.getTime())) return iso;
  return d.toLocaleString(locale, { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}
export function formatRelativeTime(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return 'just now';
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  return formatDate(iso);
}
export function formatSeatLabel(section: string, row: string, number: number | string): string { return `${section} · Row ${row} · Seat ${number}`; }
export function formatPhoneDisplay(phone: string): string {
  const c = phone.replace(/\D/g, '');
  if (c.length === 10) return `+91 ${c.slice(0, 5)} ${c.slice(5)}`;
  if (c.length === 12 && c.startsWith('91')) return `+91 ${c.slice(2, 7)} ${c.slice(7)}`;
  return phone;
}
export function formatPoints(points: number): string { return `${formatNumber(points)} pts`; }
export function truncate(text: string, max = 80): string { if (!text) return ''; return text.length <= max ? text : text.slice(0, max - 1) + '…'; }
export function formatCapacity(used: number, total: number): string {
  const pct = total ? Math.round((used / total) * 100) : 0;
  return `${formatNumber(used)} / ${formatNumber(total)} (${pct}%)`;
}
export function slugify(text: string): string { return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
