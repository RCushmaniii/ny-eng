import { useState, useRef } from "react";

interface VideoHeroProps {
  src: string;
  poster?: string;
  alt?: string;
}

export default function VideoHero({ src, poster, alt = "Video" }: VideoHeroProps) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
  };

  return (
    <div className="relative rounded-lg shadow-lg overflow-hidden">
      {!playing ? (
        <button
          type="button"
          onClick={handlePlay}
          aria-label="Play video"
          className="relative block w-full cursor-pointer group"
        >
          {poster && (
            <img
              src={poster}
              alt={alt}
              className="w-full object-cover rounded-lg"
              style={{ display: "block", margin: 0, padding: 0 }}
            />
          )}
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors duration-300 rounded-lg">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 group-hover:bg-white group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-xl">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-10 h-10 md:w-12 md:h-12 text-slate-800 ml-1"
              >
                <path
                  d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11.04-6.86a1 1 0 0 0 0-1.72L9.5 4.28a1 1 0 0 0-1.5.86Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </button>
      ) : (
        <video
          ref={videoRef}
          controls
          autoPlay
          playsInline
          className="w-full rounded-lg"
          style={{ display: "block", margin: 0, padding: 0 }}
          poster={poster}
          onCanPlay={() => videoRef.current?.play()}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
