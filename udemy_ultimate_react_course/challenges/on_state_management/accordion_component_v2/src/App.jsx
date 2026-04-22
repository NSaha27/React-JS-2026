import "./App.css";
import Accordion from "./components/Accordion";

const topics = [
  {
    title:
      "Why does India always face criticism despite not involving in any war worldwide?",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident cumque modi, dolore, soluta ipsum tempore consequuntur eius repellendus vel, repellat consequatur mollitia quibusdam? Corrupti quaerat voluptatibus consequuntur cum totam similique, impedit autem, delectus iste mollitia molestias exercitationem ut, quibusdam dolore illum? Quos autem soluta quia culpa illo quibusdam incidunt deserunt!",
  },
  {
    title:
      "What should be India's political stance to try to establish peace worldwide?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis impedit dolore eum illo magni et debitis, laborum reiciendis, voluptates ipsa fugit, laboriosam a rem ad. Temporibus odit nesciunt possimus natus dolorem, eaque esse eligendi dicta fuga reiciendis voluptatum, deserunt fugit.",
  },
  {
    title:
      "How will India overcome the worldwide shortage of natural oil and gas?",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, debitis distinctio cupiditate soluta enim a adipisci eum facilis nihil reiciendis itaque deserunt labore expedita tenetur minima! Ea eius itaque, nostrum doloribus, vel error quisquam fugit labore porro, distinctio aut. Aliquam tempora natus modi consequatur impedit facere nulla laborum, doloremque nobis! Doloribus culpa quisquam voluptas consequatur debitis magnam iure, recusandae aperiam.",
  },
];

function App() {
  return (
    <div className="flex flex-column justify-center min-vh-100 p-12">
      <Accordion topics={topics} />
    </div>
  );
}

export default App;
