
import './App.css'
import {TaskContextProvider} from './components/TaskContextProvider'
import AddTask from './components/AddTask'
import DisplayTask from './components/DisplayTask'

function App() {

  return (
    <>
      <TaskContextProvider>
        <AddTask />
        <DisplayTask />
      </TaskContextProvider>
    </>
  )
}

export default App
