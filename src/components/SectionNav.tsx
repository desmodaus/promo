import { useMemo } from "react";
import useScrollSpy from "../hooks/useScrollSpy";

type Section = {
  id: string;
  label: string;
};

type SectionNavProps = {
  sections: Section[];
};

const SectionNav = ({ sections }: SectionNavProps) => {
  const ids = useMemo(() => sections.map((section) => section.id), [sections]);
  const activeId = useScrollSpy(ids);

  return (
    <nav className="section-nav" aria-label="Section navigation">
      <div className="container section-nav-inner">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`section-link ${activeId === section.id ? "is-active" : ""}`}
          >
            {section.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default SectionNav;
