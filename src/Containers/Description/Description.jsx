import Trips from "../Explanations/Explanations";
import Race from "../../Components/Race/Race";
import styled from "styled-components";

//Création de styled-components
const DescriptionContainer = styled.section`
    margin-top: -300px;
    display: flex;
    @media (min-width: 1051px) and (max-width: 1200px) {
        margin-top: -100px;
    }
    @media (max-width: 1050px){
        flex-direction: column;
        margin-top: 0px;
    }
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