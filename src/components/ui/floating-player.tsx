"use client";

import { useEffect, useRef, useState } from "react";

export function FloatingPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        const audio = audioRef.current;
        if (audio) {
          audio.volume = 0.3;
          audio.play().then(() => setIsPlaying(true)).catch(() => {});
        }
      }
    };

    window.addEventListener("click", handleInteraction, { once: true });
    window.addEventListener("touchstart", handleInteraction, { once: true });
    window.addEventListener("keydown", handleInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
    };
  }, [hasInteracted]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.volume = 0.3;
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio
        ref={audioRef}
        src="https://intense-coral-pn3mnmtzlu.edgeone.app/Bedrock%20Labyrinth.mp3"
        loop
        preload="none"
      />
      <button
        onClick={togglePlay}
        className="flex items-center gap-2 h-10 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-all duration-200 shadow-lg"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <>
            <span className="flex items-center gap-[3px]">
              <span className="w-[3px] h-3 bg-magenta rounded-full animate-[equalize_0.6s_ease-in-out_infinite]" />
              <span className="w-[3px] h-3 bg-magenta rounded-full animate-[equalize_0.6s_ease-in-out_0.2s_infinite]" />
              <span className="w-[3px] h-3 bg-magenta rounded-full animate-[equalize_0.6s_ease-in-out_0.4s_infinite]" />
            </span>
            <span className="hidden sm:inline">Now Playing</span>
          </>
        ) : (
          <>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5,3 19,12 5,21" />
            </svg>
            <span className="hidden sm:inline">Play Music</span>
          </>
        )}
      </button>
    </div>
  );
}
