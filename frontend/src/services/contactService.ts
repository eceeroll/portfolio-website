import axios from "axios";
import { api } from "@/services/api";
import type {
  ContactField,
  ContactFieldErrors,
  ContactFormValues,
} from "@/lib/contactValidation";

interface ApiValidationIssue {
  field?: string;
  message?: string;
}

interface ApiErrorBody {
  error?: string;
  errors?: ApiValidationIssue[];
}

const CONTACT_FIELDS: ContactField[] = ["name", "email", "message"];

export class ContactRequestError extends Error {
  fieldErrors: ContactFieldErrors;

  constructor(
    message: string,
    options: { fieldErrors?: ContactFieldErrors; cause?: unknown } = {},
  ) {
    super(message, { cause: options.cause });
    this.name = "ContactRequestError";
    this.fieldErrors = options.fieldErrors ?? {};
  }
}

const isContactField = (field: unknown): field is ContactField =>
  CONTACT_FIELDS.includes(field as ContactField);

export const sendContactMessage = async (payload: ContactFormValues) => {
  try {
    const { data } = await api.post("/contact", payload);
    return data;
  } catch (error) {
    if (axios.isAxiosError<ApiErrorBody>(error) && error.response) {
      const body = error.response.data;

      if (Array.isArray(body?.errors) && body.errors.length > 0) {
        const fieldErrors: ContactFieldErrors = {};
        const messages: string[] = [];

        body.errors.forEach(({ field, message }) => {
          if (!message) return;
          messages.push(message);
          if (isContactField(field) && !fieldErrors[field]) {
            fieldErrors[field] = message;
          }
        });

        throw new ContactRequestError(
          messages.join(". ") || "Please check the form and try again.",
          { fieldErrors, cause: error },
        );
      }

      throw new ContactRequestError(
        body?.error ?? "Failed to send message. Please try again later.",
        { cause: error },
      );
    }

    throw new ContactRequestError(
      "Could not reach the server. Please check your connection and try again.",
      { cause: error },
    );
  }
};
