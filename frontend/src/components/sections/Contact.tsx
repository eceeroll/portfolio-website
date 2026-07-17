import { useState } from "react";
import { motion } from "framer-motion";
import { sendContactMessage } from "../../services/contactService";
import SectionHeading from "../ui/SectionHeading";
import { fadeInUp, staggerContainer } from "../../lib/animations";
import { socialLinks } from "../../data/profile";
import { contactContent } from "../../data/content";

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

  const inputStyles =
    "w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-text placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all";

  return (
    <section id="contact" className="min-h-screen flex items-center px-6 py-28">
      <motion.div
        className="max-w-5xl mx-auto w-full"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionHeading
          number={contactContent.section.headingNumber}
          title={contactContent.section.title}
        />

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            variants={fadeInUp}
            className="md:col-span-2 flex flex-col justify-between"
          >
            <p className="text-text-muted leading-relaxed mb-8">
              {contactContent.intro}
            </p>

            <div className="flex flex-col gap-4">
              {socialLinks.map(
                ({ href, label, displayText, icon: Icon, external }) => (
                  <a
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 text-text-muted hover:text-primary transition-colors"
                  >
                    <Icon size={18} />
                    <span className="text-sm">{displayText ?? label}</span>
                  </a>
                ),
              )}
            </div>
          </motion.div>

          <motion.form
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="md:col-span-3 flex flex-col gap-4 bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputStyles}
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputStyles}
            />

            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className={`${inputStyles} resize-none`}
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-medium transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0"
            >
              {status === "loading"
                ? contactContent.submittingLabel
                : contactContent.submitLabel}
            </button>

            {status === "success" && (
              <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-3 rounded-lg text-sm">
                {contactContent.successMessage}
              </div>
            )}
            {status === "error" && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg text-sm">
                ✕ {errorMessage}
              </div>
            )}
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
