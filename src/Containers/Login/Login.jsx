import Background from "../../Images/background_trip.webp";
import Logo from "../../Images/logo.webp";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { scale } from "../../utils/keyframes";
import { useState, useEffect } from "react";
import { Loader } from "../../utils/loader";
import { useLogin } from "../../utils/Hooks";

const LoginBackground = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
    background: rgb(0, 0, 0) url(${Background}) center no-repeat;
    background-size: cover;
    resize: both;
`;

const BackgroundBlur = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 170px;
    background: rgba(0, 0, 0, 0.3);
    -webkit-backdrop-filter: blur(3px);
    backdrop-filter: blur(4px);
    height: 90vh;
`;

const BlogTitle = styled.h1`
    z-index: 1;
    color: white;
    font-size: 30px;
    margin-bottom: 50px;
`;

const BlogLogo = styled.img`
    z-index: 1;
    width: 300px;
    margin-bottom: 50px;
`;

const BlogConnectionContainer = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-around;
`;

const BlogConnection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const BlogLog = styled.div`
    display: flex;
    justify-content: space-between;
`;

const BlogP = styled.p`
    z-index: 1;
    color: white;
    font-size: 16px;
    margin: 20px 0px;
`;

const BlogError = styled.p`
    z-index: 1;
    color: white;
    font-size: 16px;
    margin: 20px 0px;
`;

const BlogLink = styled(Link)`
    z-index: 1;
    text-decoration: none;
    text-align: center;
    align-self: center;
    width: 100px;
    border: none;
    border-bottom: 2px solid #C5B46B;
    background-color: rgba( 255, 255, 255, 0);
    margin: 0px 0px 50px 0px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    font-weight: bold;
    &:hover {
        animation: ${scale} 500ms both ease-in-out;
    }
`;

const BlogIpt = styled.input`
    z-index: 1;
    margin: 10px 20px;
    width: 300px;
    height: 30px;
`;

const BlogBtn = styled.button`
    z-index: 1;
    text-decoration: none;
    text-align: center;
    align-self: center;
    width: 140px;
    border: none;
    border-bottom: 2px solid #C5B46B;
    background-color: rgba( 255, 255, 255, 0);
    margin: 0px 0px 10px 0px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    font-weight: bold;
    &:hover {
        animation: ${scale} 500ms both ease-in-out;
    }
`;

function Login() {

    const { toggleConnected } = useLogin();
    
    const history = useNavigate();

    const [error, setError] = useState("");
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");


    useEffect(() => {
        const getUsers = () => {
            setIsLoading(true);
            fetch(`https://63a5c805f8f3f6d4abffbcce.mockapi.io/api/tribers/user`)
            .then(function (resp) {
                return resp.json();
            }).then(function (data) {
                setUsers(data);
                setIsLoading(false);
            }).catch(function (err) {
                console.log( err);
                setError("Oups, une erreur est survenue!!")
            });
        }
        getUsers();
    }, []);

    const submitConnectionInfos = () => {
        localStorage.removeItem("userData");
        if(!isLoading) {
            if((password === "") && (email === "")) {
                setError("Oups, un problème dans les identifiants!!");
            } else {
                users.forEach((user) => {
                    if((email === user.email) && (password === user.password)){
                        localStorage.setItem("userData", JSON.stringify({id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email, trips: user.trips}))
                        setError("");
                        toggleConnected();
                        history(`/blog`);
                    } else {
                        
                        setError("Oups, un problème dans les identifiants!!");
                    }
                });
            } 
        }
    }

    

    return(
        <>
            <LoginBackground>
                <BlogTitle>Bienvenue sur le blog des Tribers</BlogTitle>
                <BlogLogo src={Logo} alt="logo de tribers" />
                {isLoading ? (
                    <Loader/>
                ) : (
                    <BlogConnectionContainer>
                        <BlogConnection>
                            <BlogP>Vous êtes déjà un Tribers ? 🔒</BlogP>
                            <BlogLog>
                                <BlogP>Email : </BlogP>
                                <BlogIpt type={"email"} onChange={(e) => {
                                    setError("");
                                    setEmail(e.target.value);}}/>
                            </BlogLog>
                            <BlogLog>
                                <BlogP>Mot de passe : </BlogP>
                                <BlogIpt type={"password"} onChange={(e) => {
                                    setError("");
                                    setPassword(e.target.value);}}/>
                            </BlogLog>
                            {error && <BlogError>{error}</BlogError>}
                            <BlogBtn onClick={submitConnectionInfos}>Se connecter</BlogBtn>
                        </BlogConnection>
                        <BlogConnection>
                            <BlogP>Sinon, c'est par ici pour commencer l'aventure!! 👇</BlogP>
                            <BlogLink to="/blog/Signup">S'inscrire</BlogLink>
                        </BlogConnection>
                    </BlogConnectionContainer>
                )}
            </LoginBackground>
            <BackgroundBlur></BackgroundBlur>
        </>

    )
}

export default Login;