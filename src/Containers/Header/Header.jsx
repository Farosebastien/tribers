import Nav from "../../Components/Nav/Nav";
import Logo from "../../Images/logo.webp";
import styled from "styled-components";
import UserBar from "../../Components/UserBar/UserBar";
import { useLogin } from "../../utils/Hooks";

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LogoImg = styled.img`
    width: 150px;
    height: 150px;
    margin: 10px 10px 10px 100px;
`

function Header () {

    const { isConnected } = useLogin();


    return (
        <>
            <HeaderContainer>
                <LogoImg src={Logo} alt="logo Tribers"/>
                <Nav />
            </HeaderContainer>
            {isConnected && <UserBar />}
        </>
        
    );
}

export default Header;