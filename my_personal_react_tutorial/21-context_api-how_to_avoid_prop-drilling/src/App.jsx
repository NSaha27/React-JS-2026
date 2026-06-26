// import UserContextProvider from './components/user/UserContextProvider'
import "./App.css";
import Tasks from "./components/todo/Tasks";
import TodoContextProvider from "./components/todo/TodoContextProvider";

function App() {
  // const user = {
  //   username: "NILADRISAHA",
  //   name: "Niladri Saha",
  //   gender: "M",
  //   dob: "1992-07-11",
  //   address: "Liluah, Howrah, WB, 711203",
  //   phone: "+918420530244",
  //   email: "niladri.saha31@example.com"
  // }

  return (
    <>
      {/* <UserContextProvider user={user} /> */}
      <TodoContextProvider>
        <Tasks />
      </TodoContextProvider>
    </>
  );
}

export default App;
