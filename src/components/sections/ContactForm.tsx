import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2, MessageSquare } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Using Formspree — replace YOUR_FORM_ID with your actual Formspree form ID
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-btn bg-[#0D0F12] border border-[#242932] text-sm text-[#F5F7FA] font-sans placeholder:text-[#3D4451] focus:outline-none focus:border-[#7C5CFC] transition-colors";

  return (
    <section
      id="contact-form"
      className="py-24 px-6 bg-[#08090B] relative border-t border-[#242932]"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="pb-10 border-b border-[#242932] mb-10">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#7C5CFC] tracking-widest uppercase mb-3">
            <MessageSquare className="w-4 h-4" />
            <span>SEND A MESSAGE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-heading text-[#F5F7FA]">
            DROP ME A LINE.
          </h2>
          <p className="text-sm text-[#69717D] font-sans mt-3">
            Fill out the form below and I'll get back to you within 24 hours.
          </p>
        </div>

        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-20 space-y-4 text-center"
          >
            <CheckCircle className="w-16 h-16 text-[#5FE3A1]" />
            <h3 className="font-heading font-bold text-2xl text-[#F5F7FA]">
              Message Sent!
            </h3>
            <p className="text-sm text-[#69717D] font-sans">
              Thanks for reaching out. I'll reply soon.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-4 px-6 py-2.5 rounded-btn bg-[#15181D] border border-[#242932] text-xs font-mono text-[#A6ADB8] hover:border-[#7C5CFC] hover:text-[#7C5CFC] transition-all"
            >
              SEND ANOTHER
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#69717D] tracking-widest">
                  NAME *
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#69717D] tracking-widest">
                  EMAIL *
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-[#69717D] tracking-widest">
                SUBJECT
              </label>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Project / Collaboration / Just saying hi"
                className={inputClass}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-[#69717D] tracking-widest">
                MESSAGE *
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell me what you have in mind..."
                className={inputClass + " resize-none"}
              />
            </div>

            {status === "error" && (
              <div className="flex items-center gap-2 text-sm text-red-400 font-mono">
                <AlertCircle className="w-4 h-4" />
                Something went wrong. Try emailing me directly.
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full sm:w-auto px-8 py-4 rounded-btn bg-[#7C5CFC] text-white font-semibold text-sm hover:bg-[#9278FF] transition-all shadow-[0_0_30px_rgba(124,92,252,0.4)] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  SENDING...
                </>
              ) : (
                <>
                  SEND MESSAGE
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
