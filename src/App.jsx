import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Course from "./pages/Course/Course"
import Courses from "./pages/Courses/Courses"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"

function App() {

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course" element={<Course />} />
        </Routes>
      </Main>
    </>
  )
}

export default App
