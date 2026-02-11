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
        description: "Базова логіка, DOM, інтеграції та контроль даних у UI.",
        level: 86,
        tags: ["ESNext", "DOM", "Async"]
      },
      {
        title: "React + Hooks",
        description: "Компонентна архітектура, локальний стан, повторне використання UI.",
        level: 84,
        tags: ["useState", "useEffect", "useMemo"]
      },
      {
        title: "TypeScript",
        description: "Типізація моделей, безпечні контракти, суворий контроль даних.",
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
        description: "Глобальний стан, передбачувана логіка, селектори і слайси.",
        level: 78,
        tags: ["Slice", "Store", "Selectors"]
      },
      {
        title: "React Router",
        description: "Навігація, маршрутизація, структура сторінок.",
        level: 81,
        tags: ["Routes", "Layouts", "Links"]
      },
      {
        title: "REST API",
        description: "Отримання, нормалізація та кешування даних.",
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
        description: "Модульність, відповідальність, мінімум дублювань.",
        level: 88,
        tags: ["Architecture", "Modules"]
      },
      {
        title: "KISS + YAGNI",
        description: "Простота, фокус на потрібних фічах.",
        level: 90,
        tags: ["Simplicity", "Focus"]
      },
      {
        title: "Git + Review",
        description: "Прозора історія комітів та контроль якості.",
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
