import React from "react";

import Styles from "./TripItem.module.css";

function TripItem (props) {
    return (
        <div className={Styles.trip_item}>
            <img className={Styles.img} alt={`${props.location}-${props.duration}`} src={props.image} />
            <p className={Styles.trip_location}>{props.location}</p>
            <p className={Styles.trip_duration}>{props.duration}</p>
        </div>
    );
}

export default TripItem;