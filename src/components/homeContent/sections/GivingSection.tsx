"use client";

import { useState } from "react";
import { SectionTag, Heading } from "@/src/components/ui/Typography";

const amounts = [
  { value: "5000", label: "₦5,000", tag: "Tithe" },
  { value: "10000", label: "₦10,000", tag: "Offering" },
  { value: "25000", label: "₦25,000", tag: "Missions" },
  { value: "50000", label: "₦50,000", tag: "Building Fund" },
  { value: "100000", label: "₦100k+", tag: "Special Seed" },
  { value: "custom", label: "Custom", tag: "Enter Amount" },
];

export default function GivingSection() {
  const [selected, setSelected] = useState("10000");
  const [customAmount, setCustomAmount] = useState("");

  return (
    <section id="give" className="bg-navy py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-[560px] mx-auto text-center">
        {/* Header */}
        <SectionTag variant="light">Online Giving</SectionTag>
        <Heading as="h2" light className="mt-1 mb-3">
          Give. Sow. Trust.
        </Heading>
        <p className="text-[15px] text-white/55 leading-relaxed mb-10 max-w-md mx-auto">
          Honour God with your firstfruits. Your generosity fuels the mission of
          The Witness Church locally and beyond.
        </p>

        {/* Amount grid */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {amounts.map((amt) => (
            <button
              key={amt.value}
              onClick={() => setSelected(amt.value)}
              className={`p-4 rounded-xl border transition-all duration-150 text-center ${
                selected === amt.value
                  ? "border-red bg-red/10"
                  : "border-white/15 hover:border-white/35"
              }`}
            >
              <div
                className={`font-playfair text-[20px] font-bold ${
                  selected === amt.value ? "text-red" : "text-white"
                }`}
              >
                {amt.label}
              </div>
              <div className="text-[10px] text-white/45 uppercase tracking-wide mt-0.5">
                {amt.tag}
              </div>
            </button>
          ))}
        </div>

        {/* Custom amount input */}
        {selected === "custom" && (
          <div className="mb-5">
            <input
              type="number"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              placeholder="Enter amount in ₦"
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-[14px] placeholder-white/40 focus:outline-none focus:border-red/60 transition-all text-center"
            />
          </div>
        )}

        {/* CTA */}
        <button className="w-full bg-red text-white font-semibold text-[15px] py-4 rounded-xl hover:bg-red-dark transition-colors duration-150 active:scale-[0.98] mb-3">
          Give Securely Online →
        </button>

        <p className="text-[11px] text-white/30">
          🔒 Secured by Paystack &middot; All transactions encrypted
        </p>
      </div>
    </section>
  );
}
