import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import MainPage from "./Pages/MainPage/MainPage";
import TripsPage from "./Pages/TripsPage/TripsPage";
import { TokenProvider } from "./utils/tokenContext";
import GlobalStyle from "./utils/GlobalStyle";
import Header from "./Containers/Header/Header";
import Footer from "./Containers/Footer/Footer";
import Values from "./Pages/ValuesPage/ValuesPage";
import Logged from "./Containers/Logged/Logged";
import Login from "./Containers/Login/Login";
import Signup from "./Containers/Signup/Signup";
import Error from "./Pages/ErrorPage/ErrorPage";

const root = createRoot(document.getElementById("root"));
const app = (
  <BrowserRouter>
      <TokenProvider>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/trips" element={<TripsPage />} />
          <Route path="/values" element={<Values />} />
          <Route path="/blog" element={<Login/>} />
          <Route path="/blog/signup" element={<Signup/>} />
          <Route path="/blog/user/:id" element={<Logged/>} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </TokenProvider>
  </BrowserRouter>
);

root.render(app);