import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Contact from "../../Components/Contact/Contact";

import "./Nav.css";

function Nav () {

    const path = useLocation().pathname;

    const history = useNavigate();

    let conceptClassName = "btn";
    let valuesClassName = "btn";
    let blogClassName = "btn";
    let tripsClassName = "btn";

    const goToConcept = (e) => {
        e.preventDefault();
        history("/");
    };

    const goToValues = (e) => {
        e.preventDefault();
        history("/values");
    };

    const goToBlog = (e) => {
        e.preventDefault();
        history("/blog");
    };

    const goToTrips = (e) => {
        e.preventDefault();
        history("/trips");
    };

    if (path === "/") {
        conceptClassName += " btn_active";
    } else if (path === "/values") {
        valuesClassName += " btn_active";
    } else if (path === "/blog") {
        blogClassName += " btn_active";
    } else if (path === "/trips") {
        tripsClassName += " btn_active";
    }

    const navBar = (
        <div className="navbar">
            <button className={conceptClassName} type="button" onClick={goToConcept}>CONCEPT</button>
            <button className={valuesClassName} type="button" onClick={goToValues}>VALEURS</button>
            <button className={blogClassName} type="button" onClick={goToBlog}>JOURNAL</button>
            <button className={tripsClassName} type="button" onClick={goToTrips}>VOYAGES</button>
        </div>
    );

    return(
        <div className="nav_container">
            {navBar}
            <Contact />
        </div>
    )

}

export default Nav;