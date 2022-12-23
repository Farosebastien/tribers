import Description from "../../Containers/Description/Description";
import TripSection from "../../Containers/TripSection/TripSection";
import styled from "styled-components";
import background from "../../Images/background.webp";

const MainPageContainer = styled.div`
    margin: 0px;
`;

const MainPageImg = styled.img`
    width: 100%;
    margin: 0px;
`;

function MainPage () {

    return (
        <MainPageContainer>
            <MainPageImg src={background} alt="image de voyageurs" />
            <Description  />
            <TripSection />
        </MainPageContainer>
    );
}

export default MainPage;