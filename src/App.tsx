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
              About
            </NavLink>
            <NavLink to="/approach">My Approach</NavLink>
            <NavLink to="/stack">Stack & Practices</NavLink>
          </nav>
          <Link className="cta" to="/stack#contact">
            Contact
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
            <p>Live example of React, TypeScript and engineering thinking.</p>
            <p className="footer-author">Developed by: Blagush Artem Oleksandrovych.</p>
          </div>
          <div className="footer-links">
            <Link to="/approach">My Approach</Link>
            <Link to="/stack">Stack</Link>
            <Link to="/stack#contact">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
