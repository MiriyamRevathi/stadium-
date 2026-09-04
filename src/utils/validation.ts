/**
 * STADIA Validation Utilities
 */
export interface ValidationResult { valid: boolean; errors: string[]; fieldErrors: Record<string, string>; }
function result(errors: string[], fieldErrors: Record<string, string> = {}): ValidationResult {
  return { valid: errors.length === 0, errors, fieldErrors };
}
export function validateEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim()) && email.length <= 254;
}
export function validatePhoneIN(phone: string): boolean {
  const cleaned = (phone || '').replace(/[\s\-()]/g, '');
  return /^(\+91)?[6-9]\d{9}$/.test(cleaned);
}
export function validateFullName(name: string): ValidationResult {
  const errors: string[] = []; const fieldErrors: Record<string, string> = {};
  const trimmed = (name || '').trim();
  if (trimmed.length < 2) { errors.push('Name must be at least 2 characters'); fieldErrors.fullName = 'Too short'; }
  else if (trimmed.length > 80) { errors.push('Name is too long'); fieldErrors.fullName = 'Too long'; }
  else if (!/^[a-zA-Z\s.'-]+$/.test(trimmed)) { errors.push('Name contains invalid characters'); fieldErrors.fullName = 'Invalid characters'; }
  return result(errors, fieldErrors);
}
export function validateBookingContact(input: { fullName: string; email: string; phone: string }): ValidationResult {
  const errors: string[] = []; const fieldErrors: Record<string, string> = {};
  const n = validateFullName(input.fullName); errors.push(...n.errors); Object.assign(fieldErrors, n.fieldErrors);
  if (!validateEmail(input.email)) { errors.push('Valid email is required'); fieldErrors.email = 'Invalid email'; }
  if (!validatePhoneIN(input.phone)) { errors.push('Enter a valid Indian mobile number'); fieldErrors.phone = 'Invalid format'; }
  return result(errors, fieldErrors);
}
export function validateSeatSelection(seatIds: string[], maxSeats = 8): ValidationResult {
  const errors: string[] = [];
  if (!seatIds.length) errors.push('Select at least one seat');
  if (seatIds.length > maxSeats) errors.push(`Maximum ${maxSeats} seats per order`);
  if (new Set(seatIds).size !== seatIds.length) errors.push('Duplicate seats in selection');
  return result(errors);
}
export function validatePassword(password: string): ValidationResult {
  const errors: string[] = [];
  if (!password || password.length < 8) errors.push('Password must be at least 8 characters');
  else {
    if (!/[A-Z]/.test(password)) errors.push('Include an uppercase letter');
    if (!/[a-z]/.test(password)) errors.push('Include a lowercase letter');
    if (!/[0-9]/.test(password)) errors.push('Include a number');
  }
  return result(errors);
}
export function sanitizeString(input: string, maxLen = 500): string {
  return (input || '').replace(/[<>]/g, '').trim().slice(0, maxLen);
}
export function validateQuantity(qty: number, min = 1, max = 8): ValidationResult {
  const errors: string[] = [];
  if (!Number.isInteger(qty) || qty < min || qty > max) errors.push(`Quantity must be an integer between ${min} and ${max}`);
  return result(errors);
}
export function validateUpiVpa(vpa: string): boolean { return /^[\w.-]+@[\w]+$/.test((vpa || '').trim()); }
export function validatePostalCodeIN(pin: string): boolean { return /^[1-9][0-9]{5}$/.test((pin || '').trim()); }
