import { SectionTag, Heading } from "@/src/components/ui/Typography";

const streakDays = [
  { label: "M", done: true },
  { label: "T", done: true },
  { label: "W", done: true },
  { label: "T", done: true },
  { label: "F", today: true },
  { label: "S", done: false },
  { label: "S", done: false },
];

const actionBtns = [
  { label: "📖 Read Chapter", style: "bg-red text-white hover:bg-red-dark" },
  { label: "🔖 Bookmark", style: "border border-white/25 text-white/80 hover:bg-white/10" },
  { label: "🔊 Listen", style: "border border-white/25 text-white/80 hover:bg-white/10" },
  { label: "↗ Share", style: "border border-white/25 text-white/80 hover:bg-white/10" },
];

export default function DevotionSection() {
  return (
    <section id="devotion" className="bg-[#0a0a0a] py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <SectionTag variant="light">Daily Devotion</SectionTag>
            <Heading as="h2" light className="mt-1">
              Start Your Day
              <br />
              in The Word
            </Heading>
          </div>
          <a href="/devotion" className="text-[13px] text-white/60 hover:text-white font-medium transition-colors flex-shrink-0">
            View Full Plan →
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Main devotion card — spans 2 cols */}
          <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-7">
            <p className="text-[10px] font-bold tracking-[2px] uppercase text-white/45 mb-5">
              Today · {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })} · Week 22 of 52
            </p>

            <div className="flex flex-col lg:flex-row gap-7">
              {/* Left: devotion text */}
              <div className="flex-1">
                <h3 className="font-playfair text-[22px] font-semibold text-white mb-3 leading-snug">
                  The Secret Place of the Most High
                </h3>
                <p className="text-[13px] text-white/60 mb-4">
                  📖 Reading:{" "}
                  <strong className="text-red font-semibold">Psalm 91:1–16</strong>
                </p>

                {/* Verse box */}
                <div className="border-l-[3px] border-red bg-red/8 rounded-r-xl px-5 py-4 mb-5">
                  <p className="font-playfair italic text-[14px] text-white/80 leading-relaxed">
                    &ldquo;He who dwells in the shelter of the Most High will rest in
                    the shadow of the Almighty. I will say of the Lord, &lsquo;He is my
                    refuge and my fortress, my God, in whom I trust.&rsquo;&rdquo;
                  </p>
                  <p className="text-red text-[11px] font-semibold mt-2 tracking-wide">
                    — Psalm 91:1–2 · Memory Verse of the Day
                  </p>
                </div>

                <p className="text-[13px] text-white/60 leading-relaxed mb-6">
                  Today&apos;s devotion centres on the unshakeable protection available
                  to those who abide in God&apos;s presence. As you navigate the
                  uncertainties of this week, anchor your heart in this truth: your
                  dwelling place is in Him.
                </p>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-2">
                  {actionBtns.map((btn) => (
                    <button
                      key={btn.label}
                      className={`text-[11px] font-semibold px-4 py-2 rounded-full transition-all duration-150 ${btn.style}`}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Right: notes + streak */}
              <div className="w-full lg:w-[200px] flex-shrink-0">
                <p className="text-[10px] font-bold tracking-[2px] uppercase text-white/45 mb-2">
                  My Study Notes
                </p>
                <textarea
                  className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-[12px] text-white/40 placeholder-white/30 font-sans resize-none min-h-[80px] focus:outline-none focus:border-red/50 transition-colors"
                  placeholder="Tap to write your reflections..."
                />

                {/* Streak */}
                <div className="mt-5">
                  <p className="text-[10px] font-bold tracking-[2px] uppercase text-white/45 mb-2">
                    🔥 Your Streak
                  </p>
                  <div className="flex gap-1.5">
                    {streakDays.map((day) => (
                      <div
                        key={day.label}
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-bold transition-all
                          ${day.done ? "bg-red text-white" : day.today ? "border border-red text-red" : "border border-white/20 text-white/40"}`}
                      >
                        {day.label}
                      </div>
                    ))}
                  </div>
                  <p className="text-[11px] text-red font-semibold mt-2">
                    🔥 12-day streak! Keep it up!
                  </p>
                </div>

                {/* Progress */}
                <div className="mt-5">
                  <p className="text-[10px] font-bold tracking-[2px] uppercase text-white/45 mb-2">
                    Reading Plan
                  </p>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden mb-1.5">
                    <div className="h-full w-[42%] bg-red rounded-full" />
                  </div>
                  <p className="text-[11px] text-white/35">
                    Week 22 of 52 · 42% Complete
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Memory Verse card */}
          <div className="bg-gradient-to-br from-red to-pink rounded-2xl p-7 flex flex-col">
            <div className="text-3xl mb-3">✏️</div>
            <p className="text-[10px] font-bold tracking-[2px] uppercase text-white/70 mb-3">
              Memory Verse Challenge
            </p>
            <blockquote className="font-playfair text-[17px] font-semibold text-white leading-snug flex-1">
              &ldquo;Commit thy works unto the LORD, and thy thoughts shall be
              established.&rdquo;
            </blockquote>
            <p className="text-white/70 text-[13px] mt-2 mb-5">
              — Proverbs 16:3
            </p>
            <div className="bg-black/15 rounded-xl p-3 text-[12px] text-white/80 mb-5">
              Tap to practice this verse with our fill-in-the-blank game →
            </div>
            <button className="text-[12px] font-semibold text-white border border-white/40 py-2.5 rounded-xl hover:bg-white/10 transition-all">
              Practice Verse
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
