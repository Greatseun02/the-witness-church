"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionTag, Heading } from "@/src/components/ui/Typography";
import SermonCard from "@/src/components/homeContent/cards/SermonCard";

const sermons = [
  {
    id: 0,
    title: "\"When God Seems Silent\"",
    pastor: "Pastor E. Okafor",
    date: "May 19",
    duration: "48:00",
    series: "Unshakeable Faith",
    fullDate: "May 19, 2025",
    progress: 38,
    elapsed: "18:32",
    image: "https://images.unsplash.com/photo-1511367461429-433e1f3e83db?w=800&q=80",
  },
  {
    id: 1,
    title: "\"Rooted in the Word\"",
    pastor: "Pastor E. Okafor",
    date: "May 12",
    duration: "52:14",
    series: "Unshakeable Faith",
    fullDate: "May 12, 2025",
    progress: 0,
    elapsed: "0:00",
    image: "https://images.unsplash.com/photo-1511367461429-433e1f3e83db?w=800&q=80",
  },
  {
    id: 2,
    title: "\"The Promise of Peace\"",
    pastor: "Min. Grace Adeyemi",
    date: "May 5",
    duration: "41:30",
    series: "Women's Conference",
    fullDate: "May 5, 2025",
    progress: 0,
    elapsed: "0:00",
    image: "https://images.unsplash.com/photo-1511367461429-433e1f3e83db?w=800&q=80",
  },
  {
    id: 3,
    title: "\"Mountains Do Move\"",
    pastor: "Pastor E. Okafor",
    date: "Apr 28",
    duration: "55:08",
    series: "Unshakeable Faith",
    fullDate: "Apr 28, 2025",
    progress: 0,
    elapsed: "0:00",
    image: "https://images.unsplash.com/photo-1511367461429-433e1f3e83db?w=800&q=80",
  },
];

export default function SermonsSection() {
  const [activeId, setActiveId] = useState(0);
  const [playing, setPlaying] = useState(false);
  const sermon = sermons[activeId];

  return (
    <section id="sermons" className="bg-white py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <SectionTag>Audio &amp; Video Messages</SectionTag>
            <Heading as="h2">
              Listen. Learn.
              <br />
              Be Transformed.
            </Heading>
          </div>
          <a href="/sermons" className="text-[13px] text-navy/60 hover:text-navy font-medium transition-colors flex-shrink-0">
            Full Sermon Library →
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-7">
          {/* Player */}
          <div className="bg-navy rounded-2xl overflow-hidden">
            {/* Artwork */}
            <div className="relative h-[220px]">
              <Image
                src={sermon.image}
                alt={`${sermon.title} sermon artwork`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />

              {/* Badge */}
              <span className="absolute top-4 left-4 bg-red text-white text-[10px] font-bold tracking-[1px] uppercase px-3 py-1 rounded-full">
                Latest Message
              </span>

              {/* Play button */}
              <button
                onClick={() => setPlaying(!playing)}
                className="absolute inset-0 flex items-center justify-center group"
                aria-label={playing ? "Pause" : "Play"}
              >
                <div className="w-16 h-16 bg-white/15 border-2 border-white/50 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/25 transition-all duration-150">
                  {playing ? (
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" aria-hidden="true">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white ml-1" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </div>
              </button>
            </div>

            {/* Controls */}
            <div className="p-6">
              <p className="text-[10px] font-bold tracking-[2px] uppercase text-red mb-1">
                Series: {sermon.series}
              </p>
              <h3 className="font-playfair text-[20px] font-semibold text-white mb-1">
                {sermon.title}
              </h3>
              <p className="text-[13px] text-white/50 mb-5">
                {sermon.pastor} · {sermon.fullDate}
              </p>

              {/* Progress */}
              <div className="h-1 bg-white/15 rounded-full mb-2 overflow-hidden">
                <div
                  className="h-full bg-red rounded-full transition-all"
                  style={{ width: `${sermon.progress}%` }}
                />
              </div>
              <div className="flex justify-between text-[11px] text-white/40 mb-4">
                <span>{sermon.elapsed}</span>
                <span>{sermon.duration}</span>
              </div>

              {/* Playback buttons */}
              <div className="flex items-center justify-center gap-5">
                {[
                  { icon: "⏮", label: "Previous" },
                  { icon: "⏪", label: "Rewind" },
                ].map((ctrl) => (
                  <button key={ctrl.label} aria-label={ctrl.label} className="text-white/50 hover:text-white transition-colors text-lg">
                    {ctrl.icon}
                  </button>
                ))}
                <button
                  onClick={() => setPlaying(!playing)}
                  aria-label={playing ? "Pause" : "Play"}
                  className="w-11 h-11 bg-red rounded-full flex items-center justify-center hover:bg-red-dark transition-colors"
                >
                  {playing ? (
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden="true">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white ml-0.5" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>
                {[
                  { icon: "⏩", label: "Fast forward" },
                  { icon: "⏭", label: "Next" },
                ].map((ctrl) => (
                  <button key={ctrl.label} aria-label={ctrl.label} className="text-white/50 hover:text-white transition-colors text-lg">
                    {ctrl.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sermon list */}
          <div className="flex flex-col gap-3">
            {sermons.map((s) => (
              <SermonCard
                key={s.id}
                title={s.title}
                pastor={s.pastor}
                date={s.date}
                duration={s.duration}
                active={activeId === s.id}
                onClick={() => { setActiveId(s.id); setPlaying(true); }}
              />
            ))}
            <div className="text-center pt-3">
              <a href="/sermons" className="text-[13px] text-navy/60 hover:text-navy font-medium transition-colors">
                Browse All 240+ Messages →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
