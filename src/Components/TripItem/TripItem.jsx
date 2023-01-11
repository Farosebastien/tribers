import styled from "styled-components";
import { PropTypes } from 'prop-types';
import colors from "../../utils/Colors";

//Création de styled-components
const TripItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px 5px 35px 5px;
`;

const TripImg = styled.img`
    width: 355px;
    height: 350px;
`;

const TripLocation = styled.p`
    align-self: flex-start;
    margin: -50px 0px 0px 10px;
    color: ${colors.white};
    font-weight: bold;
`;

const TripDuration = styled.p`
    align-self: flex-start;
    margin: 5px 0px 0px 10px;
    color: ${colors.white};
    font-weight: bold;
`;

function TripItem ({ location, duration, image }) {
    //Rendu du composant tripItem qui affiche les différents voyages disponibles dans les props venant de son parent
    return (
        <TripItemContainer>
            <TripImg alt={`${location}-${duration}`} src={image} />
            <TripLocation>{location}</TripLocation>
            <TripDuration>{duration}</TripDuration>
        </TripItemContainer>
    );
}

//Prop-types qui sont toutes obligatoire et toutes des chaînes de caractères
TripItem.propTypes = {
    location: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

//Exportation du composant
export default TripItem;