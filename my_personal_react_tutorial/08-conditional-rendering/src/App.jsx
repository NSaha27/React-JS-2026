import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import DataFetcher from "./components/DataFetcher";

function App() {
  return (
    <>
      <Header />
      <Main>
        <DataFetcher />
      </Main>
      <Footer />
    </>
  );
}

export default App;
