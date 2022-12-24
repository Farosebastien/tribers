import NonActiveImage from "../../Images/non_active.webp";
import styled from "styled-components";

    const SignupContainer = styled.div`
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
        font-size: 30px;
        text-align: center;
        margin: 100px 0px;
    `;

function Signup () {

    return (
        <SignupContainer>
            <SignupTitle>Oups....</SignupTitle>
            <SignupImg src={NonActiveImage} alt="désolé" />
            <SignupTitle>Cette fonctionnalité n'est pas disponible, ceci est un site fictif!!!!</SignupTitle>
        </SignupContainer>
    )
}

export default Signup;