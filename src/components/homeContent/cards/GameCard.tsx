interface GameCardProps {
  emoji: string;
  title: string;
  description: string;
  badge: string;
  badgeStyle: string;
}

export default function GameCard({
  emoji,
  title,
  description,
  badge,
  badgeStyle,
}: GameCardProps) {
  return (
    <div className="group bg-white/5 border border-white/10 rounded-2xl p-6 text-center cursor-pointer hover:-translate-y-1.5 hover:bg-white/10 hover:border-white/20 transition-all duration-200">
      <div className="text-4xl mb-3">{emoji}</div>
      <h3 className="text-[15px] font-semibold text-white mb-2">{title}</h3>
      <p className="text-[12px] text-white/50 leading-relaxed mb-4">
        {description}
      </p>
      <span
        className={`inline-block text-[10px] font-bold px-3 py-1 rounded-full ${badgeStyle}`}
      >
        {badge}
      </span>
    </div>
  );
}
