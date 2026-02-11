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

  const generateWavePath = (value: number, isActive: boolean) => {
    if (!isActive) return "M0,100 L200,100";
    
    const height = 100 - (value / 100) * 80;
    const waves = 3;
    let path = `M0,100 `;
    
    for (let i = 0; i <= 200; i += 10) {
      const x = i;
      const waveOffset = Math.sin((i / 200) * waves * Math.PI * 2) * 5;
      const y = height + waveOffset;
      path += `L${x},${y} `;
    }
    
    path += `L200,100 Z`;
    return path;
  };

  return (
    <div ref={containerRef} className="chart-grid-wave">
      {charts.map((item) => (
        <div key={item.label} className="chart-wave-item">
          <div className="chart-wave-header">
            <span className="chart-wave-label">{item.label}</span>
            <span className={`chart-wave-percent ${isVisible ? 'active' : ''}`}>
              {isVisible ? item.value : 0}%
            </span>
          </div>
          <svg 
            className="chart-wave-svg" 
            viewBox="0 0 200 100" 
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id={`grad-${item.label}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.9" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path
              className={`chart-wave-fill ${isVisible ? 'active' : ''}`}
              d={generateWavePath(item.value, isVisible)}
              fill={`url(#grad-${item.label})`}
            />
            <path
              className={`chart-wave-line ${isVisible ? 'active' : ''}`}
              d={generateWavePath(item.value, isVisible).replace(' Z', '')}
              stroke="var(--brand)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default SkillCharts;
