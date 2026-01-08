"use client";

import { useMemo, useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const canSubmit = useMemo(() => {
    return Boolean(name.trim() && email.trim() && category.trim() && message.trim());
  }, [name, email, category, message]);

  async function onSubmit(e) {
    e.preventDefault();
    if (submitting) return;

    setStatus(null);

    if (!canSubmit) {
      setStatus({ type: "error", message: "Please fill in all fields." });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, category, message }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus({ type: "error", message: data?.error || "Failed to send message." });
        return;
      }

      setStatus({ type: "success", message: "Message sent! We'll get back to you soon." });
      setName("");
      setEmail("");
      setCategory("");
      setMessage("");
    } catch {
      setStatus({ type: "error", message: "Network error. Please try again." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <div className="flex flex-col md:flex-row gap-5">
        <label className="flex flex-col flex-1">
          <p className="text-white text-sm font-medium leading-normal pb-2">Name</p>
          <input
            className="form-input w-full rounded-lg text-white focus:outline-0 focus:ring-1 focus:ring-primary border border-border-dark bg-[#18181b] focus:border-primary h-12 placeholder:text-text-dim px-4 text-base transition-all"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
          />
        </label>
        <label className="flex flex-col flex-1">
          <p className="text-white text-sm font-medium leading-normal pb-2">Email Address</p>
          <input
            className="form-input w-full rounded-lg text-white focus:outline-0 focus:ring-1 focus:ring-primary border border-border-dark bg-[#18181b] focus:border-primary h-12 placeholder:text-text-dim px-4 text-base transition-all"
            placeholder="name@example.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
        </label>
      </div>
      <label className="flex flex-col w-full">
        <p className="text-white text-sm font-medium leading-normal pb-2">Category</p>
        <div className="relative">
          <select
            className="form-select w-full rounded-lg text-white focus:outline-0 focus:ring-1 focus:ring-primary border border-border-dark bg-[#18181b] focus:border-primary h-12 px-4 text-base appearance-none transition-all pr-10"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option disabled value="">
              Select a topic
            </option>
            <option value="bug">Bug Report</option>
            <option value="feature">Feature Request</option>
            <option value="billing">Billing Inquiry</option>
            <option value="other">General Question</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-text-dim">
            <span className="material-symbols-outlined">expand_more</span>
          </div>
        </div>
      </label>
      <label className="flex flex-col w-full flex-1">
        <p className="text-white text-sm font-medium leading-normal pb-2">Message</p>
        <textarea
          className="form-textarea w-full rounded-lg text-white focus:outline-0 focus:ring-1 focus:ring-primary border border-border-dark bg-[#18181b] focus:border-primary min-h-[160px] placeholder:text-text-dim p-4 text-base resize-y transition-all"
          placeholder="Describe your issue or idea..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </label>

      {status ? (
        <div
          className={
            status.type === "success"
              ? "text-sm font-medium text-primary"
              : "text-sm font-medium text-red-400"
          }
        >
          {status.message}
        </div>
      ) : null}

      <button
        className="mt-2 flex w-full cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-primary-hover text-black text-base font-bold leading-normal tracking-[0.015em] transition-all shadow-lg shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed"
        type="submit"
        disabled={submitting}
      >
        {submitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
