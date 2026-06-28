interface ClipCardProps {
  platform: string;
  platformColor: string;
  title: string;
  views: string;
  bgGradient: string;
}

export default function ClipCard({
  platform,
  platformColor,
  title,
  views,
  bgGradient,
}: ClipCardProps) {
  return (
    <div className="group relative rounded-2xl overflow-hidden cursor-pointer">
      {/* Thumbnail */}
      <div
        className={`h-[200px] md:h-[220px] transition-transform duration-500 group-hover:scale-105 ${bgGradient}`}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-11 h-11 bg-white/20 border border-white/60 rounded-full flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-200 scale-90 group-hover:scale-100">
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white ml-0.5" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-center gap-1.5 mb-1.5">
          <span
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ backgroundColor: platformColor }}
          />
          <span className="text-[10px] font-bold tracking-[1px] uppercase text-white/70">
            {platform}
          </span>
        </div>
        <p className="text-[12px] font-medium text-white leading-snug mb-1">
          {title}
        </p>
        <p className="text-[10px] text-white/50">{views} views</p>
      </div>
    </div>
  );
}
