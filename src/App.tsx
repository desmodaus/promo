import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Approach from "./routes/Approach";
import Stack from "./routes/Stack";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <header className="site-header">
        <div className="container header-content">
          <div className="logo">
            <span>Frontend Portfolio</span>
            <small>React + TypeScript showcase</small>
          </div>
          <nav className="nav">
            <NavLink to="/" end>
              Про сайт
            </NavLink>
            <NavLink to="/approach">Мій підхід</NavLink>
            <NavLink to="/stack">Стек та практики</NavLink>
          </nav>
          <Link className="cta" to="/stack#contact">
            Зв'язатися
          </Link>
        </div>
      </header>

      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/stack" element={<Stack />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <div>
            <h3>Frontend Portfolio</h3>
            <p>Живий приклад React, TypeScript та інженерного мислення.</p>
            <p className="footer-author">Розробив сайт: Благуш Артем Олександрович.</p>
          </div>
          <div className="footer-links">
            <Link to="/approach">Мій підхід</Link>
            <Link to="/stack">Стек</Link>
            <Link to="/stack#contact">Контакт</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
