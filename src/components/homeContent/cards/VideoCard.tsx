import Image from "next/image";

interface VideoCardProps {
  image: string;
  duration: string;
  series: string;
  title: string;
  pastor: string;
  views: string;
}

export default function VideoCard({
  image,
  duration,
  series,
  title,
  pastor,
  views,
}: VideoCardProps) {
  return (
    <div className="group border border-gray-2 rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-200">
      {/* Thumbnail */}
      <div className="relative h-[160px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Hover play overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
          <div className="w-11 h-11 bg-white/20 border border-white/60 rounded-full flex items-center justify-center backdrop-blur-sm">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white ml-0.5" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        {/* Duration */}
        <span className="absolute bottom-2 right-2 bg-black/75 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded">
          {duration}
        </span>
      </div>

      {/* Body */}
      <div className="p-4">
        <p className="text-[10px] font-bold tracking-[1.5px] uppercase text-pink mb-1">
          {series}
        </p>
        <h3 className="text-[14px] font-semibold text-navy leading-snug mb-2">
          {title}
        </h3>
        <div className="flex items-center gap-2 text-[12px] text-muted">
          <span>{pastor}</span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
            </svg>
            {views}
          </span>
        </div>
      </div>
    </div>
  );
}
