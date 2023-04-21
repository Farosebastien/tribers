import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import colors from "../../utils/Colors";

//Création de styled-components
const ExplanationList = styled.span`
    display: flex;
    margin: 10px 0px 0px 50px;
    align-items: center;
    @media (max-width: 1050px) {
        text-align: center;
        margin: 10px 20px 0px 20px;
    }
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
    color: ${colors.primary};
`;

function Explanation (props) {
    //Rendu du composant Explanation qui met en forme les props qui lui sont passées par son parent
    return (
        <ExplanationList>
            <ExplanationFontAwesomeIcon icon={faCheck}/>
            <ExplanationTitle>{props.title}</ExplanationTitle>
            <ExplanationContent>{props.contain}</ExplanationContent>
        </ExplanationList>
    );
}

//Exportation du composant
export default Explanation;