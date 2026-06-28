interface LiveBannerProps {
  isLive?: boolean;
  sermonTitle?: string;
  pastor?: string;
}

export default function LiveBanner({
  isLive = true,
  sermonTitle = "Sunday Morning Worship — \"The Power of Surrender\"",
  pastor = "Pastor Emmanuel Okafor",
}: LiveBannerProps) {
  if (!isLive) return null;

  return (
    <div className="bg-red-dark border-y border-red/40 px-6 md:px-12 lg:px-16 py-2.5 flex items-center gap-3 overflow-hidden">
      <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse-dot flex-shrink-0" />
      <span className="text-white text-[11px] font-bold tracking-[2px] uppercase flex-shrink-0">
        Live Now
      </span>
      <span className="text-white/80 text-[13px] truncate hidden sm:block">
        {sermonTitle} &mdash; {pastor}
      </span>
      <a
        href="https://www.youtube.com/@RCCGRCGlobal/live"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-auto flex-shrink-0 bg-white text-red text-[11px] font-bold px-4 py-1.5 rounded-full hover:bg-red hover:text-white transition-colors duration-150"
      >
        Join Stream →
      </a>
    </div>
  );
}
