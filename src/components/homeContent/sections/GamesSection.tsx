import { SectionTag, Heading, Subtext } from "@/src/components/ui/Typography";
import GameCard from "@/src/components/homeContent/cards/GameCard";

const games = [
  {
    emoji: "📖",
    title: "Bible Quiz Battle",
    description:
      "Challenge friends or go solo through Old & New Testament trivia",
    badge: "🔥 Popular",
    badgeStyle: "bg-red/20 text-red-200",
  },
  {
    emoji: "✏️",
    title: "Verse Scramble",
    description: "Unscramble Bible verses to earn devotion points and streaks",
    badge: "⚡ Daily",
    badgeStyle: "bg-blue-400/20 text-blue-200",
  },
  {
    emoji: "🗺️",
    title: "Bible Lands Explorer",
    description: "Pin cities and nations on a map from biblical accounts",
    badge: "🌍 New",
    badgeStyle: "bg-green-400/20 text-green-200",
  },
  {
    emoji: "🔤",
    title: "The Word — Wordle",
    description: "Daily Bible-themed word game for the whole family",
    badge: "📅 Daily",
    badgeStyle: "bg-pink/20 text-pink-200",
  },
];

export default function GamesSection() {
  return (
    <section className="bg-[#0a0a0a] py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <SectionTag variant="light">Faith &amp; Fun</SectionTag>
            <Heading as="h2" light>
              Christian Games &amp;
              <br />
              Bible Challenges
            </Heading>
            <Subtext light>
              Grow your knowledge of the Word — learn, compete, and earn
              rewards with your church family.
            </Subtext>
          </div>
          <a
            href="/games"
            className="text-[13px] text-white/60 hover:text-white font-medium transition-colors flex-shrink-0"
          >
            All Games →
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {games.map((game) => (
            <GameCard key={game.title} {...game} />
          ))}
        </div>
      </div>
    </section>
  );
}
