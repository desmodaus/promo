import { useEffect, useRef, useState } from "react";

type StatCardProps = {
  label: string;
  value: number;
  suffix?: string;
};

const StatCard = ({ label, value, suffix = "" }: StatCardProps) => {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const start = performance.now();
    const duration = 800;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const current = Math.floor(progress * value);
      setDisplay(current);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [value]);

  return (
    <div className="stat-card">
      <span className="stat-value">
        {display}
        {suffix}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

export default StatCard;
