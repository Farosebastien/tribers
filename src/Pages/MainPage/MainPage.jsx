import Description from "../../Containers/Description/Description";
import TripSection from "../../Containers/TripSection/TripSection";
import styled from "styled-components";
import background from "../../Images/background.webp";

//Création de styled-components
const MainPageContainer = styled.div`
    margin: 0px;
`;

const MainPageImg = styled.img`
    width: 100%;
    margin: 0px;
`;

function MainPage () {

    //Rendu du composant MainPage qui affiche la page d'accueil du site avec les composants Description et TripSection
    return (
        <MainPageContainer>
            <MainPageImg src={background} alt="image de voyageurs" />
            <Description  />
            <TripSection />
        </MainPageContainer>
    );
}

//Exportation du composant
export default MainPage;