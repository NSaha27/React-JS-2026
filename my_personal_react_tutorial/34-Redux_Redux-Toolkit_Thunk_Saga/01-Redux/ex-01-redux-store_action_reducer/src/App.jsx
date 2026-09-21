import { BrowserRouter, Routes, Route } from "react-router";
import Welcome from "./components/Welcome";
import DisplayTasks from "./components/DisplayTasks";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-12">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/display-tasks" element={<DisplayTasks />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/edit-task" element={<EditTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
