import React from "react";

import Nav from "../../Components/Nav/Nav";

import Logo from "../../Images/logo.webp";

import Styles from "./Header.module.css";

function Header () {
    return (
        <header className={Styles.container}>
            <img className={Styles.logo} src={Logo} alt="logo Tribers"/>
            <Nav />
        </header>
    );
}

export default Header;