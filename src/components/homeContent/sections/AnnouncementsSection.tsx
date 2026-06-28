"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionTag, Heading } from "@/src/components/ui/Typography";
import AnnouncementCard from "@/src/components/homeContent/cards/AnnouncementCard";

const announcements = [
  {
    id: 0,
    date: "Sun, Jun 1 · 9:00 AM",
    title: "Children's Ministry Dedication Sunday",
    tag: "Service",
    tagStyle: "bg-blue-50 text-blue-700",
    fullDate: "June 1, 2025",
    time: "9:00 AM",
    location: "Main Auditorium",
    body: "Join us as we celebrate and dedicate the next generation to the Lord. Featuring special performances, a parent dedication ceremony, and a powerful word for families. All parents and guardians are encouraged to attend with their children.",
    image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=900&q=80",
  },
  {
    id: 1,
    date: "Sat, Jun 7 · 10:00 AM",
    title: "Annual Community Outreach & Food Drive",
    tag: "Event",
    tagStyle: "bg-green-50 text-green-700",
    fullDate: "June 7, 2025",
    time: "10:00 AM",
    location: "Church Grounds",
    body: "Be a blessing to those around us. This year's community outreach focuses on food donations, health screenings, and prayer for our neighbours. Bring a bag of groceries and your servant's heart.",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=900&q=80",
  },
  {
    id: 2,
    date: "Fri, Jun 13 · 6:00 PM",
    title: "Youth Night: Faith Over Fear",
    tag: "Youth",
    tagStyle: "bg-purple-50 text-purple-700",
    fullDate: "June 13, 2025",
    time: "6:00 PM",
    location: "Youth Hall",
    body: "A powerful night designed for young people to encounter God in a fresh way. Worship, spoken word, testimonies, and a message that will challenge and inspire the next generation to walk boldly in faith.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80",
  },
  {
    id: 3,
    date: "Sun, Jun 15 · All Services",
    title: "Father's Day Celebration & Baptism",
    tag: "Service",
    tagStyle: "bg-blue-50 text-blue-700",
    fullDate: "June 15, 2025",
    time: "All Services",
    location: "Main Auditorium",
    body: "Celebrate the fathers in our congregation and witness lives transformed through baptism. A special day honouring godly men and the families they lead. Come ready to worship and to witness.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=900&q=80",
  },
];

export default function AnnouncementsSection() {
  const [activeId, setActiveId] = useState(0);
  const active = announcements[activeId];

  return (
    <section id="events" className="bg-gray-bg py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <SectionTag>Announcements</SectionTag>
            <Heading as="h2">
              What&apos;s Happening
              <br />
              at Witness
            </Heading>
          </div>
          <a href="/announcements" className="text-[13px] text-navy/60 hover:text-navy font-medium transition-colors flex-shrink-0">
            All Announcements →
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-5">
          {/* Sidebar */}
          <div className="flex flex-row md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {announcements.map((ann) => (
              <div key={ann.id} className="min-w-[220px] md:min-w-0">
                <AnnouncementCard
                  date={ann.date}
                  title={ann.title}
                  tag={ann.tag}
                  tagStyle={ann.tagStyle}
                  active={activeId === ann.id}
                  onClick={() => setActiveId(ann.id)}
                />
              </div>
            ))}
          </div>

          {/* Featured card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-2">
            <div className="relative h-[200px]">
              <Image
                src={active.image}
                alt={active.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="p-7">
              <span className="inline-block bg-red text-white text-[10px] font-bold tracking-[1px] uppercase px-3 py-1 rounded-full mb-4">
                {active.tag}
              </span>
              <h3 className="font-playfair text-[22px] font-bold text-navy mb-3 leading-snug">
                {active.title}
              </h3>
              <p className="text-[14px] text-muted leading-relaxed mb-6">
                {active.body}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 border-t border-gray-2">
                <div className="flex flex-wrap gap-4">
                  <span className="flex items-center gap-1.5 text-[12px] text-muted">
                    📅 {active.fullDate}
                  </span>
                  <span className="flex items-center gap-1.5 text-[12px] text-muted">
                    🕘 {active.time}
                  </span>
                  <span className="flex items-center gap-1.5 text-[12px] text-muted">
                    📍 {active.location}
                  </span>
                </div>
                <button className="flex-shrink-0 bg-red text-white text-[12px] font-semibold px-5 py-2.5 rounded-lg hover:bg-red-dark transition-colors">
                  RSVP Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
