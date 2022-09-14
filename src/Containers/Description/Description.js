import React from "react";
import Trips from "../../Components/Trips/Trips";
import Race from "../../Components/Race/Race";

import Styles from "./Description.module.css";

function Description () {

    return (
        <section className={Styles.description_container}>
            <Trips />
            <Race />
        </section>
    );
}

export default Description;