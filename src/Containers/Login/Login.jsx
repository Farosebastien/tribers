import Background from "../../Images/background_trip.webp";
import Logo from "../../Images/logo.webp";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { scale } from "../../utils/keyframes";
import { useState, useEffect } from "react";
import { Loader } from "../../utils/loader";
import { useLogin } from "../../utils/Hooks";
import colors from "../../utils/Colors";

//Création de styled-components
const LoginBackground = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
    background: ${colors.blackBackground} url(${Background}) center no-repeat;
    background-size: cover;
    resize: both;
`;

const BackgroundBlur = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 170px;
    background: ${colors.blurBackground};
    -webkit-backdrop-filter: blur(3px);
    backdrop-filter: blur(4px);
    height: 90vh;
`;

const BlogTitle = styled.h1`
    z-index: 1;
    color: ${colors.white};
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
    color: ${colors.white};
    font-size: 16px;
    margin: 20px 0px;
`;

const BlogError = styled.p`
    z-index: 1;
    color: ${colors.white};
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
    border-bottom: 2px solid ${colors.primary};
    background-color: ${colors.whiteBackground};
    margin: 0px 0px 50px 0px;
    color: ${colors.white};
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
    border-bottom: 2px solid ${colors.primary};
    background-color: ${colors.whiteBackground};
    margin: 0px 0px 10px 0px;
    color: ${colors.white};
    font-size: 16px;
    cursor: pointer;
    font-weight: bold;
    &:hover {
        animation: ${scale} 500ms both ease-in-out;
    }
`;

function Login() {

    //Récupération de la fonction toggleConnected
    const { toggleConnected } = useLogin();
    
    //Variable history pour la navigation
    const history = useNavigate();

    //Variables du state
    const [error, setError] = useState("");
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    //UseEffect pour la récupération des utilisateurs de la base de données
    useEffect(() => {
        //Fonction de récupération avec fetch
        const getUsers = () => {
            //Mise du booléen de chargement à true
            setIsLoading(true);
            //Fetch à la mock API
            fetch(`${process.env.REACT_APP_MOCKAPI}user`)
            //Quand on a la réponse, on la retourne
            .then(function (resp) {
                return resp.json();
            //Avec ces données on appelle les fonction de mise à jour du state pour Users avec les données et du booléen de chargement à false
            }).then(function (data) {
                setUsers(data);
                setIsLoading(false);
            //Si on a une erreur à la récupération, on la log et on met à jour la variable du state error
            }).catch(function (err) {
                console.log( err);
                setError("Oups, une erreur est survenue!!")
            });
        }
        //Appel de la fonction de récupération des utilisateurs
        getUsers();
    }, []);

    //Fonction de soumission des informations de connection email et mot de passe
    const submitConnectionInfos = () => {
        //Vidage du local storage au cas où des infos y soient encore
        localStorage.removeItem("userData");
        //Si on est plus en récupération des infos
        if(!isLoading) {
            //Si on a pas d'entrées dans email et mot de passe
            if((password === "") && (email === "")) {
                //On met à jour une erreur
                setError("Oups, un problème dans les identifiants!!");
            //Sinon
            } else {
                //Sur chaque utilisateur
                users.forEach((user) => {
                    //Comparaison du mot de passe et de l'email de connection pour trouver l'utilisateur
                    if((email === user.email) && (password === user.password)){
                        //Stockage de ses données dans le local storage
                        localStorage.setItem("userData", JSON.stringify({id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email, trips: user.trips}))
                        //Vidage de l'erreur, mise à jour du booléen isConnected avec toggleConnected et envoi de l'utilisateur sur la page du blog
                        setError("");
                        toggleConnected();
                        history(`/blog`);
                    //Si les entrées ne correspondent à aucun utilisateur de la mock API on l'indique dans l'erreur
                    } else {
                        setError("Oups, un problème dans les identifiants!!");
                    }
                });
            } 
        }
    }

    //Rendu du composant Login qui si on est en chargement, affiche un loader et une fois le chargement effectué affiche les inputs pour les connections
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

//Exportation du composant
export default Login;