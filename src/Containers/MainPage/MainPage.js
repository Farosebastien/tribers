import React from "react";

import Header from "../Header/Header";
import Description from "../Description/Description";
import TripSection from "../TripSection/TripSection";
import Footer from "../Footer/Footer";

import "./MainPage.css";

function MainPage () {
    return (
        <>
            <div className="header_container">
                <Header />
            </div>
            <Description />
            <TripSection />
            <Footer />
        </>
    );
}

export default MainPage;