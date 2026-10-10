// Mirrors backend/src/validators/contactValidator.ts so users get the same
// messages before the request is ever sent.
export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export type ContactField = keyof ContactFormValues;
export type ContactFieldErrors = Partial<Record<ContactField, string>>;

export const CONTACT_LIMITS = {
  nameMax: 100,
  messageMin: 10,
  messageMax: 5000,
} as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateContactField = (
  field: ContactField,
  rawValue: string,
): string | undefined => {
  const value = rawValue.trim();

  switch (field) {
    case "name":
      if (!value) return "Name is required";
      if (value.length > CONTACT_LIMITS.nameMax)
        return `Name must be at most ${CONTACT_LIMITS.nameMax} characters long`;
      return undefined;
    case "email":
      if (!value) return "Email is required";
      if (!EMAIL_PATTERN.test(value)) return "Invalid email address";
      return undefined;
    case "message":
      if (value.length < CONTACT_LIMITS.messageMin)
        return `Message must be at least ${CONTACT_LIMITS.messageMin} characters long`;
      if (value.length > CONTACT_LIMITS.messageMax)
        return `Message must be at most ${CONTACT_LIMITS.messageMax} characters long`;
      return undefined;
  }
};

export const validateContact = (
  values: ContactFormValues,
): ContactFieldErrors => {
  const errors: ContactFieldErrors = {};

  (Object.keys(values) as ContactField[]).forEach((field) => {
    const error = validateContactField(field, values[field]);
    if (error) errors[field] = error;
  });

  return errors;
};
