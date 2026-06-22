import UserContextProvider from './components/user/UserContextProvider'
import './App.css'

function App() {
  const user = {
    username: "NILADRISAHA",
    name: "Niladri Saha",
    gender: "M",
    dob: "1992-07-11",
    address: "Liluah, Howrah, WB, 711203",
    phone: "+918420530244",
    email: "niladri.saha31@example.com"
  }

  return (
    <>
      <UserContextProvider user={user} />
    </>
  )
}

export default App
