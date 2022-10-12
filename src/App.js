import React from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "./Containers/MainPage/MainPage";
import TripsPage from "./Containers/TripsPage/TripsPage";

import "./App.css";

function App() {

  const routes = (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/trips" element={<TripsPage />} />
    </Routes>
  )

  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
