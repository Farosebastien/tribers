import Trips from "../Explanations/Explanations";
import Race from "../../Components/Race/Race";
import styled from "styled-components";

//Création de styled-components
const DescriptionContainer = styled.section`
    margin-top: -300px;
    display: flex;
`;

function Description () {
    //Rendu du composant Description qui affiche une section comportant les composant Trips et Race
    return (
        <DescriptionContainer>
            <Trips />
            <Race />
        </DescriptionContainer>
    );
}

//Exportation du composant
export default Description;