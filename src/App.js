import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import PlantList from "./PlantList"; // หรือหน้า home ที่ต้องการ

function App() {
  return (
    <Router>
      <div className="App">
        <h1>ร้านขายต้นไม้</h1>
        <Routes>
          <Route path="/" element={<Login />} /> {/* หน้า login */}
          <Route path="/login" element={<Login />} /> {/* หน้า login */}
          <Route path="/register" element={<Register />} /> {/* หน้า register */}
          <Route path="/home" element={<PlantList />} /> {/* หน้า home */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
