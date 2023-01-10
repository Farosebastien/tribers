import { keyframes } from "styled-components";

//Exportation d'un keyframes pour les icones du composant Contact
export const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(360deg) scale(1.5);
    }
    100% {
        transform: rotate(0deg) scale(1);
    }
`;

//Exportation d'un keyframes pour le grossissement des boutons au hover
export const scale = keyframes`
    from {
        transform: scale(1);
    }
    to {
        transform: scale(1.2);
    }
`;

//Exportation d'un keyframes pour le loader
export const rotateLoader = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;