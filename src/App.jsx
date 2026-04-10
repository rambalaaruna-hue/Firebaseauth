import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "./context/AuthContext";
import "./App.css"
import PageNotFound from "./components/PageNotFound";
import ServicePage from "./pages/ServicePage";
import BookSection from "./components/BookSection";

function App() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<PageNotFound />} />

        <Route path="/" element={<SignUp />} />

        <Route path="/signin" element={!user ? <SignIn /> : <Navigate to="/home" />} />

        <Route path="/home" element={user ? <Home /> : <Navigate to="/signin" />} />

        <Route  path="/service/:type" element={user ? <ServicePage /> : <Navigate to="/signin" />} />

        <Route path="/book/:type" element={<BookSection />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
