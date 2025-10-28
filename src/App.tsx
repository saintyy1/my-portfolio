import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./Pages/Home";
import "./index.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  // ensure the <html> and <body> background/class is controlled at app root
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    if (darkMode) {
      html.classList.add("dark");
      body.classList.add("dark");
      body.style.backgroundColor = "#0f172a";
    } else {
      html.classList.remove("dark");
      body.classList.remove("dark");
      body.style.backgroundColor = "#ffffff";
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;