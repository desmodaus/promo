import { Link } from "react-router-dom";
import Accordion from "../components/Accordion";
import RevealSection from "../components/RevealSection";

const Approach = () => {
  const items = [
    {
      title: "Планую архітектуру",
      content: "Розбиваю UI на компоненти, обираю стейт-менеджмент і карту даних."
    },
    {
      title: "Будую компоненти",
      content: "Використовую React та Hooks для керованого стану і повторного використання."
    },
    {
      title: "Підключаю дані",
      content: "Налаштовую Redux Toolkit, селектори, інтеграції та async-логіку."
    },
    {
      title: "Тестую й оптимізую",
      content: "Перевіряю edge-case сценарії та оптимізую ререндери."
    }
  ];

  return (
    <>
      <RevealSection className="hero hero-secondary">
        <div className="container hero-grid">
          <div className="hero-text">
            <p className="eyebrow">Мій підхід</p>
            <h1>Системний фронтенд від структури до деталей</h1>
            <p className="lead">
              Я будую інтерфейси, в яких легко підтримувати логіку, масштабувати функції та
              контролювати якість. React Hooks, TypeScript та Redux допомагають робити це стабільно.
            </p>
          </div>
          <div className="hero-card">
            <h2>Ключові фокуси</h2>
            <ul>
              <li>Чиста архітектура і модульність.</li>
              <li>Стабільний стан та контроль даних.</li>
              <li>Продуктивність та UX на першому місці.</li>
            </ul>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="section">
        <div className="container">
          <div className="section-head">
            <h2>Як я працюю</h2>
            <p>Покроковий процес з реальними компонентами та логікою.</p>
          </div>
          <Accordion items={items} />
        </div>
      </RevealSection>

      <RevealSection className="section light">
        <div className="container split">
          <div>
            <h2>React Hooks в роботі</h2>
            <p>
              У цьому проєкті використані useState, useEffect, useMemo, useCallback та useRef —
              кожен для конкретної задачі, без зайвого ускладнення.
            </p>
            <ul className="checklist">
              <li>useState для керування UI-станом.</li>
              <li>useEffect для синхронізації і даних.</li>
              <li>useMemo / useCallback для оптимізації.</li>
              <li>useRef для анімацій та доступу до DOM.</li>
            </ul>
          </div>
          <div className="panel">
            <h3>Далі по стеку</h3>
            <Link className="panel-link" to="/stack">Стек та практики</Link>
            <Link className="panel-link" to="/stack#contact">Контакт</Link>
          </div>
        </div>
      </RevealSection>
    </>
  );
};

export default Approach;
