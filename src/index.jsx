import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { TokenProvider } from "./utils/tokenContext";
import { LoginProvider } from "./utils/loginContext";
import Routing from "./Routes";
import GlobalStyle from "./utils/GlobalStyle";
import Header from "./Containers/Header/Header";
import Footer from "./Containers/Footer/Footer";

const root = createRoot(document.getElementById("root"));
const app = (
  <BrowserRouter>
      <TokenProvider>
        <LoginProvider>
          <GlobalStyle />
          <Header />
          <Routing />
          <Footer />
        </LoginProvider>  
      </TokenProvider>
  </BrowserRouter>
);

root.render(app);