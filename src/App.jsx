import { Route, Routes } from "react-router-dom"

import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Journal from "./pages/Journal"
import Create from "./pages/Create"
import About from "./pages/About"
import SignUp from "./pages/SignUp"

function App() {

  return (
    <div>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/journal" element={<Journal />} />
      <Route path="/create" element={<Create />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<SignUp />} />      
    </Routes>
    <Footer />
    </div>
  )
}

export default App
