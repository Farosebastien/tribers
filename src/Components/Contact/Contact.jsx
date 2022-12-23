import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { rotate } from "../../utils/keyframes";

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    padding: 10px;
    margin: 0px 5px;
    cursor: pointer;
    color: #c5b56b;
    &:hover {
        animation: ${rotate} 1000ms ease-in-out;
    }
`;

const ContactContainer = styled.div`
    margin: 50px 20px 0px 20px;
`;



function Contact () {
    return (
        <ContactContainer>
            <StyledFontAwesomeIcon icon={faFacebookF}/>
            <StyledFontAwesomeIcon icon={faInstagram}/>
            <StyledFontAwesomeIcon icon={faPhone}/>
            <a href="mailto:sebastien@lacustomagency.com" title="envoi de mail" ><StyledFontAwesomeIcon icon={faEnvelope}/></a>
        </ContactContainer>
    );
}

export default Contact;
