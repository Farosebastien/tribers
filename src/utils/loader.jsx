import styled from "styled-components";
import { rotateLoader } from "./keyframes";

export const Loader = styled.div`
    padding: 10px;
    border: 6px solid #C5B46B;
    border-bottom-color: transparent;
    border-radius: 22px;
    animation: ${rotateLoader} 1s infinite linear;
    height: 0;
    width: 0;
`;