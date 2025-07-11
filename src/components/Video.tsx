"use client";
import React, { useRef, useEffect, useState } from "react";

const AutoPlayYoutube = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  const videoId = "_z_RRlyhS74";
  const baseUrl = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&mute=1`;

  const [src, setSrc] = useState(baseUrl);

  // Observer để detect inView
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    const el = containerRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  // Khi inView mới thêm autoplay=1
  useEffect(() => {
    if (inView) {
      setSrc(`${baseUrl}&autoplay=1`);
    }
  }, [inView]);

  return (
    <div
      ref={containerRef}
      className="w-full mx-auto rounded-lg overflow-hidden shadow-lg"
    >
      <iframe
        style={{ minHeight: "900px" }}
        ref={iframeRef}
        className="w-full h-full"
        src={src}
        title="Blanca City Video"
        allow="autoplay; encrypted-media"
        allowFullScreen
        // height={900}
        // width={}
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default AutoPlayYoutube;
