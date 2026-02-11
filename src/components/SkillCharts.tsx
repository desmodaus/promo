import { useEffect, useMemo, useRef, useState } from "react";

const SkillCharts = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  const charts = useMemo(
    () => [
      { label: "React", value: 88 },
      { label: "TypeScript", value: 82 },
      { label: "Redux", value: 78 },
      { label: "Hooks", value: 86 },
      { label: "UI", value: 80 }
    ],
    []
  );

  useEffect(() => {
    const element = containerRef.current;
    if (!element) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`chart-grid ${active ? "is-active" : ""}`}
      aria-label="Skill charts"
    >
      {charts.map((item) => (
        <div
          key={item.label}
          className="chart-bar"
          style={{ "--value": `${item.value}%` } as React.CSSProperties}
        >
          <span className="chart-value">{item.value}%</span>
          <div className="chart-rail">
            <div className="chart-fill" />
          </div>
          <span className="chart-label">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default SkillCharts;
