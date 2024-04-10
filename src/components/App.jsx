import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

function App() {

  return (
    <div>
      <h1>Welcome to routing exercise</h1>
      <Outlet />
      <Navbar />
    </div>
  )
}

export default App
