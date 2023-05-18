import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Course from "./pages/Course/Course";
import Courses from "./pages/Courses/Courses";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import SignIn from "./pages/SignIn/SignIn";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile.jsx";
import { useEffect, useContext } from "react";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const { isAdmin, setIsAdmin } = useContext(AuthContext);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("jwt") ? true : false);
    setIsAdmin(localStorage.getItem("isAdmin") === "true");
  });

  return (
    <>
      <Header />
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
