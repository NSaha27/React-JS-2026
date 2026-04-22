import { useState } from "react";

import AccordionItem from "./AccordionItem";

function Accordion({ topics }) {
  const [activeAccord, setActiveAccord] = useState(null);

  const handleSetActiveAccord = (sl) => {
    setActiveAccord(sl);
  };

  return (
    <div className="min-w-2xl border-3 border-green-600 rounded-md p-6">
      {topics.map((topic, index) => {
        return (
          <AccordionItem
            key={index}
            sl={index < 10 ? `0${index + 1}` : index + 1}
            title={topic.title}
            onSetActiveAccord={handleSetActiveAccord}
            activeAccord={activeAccord}
          >
            {topic.description}
          </AccordionItem>
        );
      })}
    </div>
  );
}

export default Accordion;
