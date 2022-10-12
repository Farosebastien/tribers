import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVuejs } from "@fortawesome/free-brands-svg-icons";

import TripItem from "../../Components/TripItem/TripItem";

import Maroc5 from "../../Images/maroc5.webp";
import Maroc10 from "../../Images/maroc10.webp";
import Greece from "../../Images/greece.webp";
import CostaRica from "../../Images/costa_rica.webp";

import Styles from "./TripSection.module.css";

function TripSection () {

    const history = useNavigate();

    const goToTrips = (e) => {
        e.preventDefault();
        history("/trips");
    };

    const items = [
        {
            location: "MAROC",
            duration: "Formule 5 jours",
            image: Maroc5
        },
        {
            location: "COSTA RICA",
            duration: "Formule 10 jours",
            image: CostaRica
        },
        {
            location: "GRECE",
            duration: "Formule 10 jours",
            image: Greece
        },
        {
            location: "MAROC",
            duration: "Formule 10 jours",
            image: Maroc10
        }
    ];

    return (
        <section className={Styles.trip_container}>
            <FontAwesomeIcon icon={faVuejs} className={Styles.icon}/>
            <h2 className={Styles.title}>Nos voyages</h2>
            <h3 className={Styles.title_suite}>clés en main</h3>
            <div className={Styles.trip_section}>
                {items.map((item, index) => (
                    <TripItem key={`${item.location}-${index}`} location={item.location} duration={item.duration} image={item.image} />
                ))}
            </div>
            <button className={Styles.trip_btn} type="button" onClick={goToTrips}>Tous les voyages</button>
        </section>
    )

}

export default TripSection;