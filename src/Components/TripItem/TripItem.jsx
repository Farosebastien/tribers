import styled from "styled-components";
import { PropTypes } from 'prop-types';

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
    color: white;
    font-weight: bold;
`;

const TripDuration = styled.p`
    align-self: flex-start;
    margin: 5px 0px 0px 10px;
    color: white;
    font-weight: bold;
`;

function TripItem ({ location, duration, image }) {
    return (
        <TripItemContainer>
            <TripImg alt={`${location}-${duration}`} src={image} />
            <TripLocation>{location}</TripLocation>
            <TripDuration>{duration}</TripDuration>
        </TripItemContainer>
    );
}

TripItem.propTypes = {
    location: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export default TripItem;