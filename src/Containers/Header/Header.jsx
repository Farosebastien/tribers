import Nav from "../../Components/Nav/Nav";
import Logo from "../../Images/logo.webp";
import styled from "styled-components";

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    height: 140px;
`;

const LogoImg = styled.img`
    width: 120px;
    height: 120px;
    margin: 10px 10px 10px 100px;
`

function Header () {
    return (
        <HeaderContainer>
            <LogoImg src={Logo} alt="logo Tribers"/>
            <Nav />
        </HeaderContainer>
    );
}

export default Header;