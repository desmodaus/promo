import { useEffect, useMemo, useRef, useState } from "react";

type ChartData = {
  label: string;
  value: number;
};

const SkillCharts = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [chartData, setChartData] = useState<ChartData[]>([]);

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
      setChartData(charts);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setChartData(charts);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [charts]);

  return (
    <div ref={containerRef} className="chart-grid" aria-label="Skill charts">
      {chartData.map((item) => (
        <div key={item.label} className="chart-bar">
          <span className="chart-value">{item.value}%</span>
          <div className="chart-rail">
            <div
              className="chart-fill"
              style={{ height: `${item.value}%` }}
            />
          </div>
          <span className="chart-label">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default SkillCharts;
