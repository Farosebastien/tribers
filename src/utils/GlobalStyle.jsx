import { createGlobalStyle } from "styled-components";

//Création d'un StyledGlobalStyle
const StyledGlobalStyle = createGlobalStyle`
    body {
    margin: 0;
    font-family: "lato", sans-serif;
    }
`;

function GlobalStyle () {
    //Rendu du composant GlobalStyle en utilisant le StyledGlobalStyle
    return <StyledGlobalStyle />
};

//Exportation du composant
export default GlobalStyle;