import { Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import TripsPage from "./Pages/TripsPage/TripsPage";
import Values from "./Pages/ValuesPage/ValuesPage";
import Login from "./Containers/Login/Login";
import Signup from "./Containers/Signup/Signup";
import Error from "./Pages/ErrorPage/ErrorPage";
import { useLogin } from "./utils/Hooks";
import Blog from "./Containers/Blog/Blog";

//Composant de Routing
function Routing () {

    //Variable routes qui contiendra les routes en fonction de l'état du booléen isConnected
    let routes = "";

    //Récupération du booléen isConnected
    const { isConnected } = useLogin();

    //Si il n'y a pas d'utilisateur connecté la route /blog envoie sur le composant Login
    if (!isConnected) {
        routes = (
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/trips" element={<TripsPage />} />
                <Route path="/values" element={<Values />} />
                <Route path="/blog" element={<Login/>} />
                <Route path="/blog/signup" element={<Signup/>} />
                <Route path="*" element={<Error />} />
            </Routes>
        )
    //Si un utilisateur est connecté la route /blog envoie sur le composant Blog
    } else (
        routes = (
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/trips" element={<TripsPage />} />
                <Route path="/values" element={<Values />} />
                <Route path="/blog" element={<Blog/>} />
                <Route path="/blog/signup" element={<Signup/>} />
                <Route path="*" element={<Error />} />
            </Routes>
        )
    )

    //Rendu du composant Routes
    return routes;
}

//Exportation du composant
export default Routing