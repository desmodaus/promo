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

  const generateTrendPath = (value: number, isActive: boolean) => {
    if (!isActive) return "M0,100 L200,100";
    
    const baseHeight = 100 - (value / 100) * 75;
    const points: [number, number][] = [[0, 100]];
    
    // Генерирую зигзагообразный тренд с острыми поворотами
    const seed = value * 17; // Используем value как seed для воспроизводимости
    for (let i = 15; i <= 200; i += 15) {
      const progress = i / 200;
      const targetHeight = 100 - progress * (100 - baseHeight);
      
      // Добавляю случайные скачки вверх для эффекта тренда
      const pseudoRandom = Math.sin(seed + i / 30) * 5 + Math.sin(seed + i / 50) * 3;
      const y = targetHeight - pseudoRandom;
      
      points.push([i, Math.max(15, Math.min(92, y))]);
    }
    
    points.push([200, baseHeight]);
    points.push([200, 100]);
    points.push([0, 100]);
    
    let path = `M${points[0][0]},${points[0][1]} `;
    for (let i = 1; i < points.length; i++) {
      path += `L${points[i][0]},${points[i][1]} `;
    }
    
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
                <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.85" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.25" />
              </linearGradient>
            </defs>
            <path
              className={`chart-wave-fill ${isVisible ? 'active' : ''}`}
              d={generateTrendPath(item.value, isVisible)}
              fill={`url(#grad-${item.label})`}
            />
            <path
              className={`chart-wave-line ${isVisible ? 'active' : ''}`}
              d={generateTrendPath(item.value, isVisible).replace(' Z', '').replace('L200,100 L0,100', '')}
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
