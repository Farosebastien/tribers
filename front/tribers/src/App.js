import React from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "./Containers/MainPage/MainPage";

import "./App.css";

function App() {

  const routes = (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  )

  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
