import { useId, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { AnimatePresence, m } from "framer-motion";
import { ArrowUpRight, Check, CheckCircle2, Copy, Loader2, Mail, Send } from "lucide-react";
import { sendContactMessage, ContactRequestError } from "@/services/contactService";
import Section from "@/components/ui/Section";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { Button } from "@/components/ui/Button";
import { fadeInUp, revealViewport, staggerContainer } from "@/lib/animations";
import { profileData, socialLinks } from "@/data/profile";
import { contactContent } from "@/data/content";
import {
  CONTACT_LIMITS,
  validateContact,
  validateContactField,
  type ContactField,
  type ContactFieldErrors,
  type ContactFormValues,
} from "@/lib/contactValidation";
import { useToast } from "@/lib/toast";
import { cn } from "@/lib/cn";

const EMPTY_FORM: ContactFormValues = { name: "", email: "", message: "" };
const FIELD_ORDER: ContactField[] = ["name", "email", "message"];

const copyText = async (text: string) => {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
};

const inputClass = (invalid: boolean) =>
  cn(
    "w-full rounded-xl border bg-background/60 px-4 py-3 text-[0.95rem] text-text placeholder:text-text-muted/70 transition-[border-color,box-shadow] duration-200 outline-none",
    "focus:border-primary focus:ring-4 focus:ring-primary/15",
    invalid ? "border-red-400/70 focus:border-red-400 focus:ring-red-400/15" : "border-border hover:border-border-strong",
  );

const ContactSection = () => {
  const showToast = useToast();
  const formId = useId();
  const fieldRefs = useRef<Partial<Record<ContactField, HTMLInputElement | HTMLTextAreaElement | null>>>({});

  const [values, setValues] = useState<ContactFormValues>(EMPTY_FORM);
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<ContactField, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formError, setFormError] = useState("");
  const [copied, setCopied] = useState(false);

  const fieldId = (field: ContactField) => `${formId}-${field}`;
  const errorId = (field: ContactField) => `${formId}-${field}-error`;

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = event.target.name as ContactField;
    const value = event.target.value;
    setValues((current) => ({ ...current, [field]: value }));
    if (touched[field]) {
      setErrors((current) => ({ ...current, [field]: validateContactField(field, value) }));
    }
    if (status === "success" || status === "error") setStatus("idle");
  };

  const handleBlur = (field: ContactField) => {
    setTouched((current) => ({ ...current, [field]: true }));
    setErrors((current) => ({ ...current, [field]: validateContactField(field, values[field]) }));
  };

  const focusFirstInvalid = (fieldErrors: ContactFieldErrors) => {
    const first = FIELD_ORDER.find((field) => fieldErrors[field]);
    if (first) fieldRefs.current[first]?.focus();
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (status === "loading") return;

    const clientErrors = validateContact(values);
    setTouched({ name: true, email: true, message: true });
    setErrors(clientErrors);
    if (Object.keys(clientErrors).length > 0) {
      focusFirstInvalid(clientErrors);
      return;
    }

    setStatus("loading");
    setFormError("");

    try {
      await sendContactMessage({
        name: values.name.trim(),
        email: values.email.trim(),
        message: values.message.trim(),
      });
      setStatus("success");
      setValues(EMPTY_FORM);
      setTouched({});
      setErrors({});
      showToast({
        variant: "success",
        title: contactContent.successTitle,
        description: contactContent.successMessage,
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong.";
      const fieldErrors = error instanceof ContactRequestError ? error.fieldErrors : {};
      setStatus("error");
      setFormError(message);
      if (Object.keys(fieldErrors).length > 0) {
        setErrors(fieldErrors);
        focusFirstInvalid(fieldErrors);
      }
      showToast({ variant: "error", title: contactContent.errorTitle, description: message });
    }
  };

  const handleCopy = async () => {
    try {
      await copyText(profileData.email);
      setCopied(true);
      showToast({ variant: "success", title: contactContent.copiedLabel });
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      showToast({ variant: "error", title: "Couldn't copy the email address" });
    }
  };

  const renderField = (field: ContactField, multiline = false) => {
    const { label, placeholder } = contactContent.fields[field];
    const error = errors[field];
    const shared = {
      id: fieldId(field),
      name: field,
      value: values[field],
      placeholder,
      onChange: handleChange,
      onBlur: () => handleBlur(field),
      "aria-invalid": Boolean(error),
      "aria-describedby": error ? errorId(field) : undefined,
      required: true,
      className: inputClass(Boolean(error)),
    };

    return (
      <div className={cn("flex flex-col gap-2", multiline && "sm:col-span-2")}>
        <div className="flex items-baseline justify-between">
          <label htmlFor={fieldId(field)} className="text-sm font-medium text-text">
            {label}
          </label>
          {multiline && (
            <span
              className={cn(
                "font-mono text-[0.7rem] tabular-nums",
                values.message.length > CONTACT_LIMITS.messageMax ? "text-red-400" : "text-text-muted",
              )}
            >
              {values.message.length}/{CONTACT_LIMITS.messageMax}
            </span>
          )}
        </div>
        {multiline ? (
          <textarea
            {...shared}
            ref={(element) => {
              fieldRefs.current[field] = element;
            }}
            rows={6}
            className={cn(shared.className, "min-h-36 resize-y")}
          />
        ) : (
          <input
            {...shared}
            ref={(element) => {
              fieldRefs.current[field] = element;
            }}
            type={field === "email" ? "email" : "text"}
            autoComplete={field === "email" ? "email" : "name"}
            maxLength={field === "name" ? CONTACT_LIMITS.nameMax : undefined}
          />
        )}
        <AnimatePresence initial={false}>
          {error && (
            <m.p
              id={errorId(field)}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18 }}
              className="text-xs text-red-300"
            >
              {error}
            </m.p>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const externalLinks = socialLinks.filter((link) => link.external);

  return (
    <Section id="contact" content={contactContent.section}>
      <m.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="grid gap-6 lg:grid-cols-12 lg:gap-8"
      >
        <m.div variants={fadeInUp} className="flex min-w-0 flex-col gap-6 lg:col-span-5">
          <p className="text-lg leading-relaxed text-text-muted">{contactContent.intro}</p>

          <SpotlightCard className="p-5 sm:p-6">
            <p className="mb-3 font-mono text-[0.7rem] tracking-[0.2em] text-primary-soft uppercase">
              {contactContent.emailLabel}
            </p>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary-soft ring-1 ring-primary/25">
                <Mail size={19} aria-hidden="true" />
              </span>
              <a
                href={`mailto:${profileData.email}`}
                className="min-w-0 flex-1 truncate font-medium text-white decoration-primary-soft/60 underline-offset-4 hover:underline"
              >
                {profileData.email}
              </a>
              <button
                type="button"
                onClick={handleCopy}
                aria-label={copied ? "Email copied" : contactContent.copyLabel}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background/60 text-text-muted transition-colors hover:border-primary/50 hover:text-white"
              >
                {copied ? <Check size={17} className="text-emerald-400" /> : <Copy size={17} />}
              </button>
            </div>
          </SpotlightCard>

          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {externalLinks.map(({ href, label, displayText, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-4 rounded-2xl border border-border bg-surface/50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface/80"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background/60 text-text transition-colors group-hover/link:text-primary-soft">
                    <Icon size={19} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium text-white">{label}</span>
                    <span className="block truncate text-xs text-text-muted">{displayText}</span>
                  </span>
                  <span className="sr-only">(opens in a new tab)</span>
                  <ArrowUpRight
                    size={18}
                    aria-hidden="true"
                    className="text-text-muted transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:text-primary-soft"
                  />
                </a>
              </li>
            ))}
          </ul>
        </m.div>

        <m.div variants={fadeInUp} className="min-w-0 lg:col-span-7">
          <SpotlightCard className="p-6 sm:p-8">
            <form noValidate onSubmit={handleSubmit} aria-describedby={`${formId}-status`} className="grid gap-5 sm:grid-cols-2">
              {renderField("name")}
              {renderField("email")}
              {renderField("message", true)}

              <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-text-muted">All fields are required.</p>
                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto"
                  rightIcon={
                    status === "loading" ? (
                      <Loader2 size={17} className="animate-spin" aria-hidden="true" />
                    ) : (
                      <Send size={16} aria-hidden="true" className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    )
                  }
                >
                  {status === "loading" ? contactContent.submittingLabel : contactContent.submitLabel}
                </Button>
              </div>

              <div id={`${formId}-status`} aria-live="polite" className="sm:col-span-2 empty:hidden">
                {status === "success" && (
                  <p className="flex items-start gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
                    <CheckCircle2 size={18} className="mt-px shrink-0" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold">{contactContent.successTitle}</strong>{" "}
                      {contactContent.successMessage}
                    </span>
                  </p>
                )}
                {status === "error" && formError && (
                  <p role="alert" className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                    {formError}
                  </p>
                )}
              </div>
            </form>
          </SpotlightCard>
        </m.div>
      </m.div>
    </Section>
  );
};

export default ContactSection;
