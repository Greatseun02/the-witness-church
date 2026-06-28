import { SectionTag, Heading, Subtext } from "@/src/components/ui/Typography";
import ClipCard from "@/src/components/homeContent/cards/ClipCard";

const clips = [
  {
    platform: "YouTube",
    platformColor: "#FF0000",
    title: "\"Your Identity is Not in Your Pain\" — 3 min clip",
    views: "12.4k",
    bgGradient:
      "bg-gradient-to-br from-red-950 via-red-900 to-rose-950",
  },
  {
    platform: "Instagram",
    platformColor: "#E040FB",
    title: "Worship Moment: \"Way Maker\" · Live at Witness",
    views: "8.7k",
    bgGradient:
      "bg-gradient-to-br from-purple-950 via-fuchsia-900 to-pink-950",
  },
  {
    platform: "Facebook",
    platformColor: "#1877F2",
    title: "Morning Prayer with Pastor Emmanuel · Daily 6AM",
    views: "5.2k",
    bgGradient:
      "bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950",
  },
  {
    platform: "TikTok",
    platformColor: "#69C9D0",
    title: "1-Minute Bible Fact: Did You Know? — Elijah's Journey",
    views: "24.1k",
    bgGradient:
      "bg-gradient-to-br from-teal-950 via-cyan-900 to-slate-900",
  },
];

export default function SocialClipsSection() {
  return (
    <section className="bg-gray-bg py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <SectionTag>Social Media Clips</SectionTag>
            <Heading as="h2">
              Bite-Sized Faith
              <br />
              for Every Day
            </Heading>
            <Subtext>
              Short, powerful clips from our services and devotionals — share
              the Word with your network.
            </Subtext>
          </div>
          <a
            href="#"
            className="text-[13px] text-navy/60 hover:text-navy font-medium transition-colors flex-shrink-0"
          >
            Follow on Social →
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {clips.map((clip) => (
            <ClipCard key={clip.platform} {...clip} />
          ))}
        </div>
      </div>
    </section>
  );
}
