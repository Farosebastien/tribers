import TripSection from "../../Containers/TripSection/TripSection";
import styled from "styled-components";

//Création de styled-components
const TripsPageContainer = styled.div`
    background: linear-gradient(-45deg, rgba(156, 153, 123, 0.6), white);
`;

function TripsPage () {

    //Rendu du composant TripsPage de la page voyages qui affiche le composant TripSection
    return (
        <TripsPageContainer>
            <TripSection />
        </TripsPageContainer>
    );
}

export default TripsPage;