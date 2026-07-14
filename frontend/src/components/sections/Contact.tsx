import { useState } from "react";
import { sendContactMessage } from "../../services/contactService";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      await sendContactMessage(formData);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong.",
      );
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-2xl mx-auto w-full">
        <p className="text-primary font-mono text-sm mb-2">03. Contact</p>
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-8">
          Get In Touch
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-surface border border-border rounded-lg px-4 py-3 text-text placeholder:text-text-muted focus:outline-none focus:border-primary"
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-surface border border-border rounded-lg px-4 py-3 text-text placeholder:text-text-muted focus:outline-none focus:border-primary"
          />

          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="bg-surface border border-border rounded-lg px-4 py-3 text-text placeholder:text-text-muted focus:outline-none focus:border-primary resize-none"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-50"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-3 rounded-lg text-sm">
              ✓ Message sent successfully! I'll get back to you soon.
            </div>
          )}
          {status === "error" && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg text-sm">
              ✕ {errorMessage}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
