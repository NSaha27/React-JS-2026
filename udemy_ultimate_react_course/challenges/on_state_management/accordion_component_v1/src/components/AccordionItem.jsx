import { useState } from "react";

function AccordionItem({ sl, title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((curStatus) => !curStatus);
  };

  return (
    <div className={`min-h-15 flex flex-col  pt-3`} onClick={handleOpen}>
      <div
        className={`flex flex-row justify-between gap-6 p-2 font-bold text-lg text-gray-700 bg-green-100 ${isOpen && "text-green-700"}`}
      >
        <p className="text-center text-gray-400">{sl}</p>
        <p className="text-center">{title}</p>
        <p className="text-center">{isOpen ? "-" : "+"}</p>
      </div>
      {isOpen && (
        <div
          className={`mx-auto max-w-2xl text-justify pt-2 pb-6 text-gray-800`}
        >
          {description}
        </div>
      )}
    </div>
  );
}

export default AccordionItem;
