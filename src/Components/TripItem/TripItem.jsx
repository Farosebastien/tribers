import styled from "styled-components";

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

function TripItem (props) {
    return (
        <TripItemContainer>
            <TripImg alt={`${props.location}-${props.duration}`} src={props.image} />
            <TripLocation>{props.location}</TripLocation>
            <TripDuration>{props.duration}</TripDuration>
        </TripItemContainer>
    );
}

export default TripItem;