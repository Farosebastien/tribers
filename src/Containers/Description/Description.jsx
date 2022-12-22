import Trips from "../../Components/Explanations/Explanations";
import Race from "../../Components/Race/Race";
import styled from "styled-components";

const DescriptionContainer = styled.section`
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