import { useState } from "react";
import { motion } from "framer-motion";
import { sendContactMessage } from "../../services/contactService";
import SectionHeading from "../ui/SectionHeading";
import { fadeInUp, staggerContainer } from "../../lib/animations";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

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
        <SectionHeading number="03" title="Get In Touch" />

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            variants={fadeInUp}
            className="md:col-span-2 flex flex-col justify-between"
          >
            <p className="text-text-muted leading-relaxed mb-8">
              Have a project in mind or just want to say hi? My inbox is always
              open. I'll try my best to get back to you as soon as possible.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:senin@email.com"
                className="flex items-center gap-3 text-text-muted hover:text-primary transition-colors"
              >
                <FaEnvelope size={18} />
                <span className="text-sm">senin@email.com</span>
              </a>
              <a
                href="https://github.com/kullaniciadi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-text-muted hover:text-primary transition-colors"
              >
                <FaGithub size={18} />
                <span className="text-sm">github.com/kullaniciadi</span>
              </a>
              <a
                href="https://linkedin.com/in/kullaniciadi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-text-muted hover:text-primary transition-colors"
              >
                <FaLinkedin size={18} />
                <span className="text-sm">linkedin.com/in/kullaniciadi</span>
              </a>
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
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
