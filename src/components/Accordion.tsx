import { useState } from "react";

type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

const Accordion = ({ items }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="accordion" role="presentation">
      {items.map((item, index) => {
        const isOpen = index === openIndex;
        return (
          <button
            key={item.title}
            type="button"
            className={`accordion-item ${isOpen ? "open" : ""}`}
            onClick={() => setOpenIndex(isOpen ? null : index)}
          >
            <div className="accordion-title">
              <span>{item.title}</span>
              <span className="accordion-icon">{isOpen ? "–" : "+"}</span>
            </div>
            <p className="accordion-content">{item.content}</p>
          </button>
        );
      })}
    </div>
  );
};

export default Accordion;
