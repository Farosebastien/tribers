import React from "react";
import { useNavigate } from "react-router-dom";

import Explanation from "../Explanation/Explanation";

import Styles from "./Explanations.module.css";

function Explanations () {
    
    const history = useNavigate();

    const goToTrips = (e) => {
        e.preventDefault();
        history("/trips");
    };

    const lists = [
        {
            title: "Participez",
            contain: "à une course ludique et sportive à l'étranger"
        },
        {
            title: "Séjournez",
            contain: "chez l'habitant pour un voyage en immersion"
        },
        {
            title: "Voyagez",
            contain: "clé en main : logistique et sécurité verrouillées dans l'offre"
        }
    ];

    return (
        <aside className={Styles.trip_container}>
            <p className={Styles.name}>TRIBERS</p>
            <h1 className={Styles.title}>La promesse d'une aventure !</h1>
            <p className={Styles.explanations}>Partez à la découverte d'un pays, au plus proche de ses coutumes et de ses habitants.</p>
            <p className={Styles.explanations}>Au rythme de défis à la fois sportifs, logiques et ludiques, prenez part à une compétition inédite qui vous fera voyager différemment et vous permettra de réaliser une action solidaire !</p>
            {lists.map((item, index) => (
                <Explanation key={`${item.title}-${index}`} title={item.title} contain={item.contain} />
            ))}
            <button className={Styles.btn} type="button" onClick={goToTrips}>Je découvre les voyages</button>
        </aside>
    );
}

export default Explanations;