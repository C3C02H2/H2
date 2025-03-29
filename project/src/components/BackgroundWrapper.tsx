import React, { useEffect, useRef } from 'react';

const BackgroundWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;

        // Лимитиране на скалата (zoom) и позицията по Y
        const maxScale = 1.2; // Максимален zoom-in
        const maxTranslateY = 100; // Максимално отдалечаване (px)

        const scale = Math.min(1 + scrollY * 0.0002, maxScale);
        const translateY = Math.min(scrollY * 0.5, maxTranslateY);

        parallaxRef.current.style.transform = `scale(${scale}) translateY(${translateY}px)`;
      }
    };

    // Деактивиране на скрол върху spline-viewer
    const disableViewerScroll = (event: Event) => event.preventDefault();

    window.addEventListener('scroll', handleScroll);
    if (parallaxRef.current) {
      parallaxRef.current.addEventListener('wheel', disableViewerScroll, { passive: false });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (parallaxRef.current) {
        parallaxRef.current.removeEventListener('wheel', disableViewerScroll);
      }
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Фиксиран Spline Background */}
      <div className="absolute inset-0 z-0 pointer-events-none"> {/* 🔹 Забранява клик върху фона */}
        <div
          ref={parallaxRef}
          className="w-full h-full transition-transform duration-500 ease-out will-change-transform"
          style={{ position: "fixed", top: 0, left: 0 }}
        >
          <spline-viewer 
            url="https://prod.spline.design/hJWqkOr8S97eTaWL/scene.splinecode"
            interaction-events="none" // 🔹 Деактивира drag & pan
          ></spline-viewer>
        </div>
      </div>

      {/* Основното съдържание */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundWrapper;
