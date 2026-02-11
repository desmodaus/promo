import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

type RevealSectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

const RevealSection = ({ id, className = "", children }: RevealSectionProps) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id={id} className={`reveal ${className}`.trim()}>
      {children}
    </section>
  );
};

export default RevealSection;
