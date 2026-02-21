import { useState } from "react";
import DefinitionsData from "../Assets/Data/About.js";
import "./Definitions.css";

const Definitions = () => {
  const [activeItem, setActiveItem] = useState(DefinitionsData[0]);

  return (
    <section className="works-definitions">
      <div className="terms-column">
        {DefinitionsData.map((item) => (
          <button
            key={item.id}
            className={`term-btn ${
              activeItem.id === item.id ? "active" : ""
            }`}
            onClick={() => setActiveItem(item)}
          >
            {item.term}
          </button>
        ))}
      </div>

      <div className="definition-column">
        <h3>{activeItem.term}</h3>
        <p>{activeItem.definition}</p>
      </div>
    </section>
  );
};
export default Definitions;