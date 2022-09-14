import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";


import Styles from "./Trip.module.css";

function Trip (props) {
    return (
        <span className={Styles.list}>
            <FontAwesomeIcon icon={faCheck} className={Styles.icon}/>
            <p className={Styles.title}>{props.title}</p>
            <p className={Styles.contain}>{props.contain}</p>
        </span>
    );
}

export default Trip;