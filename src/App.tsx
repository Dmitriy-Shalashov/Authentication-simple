import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { useAuth } from "./hooks/use-auth";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  //   const [user] = useState(null);
  const { isAuth } = useAuth();
  return (
    <div>
      <Routes>
        <Route path="/" element={isAuth ? <HomePage /> : <LoginPage />} />
        <Route
          path="/login"
          element={isAuth ? <Navigate to="/" replace /> : <LoginPage />}
        />
        <Route
          path="/register"
          element={isAuth ? <Navigate to="/" replace /> : <RegisterPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
