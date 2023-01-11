import styled from "styled-components";
import { rotateLoader } from "./keyframes";
import colors from "./Colors";

//Exportation d'un loader avec application de son keyframes
export const Loader = styled.div`
    padding: 10px;
    border: 6px solid ${colors.primary};
    border-bottom-color: transparent;
    border-radius: 22px;
    animation: ${rotateLoader} 1s infinite linear;
    height: 0;
    width: 0;
`;