import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import Contact from "../Contact/Contact";

import "./Nav.css";

const NavContainer = styled.nav`
    display: flex;
    margin-right: 50px;
`;
const NavBar = styled.div`
    margin: 10px 20px;
    line-height: 120px;
`;

const NavLink = styled(Link)`
    color: grey;
    text-decoration: none;
    margin: 0px 10px;
    font-family: 'lato';
    background-color: rgba(255, 255, 255, 0);
    cursor: pointer;
    &:hover {
        font-weight: bold;
    }
`;

function Nav () {

    const path = useLocation().pathname;

    let conceptActive ="";
    let valuesActive = "";
    let blogActive = "";
    let tripsActive = "";

    if (path === "/") {
        conceptActive = "btn_active";
    } else if (path === "/values") {
        valuesActive =  "btn_active";
    } else if (path === "/blog") {
        blogActive =  "btn_active";
    } else if (path === "/trips") {
        tripsActive =  "btn_active";
    }

    return(
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

export default Nav;