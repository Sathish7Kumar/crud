import {BrowserRouter , Routes, Route, Link} from "react-router-dom"
import './App.css'
import Home from "./CRUD/Home"
import User from "./CRUD/User"
import UserDetails from "./CRUD/UserDetails"
import Form from "./CRUD/Form"

function App() {

  return (
    <>
      <BrowserRouter>
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/user'>User</Link></li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/user" element={<User/>} />
        <Route path="/form" element={<Form/>} />
        <Route path="/user/:id" element={<UserDetails/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
