import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import React, { useState } from "react";
import "./App.css";

function ToggleMessage({ message }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleMessage = () => {
    setIsVisible((curStatus) => !curStatus);
  };

  return (
    <div className="toggle-message">
      <h2 className="title">Toggle Message</h2>
      <button className="btn" onClick={handleToggleMessage}>
        {isVisible ? "Hide" : "Show"} Message
      </button>
      <p className="message">{isVisible ? message : null}</p>
    </div>
  );
}

function Accordian({ accordItems }) {
  const [activeAccordian, setActiveAccordian] = useState(null);
  const [toggleAccordian, setToggleAccordian] = useState({
    id: 1,
    status: false,
  });

  const handleActiveAccordian = (id) => {
    setActiveAccordian(id);
    setToggleAccordian((curToggle) => {
      if (curToggle.id === id) {
        return { ...curToggle, status: !curToggle.status };
      } else {
        return { id: id, status: true };
      }
    });
  };

  return (
    <div className="accordian">
      {accordItems.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <div
              className="accord-title"
              onClick={() => {
                handleActiveAccordian(item.id);
              }}
            >
              <span>{item.title}</span>
              <span>
                {activeAccordian === item.id && toggleAccordian.status ? (
                  <FaAngleUp />
                ) : (
                  <FaAngleDown />
                )}
              </span>
            </div>
            <div
              className={`accord-description ${activeAccordian === item.id && toggleAccordian.status && "open"}`}
            >
              <p>{item.description}</p>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

function App() {
  // const message = "This is a hidden message";
  const accordItems = [
    {
      id: 1,
      title: "JSX",
      description:
        "Stands for JavaScript XML. It is an extension to JavaScript. It is basically an HTML like syntax that may contain JavaScript expressions.",
    },
    {
      id: 2,
      title: "React State",
      description:
        "It is a memory to a React Component. When we have to store and use such values that may change over the lifespan of a component, we store them as states in that component. When we update a state using a setter method, React re-renders the component to update the actual DOM based on that state value.",
    },
    {
      id: 3,
      title: "Hooks",
      description:
        "Hooks are special functions that helps component to use state and other React features like lifecycle methods, contexts, directly within functional components. Before React 16.8, they are only used in class components, leading to more complex code and boilerplate.",
    },
  ];
  return (
    <>
      {/* <ToggleMessage message={message} /> */}
      <Accordian accordItems={accordItems} />
    </>
  );
}

export default App;
