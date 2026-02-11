const initSmoothScroll = () => {
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") {
        return;
      }
      const target = document.querySelector(targetId);
      if (!target) {
        return;
      }
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
};

const initTabs = () => {
  const tabGroups = document.querySelectorAll("[data-tabs]");
  tabGroups.forEach((group) => {
    const buttons = group.querySelectorAll(".tab-button");
    const panels = group.querySelectorAll(".tab-panel");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.getAttribute("data-tab");
        if (!target) {
          return;
        }

        buttons.forEach((btn) => {
          btn.classList.toggle("active", btn === button);
          btn.setAttribute("aria-selected", btn === button ? "true" : "false");
        });

        panels.forEach((panel) => {
          panel.classList.toggle("active", panel.getAttribute("data-tab-panel") === target);
        });
      });
    });
  });
};

const initReveal = () => {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
};

const initSectionHighlight = () => {
  const sectionLinks = document.querySelectorAll(".section-link");
  const sections = document.querySelectorAll("[data-section]");
  if (!sectionLinks.length || !sections.length) {
    return;
  }

  const linkMap = new Map();
  sectionLinks.forEach((link) => {
    const target = link.getAttribute("href");
    if (target) {
      linkMap.set(target, link);
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        const id = `#${entry.target.id}`;
        sectionLinks.forEach((link) => link.classList.remove("is-active"));
        const activeLink = linkMap.get(id);
        if (activeLink) {
          activeLink.classList.add("is-active");
        }
      });
    },
    { threshold: 0.6 }
  );

  sections.forEach((section) => observer.observe(section));
};

document.addEventListener("DOMContentLoaded", () => {
  initSmoothScroll();
  initTabs();
  initReveal();
  initSectionHighlight();
});
