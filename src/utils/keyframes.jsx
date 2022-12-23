import { keyframes } from "styled-components";

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

export const scale = keyframes`
    from {
        transform: scale(1);
    }
    to {
        transform: scale(1.2);
    }
`;

export const rotateLoader = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;