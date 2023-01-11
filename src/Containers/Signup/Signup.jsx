import NonActiveImage from "../../Images/non_active.webp";
import styled from "styled-components";
import colors from "../../utils/Colors";

//Création de styled-components
    const SignupContainer = styled.section`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 50px 65px 0px 65px;
    `;

    const SignupImg = styled.img`
        width: 800px;
    `

    const SignupTitle = styled.h1`
        color: ${colors.primary};
        font-size: 30px;
        text-align: center;
        margin: 100px 0px;
    `;

function Signup () {

    //Rendu du composant Signup qui explique que cette fonctionnalité n'est pas disponible sur ce site fictif
    return (
        <SignupContainer>
            <SignupTitle>Oups....</SignupTitle>
            <SignupImg src={NonActiveImage} alt="désolé" />
            <SignupTitle>Cette fonctionnalité n'est pas disponible, ceci est un site fictif!!!!</SignupTitle>
        </SignupContainer>
    )
}

//Exportation du composant
export default Signup;