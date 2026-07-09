import "./App.css";
import Main from "./components/Main";
import ThemeContextProvider from "./components/ThemeContextProvider";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <Main />
      </ThemeContextProvider>
    </>
  );
}

export default App;
