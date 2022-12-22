import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVuejs } from "@fortawesome/free-brands-svg-icons";
import TripItem from "../../Components/TripItem/TripItem";
import TripPageItem from "../../Components/TripPageItem/TripPageItem";
import Maroc5 from "../../Images/maroc5.webp";
import Maroc10 from "../../Images/maroc10.webp";
import Greece from "../../Images/greece.webp";
import CostaRica from "../../Images/costa_rica.webp";

const TripContainer = styled.section`
    display: flex;
    flex-direction: column;
    background-color: rgba(197, 180, 107, 0.3);
`;

const TripFontAwesomeIcon = styled(FontAwesomeIcon)`
    align-self: flex-start;
    margin: 30px 0px 20px 30px;
    width: 120px;
    height: 150px;
    color: rgba(197, 180, 107, 0.5);
`;

const TripTitle = styled.h2`
    color: #C5B46B;
    align-self: flex-start;
    margin: -150px 0px 20px 50px;
    font-size: 30px;
    font-weight: bold;
`;

const TripTitleSuite = styled.h3`
    color: #C5B46B;
    align-self: flex-start;
    margin: -20px 0px 20px 50px;
    font-size: 24px;
    font-weight: bold;
`;

const TripsSection = styled.div`
    margin: 35px 0px 0px 0px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
`;

const TripBtn = styled(Link)`
    text-decoration: none;
    align-self: center;
    margin: 10px 0px 60px 0px;
    border: none;
    color: black;
    border-bottom: 2px solid #C5B46B;
    background-color: rgba(255, 255, 255, 0);
    font-size: 16px;
    cursor: pointer;
    &:hover {
        font-weight: bold;
    }
`;

function TripSection () {

    const path = useLocation().pathname;

    const items = [
        {
            location: "MAROC",
            gps: "31.6258257,-7.9891608",
            duration: "Formule 5 jours",
            image: Maroc5
        },
        {
            location: "COSTA RICA",
            gps: "9.9325427,-84.0795782",
            duration: "Formule 10 jours",
            image: CostaRica
        },
        {
            location: "GRECE",
            gps: "37.9839412,23.7283052",
            duration: "Formule 10 jours",
            image: Greece
        },
        {
            location: "MAROC",
            gps: "31.6258257,-7.9891608",
            duration: "Formule 10 jours",
            image: Maroc10
        }
    ];

    if (path === "/") {
        return (
            <TripContainer>
                <TripFontAwesomeIcon icon={faVuejs} />
                <TripTitle>Nos voyages</TripTitle>
                <TripTitleSuite>clés en main</TripTitleSuite>
                <TripsSection>
                    {items.map((item, index) => (
                        <TripItem key={`${item.location}-${index}`} location={item.location} duration={item.duration} image={item.image} />
                    ))}
                </TripsSection>
                <TripBtn to="/trips">Tous les voyages</TripBtn>
            </TripContainer>
        )
    } else if (path === "/trips") {
        return (
            <>
                {items.map((item, index) => (
                    <TripPageItem key={`${item.location}-${index}`} location={item.location} duration={item.duration} image={item.image} gps={item.gps} />
                ))}
            </>  
        )
    }
}

export default TripSection;