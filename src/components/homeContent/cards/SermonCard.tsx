interface SermonCardProps {
  title: string;
  pastor: string;
  date: string;
  duration: string;
  active?: boolean;
  onClick?: () => void;
}

export default function SermonCard({
  title,
  pastor,
  date,
  duration,
  active = false,
  onClick,
}: SermonCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left flex items-center gap-4 p-4 rounded-xl cursor-pointer border transition-all duration-150 ${
        active
          ? "border-red bg-red/4"
          : "border-gray-2 bg-gray-bg hover:border-pink/40 hover:bg-white"
      }`}
    >
      {/* Thumb */}
      <div
        className={`w-14 h-14 rounded-lg flex-shrink-0 flex items-center justify-center text-white text-sm transition-colors ${
          active ? "bg-red" : "bg-navy"
        }`}
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="text-[13px] font-semibold text-navy leading-snug truncate">
          {title}
        </p>
        <p className="text-[11px] text-muted mt-0.5">
          {pastor} · {date}
        </p>
      </div>

      {/* Duration */}
      <span className="flex-shrink-0 text-[11px] text-muted bg-gray-2 px-2.5 py-1 rounded-full">
        {duration}
      </span>
    </button>
  );
}
