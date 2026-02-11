export type SkillItem = {
  title: string;
  description: string;
  level: number;
  tags: string[];
};

export type SkillGroup = {
  id: "frontend" | "state" | "quality";
  label: string;
  items: SkillItem[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    label: "Frontend Core",
    items: [
      {
        title: "JavaScript",
        description: "Core logic, DOM manipulation, integrations and data control in UI.",
        level: 86,
        tags: ["ESNext", "DOM", "Async"]
      },
      {
        title: "React + Hooks",
        description: "Component architecture, local state, UI reusability and optimization.",
        level: 84,
        tags: ["useState", "useEffect", "useMemo"]
      },
      {
        title: "TypeScript",
        description: "Type safety, model typing, secure contracts and strict data control.",
        level: 80,
        tags: ["Types", "Generics", "Interfaces"]
      }
    ]
  },
  {
    id: "state",
    label: "State & Data",
    items: [
      {
        title: "Redux Toolkit",
        description: "Global state management, predictable logic, selectors and slices.",
        level: 78,
        tags: ["Slice", "Store", "Selectors"]
      },
      {
        title: "React Router",
        description: "Navigation, routing, page structure and URL management.",
        level: 81,
        tags: ["Routes", "Layouts", "Links"]
      },
      {
        title: "REST API",
        description: "Fetching, data normalization and caching strategies.",
        level: 76,
        tags: ["Fetch", "Axios", "Mock"]
      }
    ]
  },
  {
    id: "quality",
    label: "Code Quality",
    items: [
      {
        title: "SOLID + DRY",
        description: "Modularity, responsibility, minimal code duplication.",
        level: 88,
        tags: ["Architecture", "Modules"]
      },
      {
        title: "KISS + YAGNI",
        description: "Simplicity, focus on needed features.",
        level: 90,
        tags: ["Simplicity", "Focus"]
      },
      {
        title: "Git + Review",
        description: "Transparent commit history and quality control.",
        level: 82,
        tags: ["Git", "Code Review"]
      }
    ]
  }
];

export const tooling = [
  "React Router",
  "Redux Toolkit",
  "MUI",
  "REST API",
  "Vite",
  "Jest + RTL",
  "ESLint",
  "GitHub Actions"
];
