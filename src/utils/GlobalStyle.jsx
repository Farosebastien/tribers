import { createGlobalStyle } from "styled-components";

const StyledGlobalStyle = createGlobalStyle`
    body {
    margin: 0;
    font-family: "lato", sans-serif;
    }
`;

function GlobalStyle () {
    return <StyledGlobalStyle />
};

export default GlobalStyle;