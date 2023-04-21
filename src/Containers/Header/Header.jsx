import Nav from "../../Components/Nav/Nav";
import Logo from "../../Images/logo.webp";
import styled from "styled-components";
import UserBar from "../../Components/UserBar/UserBar";
import { useLogin } from "../../utils/Hooks";

//Création de styled-components
const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width: 1100px) {
        flex-direction: column;
    }
`;

const LogoImg = styled.img`
    width: 150px;
    height: 150px;
    margin: 10px 10px 10px 100px;
    @media(max-width: 1100px) {
        margin: 10px;
    }
`;

function Header () {

    
    //Récupération du booléen isConnected
    const { isConnected } = useLogin();


    //Rendu du composant header qui affiche le logo, le composant Nav et si l'utilisateur est connecté, sa UserBar
    return (
        <>
            <HeaderContainer>
                <LogoImg src={Logo} alt="logo Tribers"/>
                <Nav />
            </HeaderContainer>
            {isConnected && <UserBar />}
        </>
    )
}

//Exportation du composant
export default Header;