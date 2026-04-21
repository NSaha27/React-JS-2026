import AccordionItem from "./AccordionItem";

function Accordion({ topics }) {
  return (
    <div className="min-w-2xl border-3 border-green-600 rounded-md p-6">
      {topics.map((topic, index) => {
        return (
          <AccordionItem
            key={index}
            sl={index < 10 ? `0${index + 1}` : index + 1}
            title={topic.title}
            description={topic.description}
          />
        );
      })}
    </div>
  );
}

export default Accordion;
