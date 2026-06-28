import { SectionTag, Heading, Subtext } from "@/src/components/ui/Typography";
import VideoCard from "@/src/components/homeContent/cards/VideoCard";

const videos = [
  {
    image:
      "https://images.unsplash.com/photo-1511367461429-433e1f3e83db?w=600&q=80",
    duration: "1:02:44",
    series: "Unshakeable Faith Series",
    title: "When God Seems Silent — Full Service",
    pastor: "Pastor E. Okafor",
    views: "34.2k",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
    duration: "58:12",
    series: "Witness Women's Conference",
    title: "Fearfully & Wonderfully Made — Full Session",
    pastor: "Min. Grace Adeyemi",
    views: "21.8k",
  },
  {
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    duration: "44:55",
    series: "Youth Summit 2024",
    title: "Generation Z: Called for This Moment",
    pastor: "Youth Pastor David Nwosu",
    views: "18.5k",
  },
];

export default function YouTubeDirectorySection() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <SectionTag>Inspiration Directory</SectionTag>
            <Heading as="h2">
              Church Sessions
              <br />
              on YouTube
            </Heading>
            <Subtext>
              Browse our curated library of powerful sessions, conferences, and
              teachings from The Witness Church.
            </Subtext>
          </div>
          <a
            href="https://www.youtube.com/@RCCGRCGlobal/live"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-navy/60 hover:text-navy font-medium transition-colors flex-shrink-0"
          >
            Open on YouTube →
          </a>
        </div>

        {/* Live embed */}
        <div className="mb-10 rounded-2xl overflow-hidden border border-gray-2 shadow-sm">
          <iframe
            width="100%"
            height="480"
            src="https://www.youtube.com/embed/live_stream?channel=UCPDKiyfEEnL5v-ZJz5KtwkQ"
            frameBorder="0"
            allowFullScreen
            title="The Witness Church Live Stream"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {videos.map((video) => (
            <VideoCard key={video.title} {...video} />
          ))}
        </div>
      </div>
    </section>
  );
}
