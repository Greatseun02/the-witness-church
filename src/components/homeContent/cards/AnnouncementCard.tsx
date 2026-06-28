interface AnnouncementCardProps {
  date: string;
  title: string;
  tag: string;
  tagStyle: string;
  active?: boolean;
  onClick?: () => void;
}

export default function AnnouncementCard({
  date,
  title,
  tag,
  tagStyle,
  active = false,
  onClick,
}: AnnouncementCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left bg-white rounded-xl p-4 border-l-4 cursor-pointer transition-all duration-150 shadow-sm hover:shadow-md ${
        active
          ? "border-l-red bg-red/4"
          : "border-l-gray-2 hover:border-l-pink"
      }`}
    >
      <p className="text-[10px] font-semibold tracking-[1px] uppercase text-muted mb-1">
        {date}
      </p>
      <p className="text-[14px] font-semibold text-navy leading-snug mb-2">
        {title}
      </p>
      <span
        className={`inline-block text-[9px] font-bold tracking-[1px] uppercase px-2 py-0.5 rounded-full ${tagStyle}`}
      >
        {tag}
      </span>
    </button>
  );
}
