import Trips from "../Explanations/Explanations";
import Race from "../../Components/Race/Race";
import styled from "styled-components";

const DescriptionContainer = styled.section`
    margin-top: -300px;
    display: flex;
`;

function Description () {

    return (
        <DescriptionContainer>
            <Trips />
            <Race />
        </DescriptionContainer>
    );
}

export default Description;