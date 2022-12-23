import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import MainPage from "./Pages/MainPage/MainPage";
import TripsPage from "./Pages/TripsPage/TripsPage";
import { TokenProvider } from "./utils/tokenContext";
import GlobalStyle from "./utils/GlobalStyle";
import Header from "./Containers/Header/Header";
import Footer from "./Containers/Footer/Footer";

const root = createRoot(document.getElementById("root"));
const app = (
  <BrowserRouter>
    <React.StrictMode>
      <TokenProvider>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/trips" element={<TripsPage />} />
        </Routes>
        <Footer />
      </TokenProvider>
    </React.StrictMode>
  </BrowserRouter>
);

root.render(app);