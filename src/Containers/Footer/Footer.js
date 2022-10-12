import React from "react";
import { useNavigate } from "react-router-dom";

import Contact from "../../Components/Contact/Contact";
import logo from "../../Images/logo.webp"

import Styles from "./Footer.module.css";

function Footer () {

    const history = useNavigate();

    const goToBlog = (e) => {
        e.preventDefault();
        history("/blog");
    };

    const goToValues = (e) => {
        e.preventDefault();
        history("/values");
    };

    return (
        <section className={Styles.footer_container}>
            <aside className={Styles.explanations}>
                <h2 className={Styles.title}>La communauté Tribers</h2>
                <p className={Styles.description}>Inscrivez vous sur notre blog pour connaitre les dernières news et profiter de notre communautée de Tribers !!</p>
                <button className={Styles.btn} type="button" onClick={goToBlog}>Découvrir le blog</button>
            </aside>
            <div className={Styles.contact_container}>
                <img className={Styles.logo} src={logo} alt="logo Tribers"/>
                <a className={Styles.productor} href="www.lacustomagency.com">La Custom Agency - 2022</a>
                < Contact />
            </div>
            <aside className={Styles.explanations}>
                <h2 className={Styles.title}>Pourquoi voyager avec Tribers</h2>
                <p className={Styles.description}>Notre manière de réinventer le voyage solidaire </p>
                <button className={Styles.btn} type="button" onClick={goToValues}>Découvrir nos valeurs</button>
            </aside>
        </section>
    )
}

export default Footer;