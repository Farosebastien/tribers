import TripSection from "../../Containers/TripSection/TripSection";
import styled from "styled-components";
import colors from "../../utils/Colors";

//Création de styled-components
const TripsPageContainer = styled.div`
    background: linear-gradient(-45deg, ${colors.tripsBackground}, ${colors.white});
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