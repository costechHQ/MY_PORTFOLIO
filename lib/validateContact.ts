/** Shared by the contact form (client) and /api/contact (server). */

export type ContactValues = { name: string; email: string; message: string };
export type ContactErrors = Partial<Record<keyof ContactValues, string>>;

export const LIMITS = {
  nameMin: 2,
  nameMax: 100,
  emailMax: 254,
  messageMin: 10,
  messageMax: 2000,
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(input: unknown):
  | { ok: true; values: ContactValues }
  | { ok: false; errors: ContactErrors } {
  const raw = (input ?? {}) as Record<string, unknown>;
  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  const values: ContactValues = {
    name: str(raw.name),
    email: str(raw.email),
    message: str(raw.message),
  };

  const errors: ContactErrors = {};
  if (values.name.length < LIMITS.nameMin) errors.name = "Please enter your name.";
  else if (values.name.length > LIMITS.nameMax) errors.name = "That name is too long.";

  if (!EMAIL_RE.test(values.email) || values.email.length > LIMITS.emailMax)
    errors.email = "Please enter a valid email address.";

  if (values.message.length < LIMITS.messageMin)
    errors.message = `Please write at least ${LIMITS.messageMin} characters.`;
  else if (values.message.length > LIMITS.messageMax)
    errors.message = `Please keep it under ${LIMITS.messageMax} characters.`;

  return Object.keys(errors).length > 0 ? { ok: false, errors } : { ok: true, values };
}
