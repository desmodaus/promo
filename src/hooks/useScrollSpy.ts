import { useEffect, useState } from "react";

const useScrollSpy = (ids: string[]) => {
  const [activeId, setActiveId] = useState(ids[0] ?? "");

  useEffect(() => {
    if (!ids.length) {
      return;
    }

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
};

export default useScrollSpy;
