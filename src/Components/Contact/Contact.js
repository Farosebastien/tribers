import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Styles from "./Contact.module.css";

function Contact () {
    return (
        <div className={Styles.container}>
            <FontAwesomeIcon icon={faFacebookF} className={Styles.icon}/>
            <FontAwesomeIcon icon={faInstagram} className={Styles.icon}/>
            <FontAwesomeIcon icon={faPhone} className={Styles.icon}/>
            <a href="mailto:sebastien@lacustomagency.com" title="envoi de mail" ><FontAwesomeIcon icon={faEnvelope} className={Styles.icon}/></a>
        </div>
    );
}

export default Contact;
