import React from "react";
import { useNavigate } from "react-router-dom";

import Styles from "./Race.module.css";

function Race () {

    const history = useNavigate();

    const goToTrips = (e) => {
        e.preventDefault();
        history("/trips");
    };

    const goToValues = (e) => {
        e.preventDefault();
        history("/values");
    };
    
    return(
        <aside className={Styles.race_container}>
            <div className={Styles.photo_background}>
                <div className={Styles.race_title}>
                    <h2 className={Styles.title}>Un voyage qui a du sens</h2>
                    <button className={Styles.race_btn} type="button" onClick={goToValues}>Découvrir nos valeurs</button>
                </div>
            </div>
            <div className={Styles.red_background}>
                <div className={Styles.race_title}>
                    <h2 className={Styles.title}>Course ludique et sportive à l'étranger</h2>
                    <button className={Styles.race_btn} type="button" onClick={goToTrips}>Tous les voyages</button>
                </div>
            </div>
        </aside>
    );
}

export default Race;