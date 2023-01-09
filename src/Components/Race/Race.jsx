import { Link } from "react-router-dom";
import background_trip from "../../Images/background_trip.webp"
import styled from "styled-components";
import { scale } from "../../utils/keyframes";

//Création de styled-components
const RaceContainer = styled.aside`
    width: 50%;
    height: 555px;
    display: flex;
    flex-direction: row;
    background-image: url(${background_trip});
    background-position: center ;
    background-size: cover;
    margin-top: -5px;
`;

const RaceRed = styled.div`
    width: 50%;
    background-color: rgba(165, 40, 40, 0.8);
`;

const RacePhoto = styled.div`
    width: 50%;
`;

const RaceTitleContainer = styled.div`
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
`;

const RaceTitle = styled.h2`
    text-align: left;
    color: white;
    margin-left: 20px;
    width: 220px;
    font-size: 30px;
`;

const RaceLink = styled(Link)`
    text-decoration: none;
    border: none;
    border-bottom: 2px solid #C5B46B;
    background-color: rgba( 255, 255, 255, 0);
    margin-left: 20px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    font-weight: bold;
    &:hover {
        animation: ${scale} 300ms both ease-in-out;
    }
`

function Race () {
    //Rendu du composant race qui affiche un aside sur la page d'accueil
    return(
        <RaceContainer>
            <RacePhoto>
                <RaceTitleContainer>
                    <RaceTitle>Un voyage qui a du sens</RaceTitle>
                    <RaceLink to={"/values"}>Découvrir nos valeurs</RaceLink>
                </RaceTitleContainer>
            </RacePhoto>
            <RaceRed>
                <RaceTitleContainer>
                    <RaceTitle>Course ludique et sportive à l'étranger</RaceTitle>
                    <RaceLink to={"/trips"}>Tous les voyages</RaceLink>
                </RaceTitleContainer>
            </RaceRed>
        </RaceContainer>
    );
}

//Exportation du composant
export default Race;