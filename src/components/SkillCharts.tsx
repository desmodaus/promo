import { useEffect, useMemo, useRef, useState } from "react";

const SkillCharts = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

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
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="chart-grid">
      {charts.map((item) => (
        <div key={item.label} className="chart-item">
          <div className="chart-header">
            <span className="chart-label">{item.label}</span>
            <span className="chart-percent">{item.value}%</span>
          </div>
          <div className="chart-container">
            <div 
              className={`chart-bar-fill ${isVisible ? 'active' : ''}`}
              style={{ '--bar-height': `${item.value}%` } as React.CSSProperties}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillCharts;
