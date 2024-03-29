import { Link } from "react-router-dom";
import { scale } from "../../utils/keyframes";
import styled from "styled-components";
import Contact from "../../Components/Contact/Contact";
import logo from "../../Images/logo.webp";
import colors from "../../utils/Colors";

//Création de styled-components
const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: ${colors.footerBackground};
    justify-content: space-around;
    @media(max-width: 700px) {
        flex-direction: column;
    }
`;

const FooterExplanations = styled.aside`
    max-width: 600px;
    height: 200px;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-self: center;
    @media(max-width: 700px) {
        width: 80%;
    }
`;

const FooterTitle = styled.h2`
    margin: 0px 20px;
    color: ${colors.white};
    font-size: 18px;
    justify-content: center;
    @media(max-width: 1000px) {
        align-self: center;
    }
`;

const FooterDescription = styled.p`
    max-width: 400px;
    margin: 0px 20px;
    font-size: 14px;
    align-self: center;
    color: ${colors.white};
`;

const FooterBtn = styled(Link)`
    text-decoration: none;
    text-align: center;
    align-self: flex-end;
    width: 160px;
    border: none;
    border-bottom: 2px solid ${colors.primary};
    background-color: ${colors.whiteBackground};
    margin: 0px 20px;
    color: ${colors.white};
    font-size: 14px;
    cursor: pointer;
    font-weight: bold;
    &:hover {
        animation: ${scale} 500ms both ease-in-out;
    }
    @media (max-width: 1000px) {
        align-self: center;
    }
`;

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-bottom: 20px;
    @media(max-width: 700px) {
        width: 90%;
        align-self: center;
    }
`;

const ContactProductor = styled.a`
    font-size: 14px;
    margin: 10px;
    align-self: center;
    height: 25px;
    max-width: 200px;
    text-decoration: none;
    border-bottom: 2px solid ${colors.primary};
    color: ${colors.white};
    font-weight: bold;
    &:hover {
        animation: ${scale} 500ms both ease-in-out;
    }
`;

const ContactLogo = styled.img`
    margin: 10px;
    align-self: center;
    width: 80px;
    height: 80px;
`;

function Footer () {

    //Rendu du composant Footer
    return (
        <FooterContainer>
            <FooterExplanations>
                <FooterTitle>La communauté Tribers</FooterTitle>
                <FooterDescription>Inscrivez vous sur notre blog pour connaitre les dernières news et profiter de notre communautée de Tribers !!</FooterDescription>
                <FooterBtn to="/blog">Découvrir le blog</FooterBtn>
            </FooterExplanations>
            <ContactContainer>
                <ContactLogo src={logo} alt="logo Tribers"/>
                <ContactProductor href="https://www.lacustomagency.com">La Custom Agency - 2023</ContactProductor>
                < Contact />
            </ContactContainer>
            <FooterExplanations>
                <FooterTitle>Pourquoi voyager avec Tribers</FooterTitle>
                <FooterDescription>Notre manière de réinventer le voyage solidaire </FooterDescription>
                <FooterBtn to="/values">Découvrir nos valeurs</FooterBtn>
            </FooterExplanations>
        </FooterContainer>
    )
}

//Exportation du comosant
export default Footer;