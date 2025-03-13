import { React, lazy, Suspense, useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Loader from "./Components/Layout/Loader";
import Footer from "./Components/Layout/Footer/Footer";
// const Chatbot = lazy(() => import("./Components/Layout/Chatbox/Chatbox.jsx"));
const Navbar = lazy(() => import("./Components/Layout/Navbar/Navbar.jsx"));
const Chatbox = lazy(() => import("./Components/Layout/Chatbox/Chatbox.jsx"));
const Home = lazy(() => import("./Components/Pages/Home/Home.jsx"));
const About = lazy(() => import("./Components/Pages/About/About.jsx"));
const Projects = lazy(() => import("./Components/Pages/Projects/Projects.jsx"));

const App = () => {
  return (
    <Router>
      <MainContent />
    </Router>
  );
};
const MainContent = () => {
  const [showLoader, setShowLoader] = useState(true);
  const location = useLocation();
  const isFirstLoad = useRef(true); // Track if it's the first load

  useEffect(() => {
    let duration = isFirstLoad.current ? 1000 : 500; // 10s for first load, 3s for route change

    setShowLoader(true);
    const timer = setTimeout(() => {
      setShowLoader(false);
      isFirstLoad.current = false; // After first load, set it to false
    }, duration);

    return () => clearTimeout(timer);
  }, [location.pathname]);
  return showLoader ? (
    <Loader />
  ) : (
    <Suspense fallback={null}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Suspense>
  );
};

export default App;
