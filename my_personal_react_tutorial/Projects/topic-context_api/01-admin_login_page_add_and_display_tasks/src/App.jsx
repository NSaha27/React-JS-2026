import "./App.css";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import { TaskContextProvider } from "./components/TaskContext";

function App() {
  return (
    <>
      <TaskContextProvider>
        <Sidebar />
        <MainContent />
      </TaskContextProvider>
    </>
  );
}

export default App;
