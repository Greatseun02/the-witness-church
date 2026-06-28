"use client";

import { useState } from "react";
import { SectionTag, Heading } from "@/src/components/ui/Typography";

const categories = [
  "Health & Healing",
  "Family",
  "Finance & Career",
  "Salvation of a Loved One",
  "Marriage",
  "Breakthrough",
  "Other",
];

export default function PrayerRequestSection() {
  const [anonymous, setAnonymous] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    category: categories[0],
    request: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="prayer" className="bg-gray-bg py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <SectionTag>Community Prayer</SectionTag>
          <Heading as="h2" className="mb-3">
            Send a Prayer Request
          </Heading>
          <p className="text-[15px] text-muted leading-relaxed">
            Your request goes directly to{" "}
            <strong className="text-navy font-semibold">Pastor Emmanuel</strong>.
            Our intercessory team prays over every request submitted.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white border border-gray-2 rounded-2xl p-10 text-center shadow-sm">
            <div className="text-5xl mb-4">🙏</div>
            <h3 className="font-playfair text-[22px] font-bold text-navy mb-2">
              Request Received
            </h3>
            <p className="text-[14px] text-muted leading-relaxed mb-6">
              Thank you for sharing your heart with us. Pastor Emmanuel and our
              intercessory team will pray over your request. God hears every
              prayer.
            </p>
            <button
              onClick={() => { setSubmitted(false); setForm({ name: "", category: categories[0], request: "" }); }}
              className="text-[13px] font-semibold text-red hover:text-red-dark transition-colors"
            >
              Submit another request →
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-gray-2 rounded-2xl p-7 shadow-sm"
          >
            {/* Name */}
            <div className="mb-5">
              <label className="block text-[12px] font-semibold text-navy/70 mb-1.5">
                Your Name{" "}
                <span className="text-muted font-normal">(optional)</span>
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. John A."
                className="w-full bg-gray-bg border border-gray-2 rounded-xl px-4 py-3 text-[13px] text-text placeholder-muted/60 focus:outline-none focus:border-red/50 focus:ring-2 focus:ring-red/10 transition-all"
              />
            </div>

            {/* Category */}
            <div className="mb-5">
              <label className="block text-[12px] font-semibold text-navy/70 mb-1.5">
                Prayer Category
              </label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full bg-gray-bg border border-gray-2 rounded-xl px-4 py-3 text-[13px] text-text focus:outline-none focus:border-red/50 focus:ring-2 focus:ring-red/10 transition-all appearance-none"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Request */}
            <div className="mb-5">
              <label className="block text-[12px] font-semibold text-navy/70 mb-1.5">
                Your Prayer Request
              </label>
              <textarea
                value={form.request}
                onChange={(e) => setForm({ ...form, request: e.target.value })}
                placeholder="Share what's on your heart..."
                rows={5}
                required
                className="w-full bg-gray-bg border border-gray-2 rounded-xl px-4 py-3 text-[13px] text-text placeholder-muted/60 resize-none focus:outline-none focus:border-red/50 focus:ring-2 focus:ring-red/10 transition-all"
              />
            </div>

            {/* Anonymous toggle */}
            <label className="flex items-center gap-3 cursor-pointer mb-6 select-none">
              <button
                type="button"
                role="switch"
                aria-checked={anonymous}
                onClick={() => setAnonymous(!anonymous)}
                className={`relative w-10 h-6 rounded-full transition-colors duration-200 flex-shrink-0 ${
                  anonymous ? "bg-red" : "bg-gray-2"
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${
                    anonymous ? "translate-x-4" : "translate-x-0"
                  }`}
                />
              </button>
              <span className="text-[13px] text-muted">
                Make this request anonymous
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-red text-white font-semibold text-[14px] py-4 rounded-xl hover:bg-red-dark transition-colors duration-150 active:scale-[0.98] flex items-center justify-center gap-2"
            >
              🙏 Submit Prayer Request
            </button>

            <p className="text-center text-[11px] text-muted mt-3">
              Your privacy is respected. All requests are confidential.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
