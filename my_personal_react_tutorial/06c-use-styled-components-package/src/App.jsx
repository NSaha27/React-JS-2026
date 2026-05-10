import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

const skills = [
  {
    heading: "HTML",
    limit: 95,
  },
  {
    heading: "CSS",
    limit: 90,
  },
  {
    heading: "JavaScript",
    limit: 90,
  },
  {
    heading: "TypeScript",
    limit: 80,
  },
  {
    heading: "React JS",
    limit: 70,
  },
  {
    heading: "Next JS",
    limit: 10,
  },
  {
    heading: "Node and Express JS",
    limit: 85,
  },
  {
    heading: "PostgreSQL",
    limit: 95,
  },
  {
    heading: "MongoDB",
    limit: 75,
  },
  {
    heading: "Git & GitHub",
    limit: 90,
  },
  {
    heading: "Docker",
    limit: 0,
  },
  {
    heading: "AWS",
    limit: 0,
  },
];

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills skills={skills} />
    </>
  );
}

export default App;
