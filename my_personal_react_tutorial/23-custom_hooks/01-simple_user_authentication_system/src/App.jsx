import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Registration from "./components/Registration";
import UserContextProvider from "./components/UserContextProvider";

function App() {
  return (
    <>
      <UserContextProvider>
        <Router>
          <Routes>
            <Route path="/registration" element={<Registration />} />
            <Route path="/" element={<Login />} />
            <Route path="/user-home" element={<Home />} />
          </Routes>
        </Router>
      </UserContextProvider>
    </>
  );
}

export default App;
