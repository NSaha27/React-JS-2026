import { useState } from "react";
import "./App.css";

function App() {
  const [selectedID, setSelectedID] = useState(null);

  const handleActiveID = (id) => {
    setSelectedID(id !== selectedID ? id : null);
  };

  return (
    <>
      <div className="app">
        <ul className="qnsAnsList">
          {questions.map((qnsAnsObj) => {
            return (
              <Flashcard
                key={qnsAnsObj.id}
                questionObj={qnsAnsObj}
                selectedID={selectedID}
                handleActiveID={handleActiveID}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

const questions = [
  {
    id: 1,
    question: "What language is React based on?",
    answer: "JavaScript",
    activeStatus: false,
  },
  {
    id: 2,
    question: "What are the building blocks of React apps?",
    answer: "Components",
    activeStatus: false,
  },
  {
    id: 3,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
    activeStatus: false,
  },
  {
    id: 4,
    question: "How to pass data from parent to child components?",
    answer: "via props",
    activeStatus: false,
  },
  {
    id: 5,
    question: "How to give components memory?",
    answer: "by using states",
    activeStatus: false,
  },
  {
    id: 6,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "controlled element",
    activeStatus: false,
  },
];

function Flashcard({ questionObj, selectedID, handleActiveID }) {
  const [toggleFlashCard, setToggleFlashCard] = useState({
    id: 1,
    status: false,
  });

  const handleClick = () => {
    handleActiveID(questionObj.id);
  };

  const handleCardToggle = (id) => {
    setToggleFlashCard((card) => {
      if (card.id === id) {
        return { ...card, status: !card.status };
      } else {
        return { id: id, status: true };
      }
    });
  };

  return (
    <li className="qnsAnsListItem">
      <div
        className="card"
        onClick={() => {
          (handleClick(), handleCardToggle(selectedID));
        }}
        style={{
          backgroundColor:
            questionObj.id === selectedID && toggleFlashCard && "#ff4500",
          color: questionObj.id === selectedID && toggleFlashCard && "#f5f5dc",
        }}
      >
        {questionObj.id === selectedID && toggleFlashCard
          ? questionObj.answer
          : questionObj.question}
      </div>
    </li>
  );
}

export default App;
