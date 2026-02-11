import { useEffect, useState } from "react";
import RevealSection from "../components/RevealSection";
import { tooling } from "../data/skills";

type ApiPreview = {
  id: number;
  title: string;
  status: "ready" | "loading";
};

const Stack = () => {
  const [preview, setPreview] = useState<ApiPreview>({
    id: 1,
    title: "Отримую дані з REST API...",
    status: "loading"
  });

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setPreview({
        id: 1,
        title: "Дані завантажені. Компонент готовий до рендеру.",
        status: "ready"
      });
    }, 900);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <RevealSection className="hero hero-secondary">
        <div className="container hero-grid">
          <div className="hero-text">
            <p className="eyebrow">Стек та практики</p>
            <h1>Інструменти, що роблять продукт стабільним</h1>
            <p className="lead">
              Тут зібрані технології, які я використовую на щоденній основі, щоб забезпечити
              якісний код, прогнозовані релізи та стабільний UX.
            </p>
          </div>
          <div className="hero-card">
            <h2>Мій стек</h2>
            <ul>
              <li>React + TypeScript</li>
              <li>Redux Toolkit + React Router</li>
              <li>Vite, ESLint, Jest/RTL</li>
            </ul>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="section">
        <div className="container">
          <div className="section-head">
            <h2>Інструменти</h2>
            <p>Короткий список того, що підсилює розробку.</p>
          </div>
          <div className="tag-grid">
            {tooling.map((item) => (
              <span key={item} className="tag">{item}</span>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="section light">
        <div className="container split">
          <div>
            <h2>Mock API у дії</h2>
            <p>
              Демонстрація useEffect: компонент отримує дані та оновлює UI після "запиту".
            </p>
            <div className={`api-preview ${preview.status}`}>
              <span className="api-status">{preview.status}</span>
              <p>{preview.title}</p>
            </div>
          </div>
          <div className="panel">
            <h3>Підхід до коду</h3>
            <ul className="checklist">
              <li>Типізація даних у TypeScript.</li>
              <li>Контрольовані side-effects.</li>
              <li>Понятні потоки стану.</li>
            </ul>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="section" id="contact">
        <div className="container split">
          <div>
            <h2>Зв'язатися зі мною</h2>
            <p>Готовий обговорити співпрацю, проєкти або тестове завдання.</p>
          </div>
          <form className="panel form" action="#" method="get">
            <label>
              Ім'я
              <input type="text" name="name" placeholder="Ваше ім'я" />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="name@email.com" />
            </label>
            <label>
              Посилання на GitHub або портфоліо
              <input type="url" name="portfolio" placeholder="https://github.com/username" />
            </label>
            <button type="submit" className="cta">Надіслати</button>
            <small>Форма демонстраційна, без реального надсилання.</small>
          </form>
        </div>
      </RevealSection>
    </>
  );
};

export default Stack;
