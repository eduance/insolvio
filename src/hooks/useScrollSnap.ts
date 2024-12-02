import { useEffect, useState } from 'react';

export function useScrollSnap() {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll('.scroll-section');
    let isScrolling = false;
    let startY: number;

    const scrollToSection = (index: number) => {
      const targetSection = sections[index];
      if (!targetSection) return;

      isScrolling = true;
      setCurrentSection(index);

      targetSection.scrollIntoView({ behavior: 'smooth' });

      setTimeout(() => {
        isScrolling = false;
      }, 1000);
    };

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) {
        e.preventDefault();
        return;
      }

      const direction = e.deltaY > 0 ? 1 : -1;
      const currentSection = e.target as HTMLElement;
      const currentIndex = Array.from(sections).indexOf(currentSection.closest('.scroll-section')!);
      const nextIndex = Math.max(0, Math.min(sections.length - 1, currentIndex + direction));

      scrollToSection(nextIndex);
    };

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isScrolling) return;
      
      const currentY = e.touches[0].clientY;
      const diff = startY - currentY;
      
      if (Math.abs(diff) > 50) {
        const direction = diff > 0 ? 1 : -1;
        const currentSection = e.target as HTMLElement;
        const currentIndex = Array.from(sections).indexOf(currentSection.closest('.scroll-section')!);
        const nextIndex = Math.max(0, Math.min(sections.length - 1, currentIndex + direction));

        scrollToSection(nextIndex);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;

      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const direction = e.key === 'ArrowDown' ? 1 : -1;
        const nextIndex = Math.max(0, Math.min(sections.length - 1, currentSection + direction));
        scrollToSection(nextIndex);
      }
    };

    document.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSection]);

  return currentSection;
}