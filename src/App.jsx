import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Course from "./pages/Course/Course";
import Courses from "./pages/Courses/Courses";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import SignIn from "./pages/SignIn/SignIn";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile.jsx";
import { useState, useEffect } from "react";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("jwt") ? true : false);
    setIsAdmin(localStorage.getItem("isAdmin") === "true");
  });

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
      />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<Course />} />
          <Route
            path="/sign-in"
            element={
              <ProtectedRoute user={!isLoggedIn}>
                <SignIn setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <ProtectedRoute user={!isLoggedIn}>
                <Register />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute user={isAdmin}>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
