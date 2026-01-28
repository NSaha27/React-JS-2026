import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Signup />
      </Main>
    </>
  );
}

export default App;
