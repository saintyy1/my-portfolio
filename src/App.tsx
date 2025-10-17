import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./Pages/Home";
import "./index.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  // ensure the <html> background/class is controlled at app root
  useEffect(() => {
    const el = document.documentElement;
    if (darkMode) el.classList.add("dark");
    else el.classList.remove("dark");
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