import Image from "next/image";
import Link from "next/link";
import { SectionTag, Heading, Subtext } from "@/src/components/ui/Typography";

const cards = [
  {
    label: "Who We Are",
    title: "About Us",
    cta: "Learn More",
    href: "/about",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80",
    alt: "Church community members gathered together",
    accent: "bg-red",
  },
  {
    label: "Join Our Community",
    title: "Connect with Us",
    cta: "Sign Up",
    href: "/connect",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    alt: "People smiling and connecting",
    accent: "bg-pink",
  },
  {
    label: "Upcoming",
    title: "Celebrations & Events",
    cta: "Learn More",
    href: "/events",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    alt: "Church celebration event",
    accent: "bg-navy",
  },
];

export default function WelcomeSection() {
  return (
    <section id="community" className="bg-white py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <SectionTag>Welcome to Witness</SectionTag>
          <Heading as="h2" className="mb-2">
            Welcome Home!
          </Heading>
          <Subtext>
            Dive into our teachings, events, and community.
            <br className="hidden sm:block" /> Your journey of faith begins here.
          </Subtext>
        </div>

        {/* 3-column card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group relative rounded-2xl overflow-hidden h-[360px] md:h-[420px] block"
            >
              {/* Image */}
              <Image
                src={card.image}
                alt={card.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/5 group-hover:from-black/70 transition-all duration-300" />

              {/* Top accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${card.accent}`} />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="text-[10px] font-bold tracking-[2.5px] uppercase text-white/65 mb-2">
                  {card.label}
                </p>
                <h3 className="font-playfair text-[22px] font-semibold text-white mb-4 leading-snug">
                  {card.title}
                </h3>
                <div className="flex items-center gap-2 text-[12px] font-semibold text-white/80 group-hover:text-white transition-colors">
                  <span>{card.cta}</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
