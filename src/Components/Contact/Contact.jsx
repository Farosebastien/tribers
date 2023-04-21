import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { rotate } from "../../utils/keyframes";
import colors from "../../utils/Colors";

//Création de styled-components
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    padding: 10px;
    margin: 0px 5px;
    cursor: pointer;
    color: ${colors.primary};
    &:hover {
        animation: ${rotate} 1000ms ease-in-out;
    }
`;

const ContactContainer = styled.div`
display: flex;
    margin: 50px 20px 0px 20px;
    @media(max-width: 700px) {
        margin: 20px;
        justify-content: center;
    }
`;



function Contact () {
    //Rendu du composant contact qui affiche les icones réseaux sociaux, téléphone et mail dans le header et le footer
    return (
        <ContactContainer>
            <StyledFontAwesomeIcon icon={faFacebookF}/>
            <StyledFontAwesomeIcon icon={faInstagram}/>
            <StyledFontAwesomeIcon icon={faPhone}/>
            <a href="mailto:sebastien@lacustomagency.com" title="envoi de mail" ><StyledFontAwesomeIcon icon={faEnvelope}/></a>
        </ContactContainer>
    );
}

//Exportation du composant
export default Contact;
