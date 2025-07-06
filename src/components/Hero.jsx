import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const videoContainerRef = useRef(null);
  const playCircleRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const videocon = videoContainerRef.current;
    const playCircle = playCircleRef.current;

    function handleMouseEnter() {
      gsap.to(playCircle, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
      });
    }

    function handleMouseLeave() {
      gsap.to(playCircle, {
        opacity: 0,
        scale: 0,
        duration: 0.3,
      });
    }

    function handleMouseMove(e) {
      gsap.to(playCircle, {
        left: e.clientX - 70,
        top: e.clientY - 50,
        duration: 0.2,
      });
    }

    if (videocon) {
      videocon.addEventListener("mouseenter", handleMouseEnter);
      videocon.addEventListener("mouseleave", handleMouseLeave);
      videocon.addEventListener("mousemove", handleMouseMove);
    }

    // Heading animation
    gsap.from(headingRef.current, {
      y: 100,
      delay: 0.5,
      opacity: 0,
      duration: 0.9,
    });

    gsap.from(videocon, {
      scale: 1,
      delay: 1.3,
      opacity: 1,
      duration: 0.3,
    });

    return () => {
      if (videocon) {
        videocon.removeEventListener("mouseenter", handleMouseEnter);
        videocon.removeEventListener("mouseleave", handleMouseLeave);
        videocon.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      ref={videoContainerRef}
      className="w-full h-screen cursor-pointer relative overflow-hidden"
    >
      <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center gap-8 px-8 z-0">
        <div className="text-center" ref={headingRef}>
          <h1 className="text-white text-4xl md:text-6xl font-light">
            You Are The Universe As It Experiences Itself
          </h1>
        </div>
        <ul className="flex flex-wrap justify-center gap-4 text-white text-lg font-medium">
          <li>Numerology</li>
          <li>Tarot Cards</li>
          <li>Crystal Pridiction</li>
          <li>Vedic</li>
        </ul>
        <button className="px-6 py-3 bg-green-300 text-white text-lg font-light rounded-md hover:bg-green-400 transition">
          Make it
        </button>
      </div>
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        src="/medias/videos/video-bg.mp4"
      ></video>
      <div
        ref={playCircleRef}
        className="fixed text-white bg-black py-[2vw] px-[1.5vw] z-0 rounded-full opacity-0 text-[1rem] scale-0 pointer-events-none"
      >
        PLAY
      </div>
    </div>
  );
}
