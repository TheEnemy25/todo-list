import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./page/todo-main-page/MainPage";
import DetailPage from "./page/todo-details-page/DetailPage";

function App() {
  return (
    <div className="text-white">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/todos/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
