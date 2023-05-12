import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Course from "./pages/Course/Course";
import Courses from "./pages/Courses/Courses";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import SignIn from "./pages/SignIn/SignIn";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile.jsx";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<Course />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
