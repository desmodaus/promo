import { Link } from "react-router-dom";
import RevealSection from "../components/RevealSection";
import SectionNav from "../components/SectionNav";
import SkillCharts from "../components/SkillCharts";
import SkillTabs from "../components/SkillTabs";
import StatCard from "../components/StatCard";

const Home = () => {
  const sections = [
    { id: "skills", label: "My Skills" },
    { id: "charts", label: "Growth Charts" },
    { id: "stack", label: "Tech Stack" },
    { id: "about", label: "About Site" }
  ];

  return (
    <>
      <RevealSection className="hero hero-primary" id="top">
        <div className="container hero-grid">
          <div className="hero-text">
            <p className="eyebrow">Portfolio</p>
            <h1>React and TypeScript in Action</h1>
            <p className="lead">
              This is a full-featured demo project showcasing my skills in React, React Hooks,
              TypeScript, and Redux Toolkit. Lots of real components and logic.
            </p>
            <div className="hero-actions">
              <a className="cta" href="#skills">Explore Skills</a>
              <a className="ghost" href="#stack">Go to Stack</a>
            </div>
            <div className="meta">
              <div>
                <span className="meta-title">Main Stack</span>
                <span className="meta-value">React · TypeScript · Redux Toolkit</span>
              </div>
              <div>
                <span className="meta-title">Features</span>
                <span className="meta-value">Hooks · Router · API · UI</span>
              </div>
              <div>
                <span className="meta-title">Principles</span>
                <span className="meta-value">SOLID · DRY · KISS · YAGNI</span>
              </div>
            </div>
          </div>
          <div className="hero-card">
            <h2>What Inside</h2>
            <ul>
              <li>Tabs, Accordion, Scroll Spy, Reveal animations.</li>
              <li>Typed props and Redux store.</li>
              <li>useMemo, useCallback, useEffect у логіці.</li>
              <li>Чистий UI з модульними стилями.</li>
            </ul>
            <div className="stats">
              <StatCard label="Компонентів" value={12} suffix="+" />
              <StatCard label="Хуків" value={8} suffix="+" />
              <StatCard label="Роутів" value={3} />
            </div>
          </div>
        </div>
      </RevealSection>

      <SectionNav sections={sections} />

      <RevealSection id="skills" className="section">
        <div className="container">
          <div className="section-head">
            <h2>Мої уміння</h2>
            <p>Дивись, як технології розкладені по логічних групах.</p>
          </div>
          <SkillTabs />
        </div>
      </RevealSection>

      <RevealSection id="charts" className="section light">
        <div className="container">
          <div className="section-head">
            <h2>Графіки росту</h2>
            <p>Анімовані стовпчики підіймаються при прокрутці вниз.</p>
          </div>
          <SkillCharts />
        </div>
      </RevealSection>

      <RevealSection id="stack" className="section">
        <div className="container">
          <div className="section-head">
            <h2>Додатковий стек</h2>
            <p>Інструменти, що роблять проєкт готовим до продакшну.</p>
          </div>
          <div className="cards">
            <article className="card">
              <h3>React Router</h3>
              <p>Маршрутизація між сторінками з чистими URL.</p>
            </article>
            <article className="card">
              <h3>MUI + CSS</h3>
              <p>Контрольований дизайн і швидка стилізація компонентів.</p>
            </article>
            <article className="card">
              <h3>REST API</h3>
              <p>Інтеграції, обробка статусів і нормалізація даних.</p>
            </article>
            <article className="card">
              <h3>Git + Actions</h3>
              <p>Версіонування, CI/CD та автоматичний деплой.</p>
            </article>
          </div>
        </div>
      </RevealSection>

      <RevealSection id="about" className="section">
        <div className="container split">
          <div>
            <h2>Про цей проєкт</h2>
            <p>
              Це демонстраційний продукт, який розкриває моє мислення у фронтенді: від
              архітектури компонентів до реактивних інтерфейсів та чистої типізації.
            </p>
            <ul className="checklist">
              <li>Компонентна структура та reusable UI.</li>
              <li>Прозорі потоки даних через Redux Toolkit.</li>
              <li>React Hooks на всіх критичних екранах.</li>
            </ul>
          </div>
          <div className="panel">
            <h3>Швидкі посилання</h3>
            <Link to="/approach" className="panel-link">Мій підхід</Link>
            <Link to="/stack" className="panel-link">Стек та практики</Link>
            <Link to="/stack#contact" className="panel-link">Контакт</Link>
          </div>
        </div>
      </RevealSection>
    </>
  );
};

export default Home;
