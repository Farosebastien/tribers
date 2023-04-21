import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import Contact from "../Contact/Contact";
import colors from "../../utils/Colors";

import "./Nav.css";

//Création de styled-components
const NavContainer = styled.nav`
    display: flex;
    margin-right: 50px;
    @media (min-width: 701px) and (max-width: 1100px) {
        margin: 0px;
    }
    @media(max-width: 700px) {
        flex-direction: column;
        margin: 0px;
    }
`;
const NavBar = styled.div`
    margin: 10px 20px;
    line-height: 120px;
    @media(max-width: 700px) {
        margin: 0px;
    }
`;

const NavLink = styled(Link)`
    color: ${colors.grey};
    text-decoration: none;
    margin: 0px 10px;
    font-family: 'lato';
    background-color: ${colors.whiteBackground};
    cursor: pointer;
    &:hover {
        font-weight: bold;
    }
    @media(max-width: 360px) {
        margin: 2px;
    }
`;

function Nav () {

    //Récupération de la localisation actuelle de l'utilisateur dans l'application
    const path = useLocation().pathname;

    //Initialisation des variables correspondant à chaque page
    let conceptActive ="";
    let valuesActive = "";
    let blogActive = "";
    let tripsActive = "";

    //Si on est à la racine
    if (path === "/") {
        //Activation de la bordure sous le bouton concept
        conceptActive = "btn_active";
    //Si on est sur valeurs
    } else if (path === "/values") {
        //Activation de la bordure sous le bouton valeurs
        valuesActive =  "btn_active";
    //Si on est sur blog
    } else if (path === "/blog") {
        //Activation de la bordure sous le bouton blog
        blogActive =  "btn_active";
    //Si on est sur voyages
    } else if (path === "/trips") {
        //Activation de la bordure sous le bouton voyages
        tripsActive =  "btn_active";
    }

    return(
        //Rendu du composant nav qui affiche les liens de navigations de chaque page de l'application ainsi qu'une bordure sous le lien de la page actuelle et le composant Contact
        <NavContainer>
            <NavBar>
                <NavLink className={conceptActive} to="/">CONCEPT</NavLink>
                <NavLink className={valuesActive} to="/values">VALEURS</NavLink>
                <NavLink className={blogActive} to="/blog">BLOG</NavLink>
                <NavLink className={tripsActive} to="/trips">VOYAGES</NavLink>
            </NavBar>
            <Contact />
        </NavContainer>
    )

}

//Exportation du composant
export default Nav;