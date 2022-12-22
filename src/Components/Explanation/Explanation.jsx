import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const ExplanationList = styled.span`
    display: flex;
    margin: 10px 0px 0px 50px;
    align-items: center;
`;

const ExplanationTitle = styled.p`
    font-weight: bold;
    margin: 0px 5px;
`;

const ExplanationContent = styled.p`
    margin: 0px;
`;

const ExplanationFontAwesomeIcon = styled(FontAwesomeIcon)`
    width: 10px;
    color: #C5B46B;
`;

function Explanation (props) {
    return (
        <ExplanationList>
            <ExplanationFontAwesomeIcon icon={faCheck}/>
            <ExplanationTitle>{props.title}</ExplanationTitle>
            <ExplanationContent>{props.contain}</ExplanationContent>
        </ExplanationList>
    );
}

export default Explanation;