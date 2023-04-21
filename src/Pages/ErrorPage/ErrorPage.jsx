import errorImage from "../../Images/404.svg";
import styled from "styled-components";
import colors from "../../utils/Colors";

//Création de styled-components
const ErrorContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px 65px 0px 65px;
`;

const ErrorImg = styled.img`
    width: 800px;
    @media (min-width: 651px) and (max-width: 850px) {
        width: 600px;
    }
    @media (max-width: 650px) {
        width: 300px;
    }
`

const ErrorTitle = styled.h1`
    color: ${colors.primary};
    font-size: 30px;
    text-align: center;
    margin: 100px 0px;
`;

function Error () {

    //Rendu du composant Error qui indique que la page demandée n'existe pas
    return (
        <ErrorContainer>
            <ErrorTitle>Oups....</ErrorTitle>
            <ErrorImg src={errorImage} alt="erreur 404" />
            <ErrorTitle>Il semblerait qu'il y ait un problème!!!!</ErrorTitle>
        </ErrorContainer>
    )
}

//Exportation du composant
export default Error;