import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SavedInstituteForm from "./components/SavedInstituteForm";
import InstituteForm from "./components/InstituteForm";
import './App.css';
import { useState } from "react";

const App = () => {
  const [savedData, setSavedData] = useState(
    JSON.parse(localStorage.getItem("instituteData")) || null
  );

  return (
    <>
      <BrowserRouter>
        <nav className="Navbar">
          <Link className="Link" to="/">FORM</Link>
          <Link className="Link" to="/saved">SAVED DATA</Link>
        </nav>

        <Routes>
          <Route path="/" element={<InstituteForm onSave={setSavedData} />} />
          <Route path="/saved" element={<SavedInstituteForm data={savedData} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

