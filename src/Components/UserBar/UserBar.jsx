import { useEffect, useState } from "react";
import { useLogin } from "../../utils/Hooks";
import generic from "../../Images/profile_generic.jpeg";
import styled from "styled-components";
import colors from "../../utils/Colors";

//Création de styled-components
const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DataBtn = styled.button`
    color: ${colors.white};
    text-decoration: none;
    text-align: center;
    align-self: center;
    width: 160px;
    border: none;
    background-color: ${colors.primary};
    margin-bottom: 20px;
    font-size: 14px;
    cursor: pointer;
    font-weight: bold;
`;

const DataImg = styled.img`
    width: 150px;
`;

const DataContent = styled.p`
    color: ${colors.primary};
    font-weight: bold;
    margin: 0px 0px 20px 0px;
`;

const DataEmail = styled.p`
    color: ${colors.primary};
    margin: 20px 0px 0px 0px;
`;

const DataBtnContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 400px;
`;

const DataTripTitle = styled.h3`
    margin: 20px 0px;
`;

const DataTripContent = styled.p`
    margin: 0px 0px 20px 0px;
    text-align: center;
`;

function UserBar () {

    //Variables pour les voyages, l'utilisateur connecté et la userBar
    const [trips, setTrips] = useState("");
    const [maximise, setMaximise] = useState(false);
    const [userData, setUserData] = useState({});

    //Récupération de la fonction toggleConnected pour le bouton de déconnection
    const { toggleConnected } = useLogin();

    //Fonction d'affichage des voyages déjà effectués par l'utilisateur en fonction du tableau trips des données utilisateurs
    function getTrips(data) {
        let maroc = "";
        if(data.trips[0] === "1") {
            maroc = " Maroc ,";
        }
        let costaRica = "";
        if(data.trips[1] === "1") {
            costaRica = " Costa Rica ,";
        }
        let greece = "";
        if(data.trips[2] === "1") {
            greece = " Grèce ,";
        }
        let kenya = "";
        if(data.trips[3] === "1") {
            kenya = " Kenya ";
        }
        const trips = maroc + costaRica + greece + kenya;
        return trips;
    }

    //UseEffect pour la récupération des données utilisateur
    useEffect(() => {
        //Fonction de récupération des données dans le local storage
        const getUserData = async() => {
            const data = await JSON.parse(localStorage.getItem("userData"));
            return data;
        }
        //Récupération des des données
        getUserData()
        //Quand les données sont présentes
        .then((data) => {
            //Appels des fonctions de mise à jour du state de UserData et Trips en appelant getTrips
            setUserData(data);
            setTrips(getTrips(data));
        })
    }, []);

    //Fonction de déconnection 
    const deconnection = () => {
        //Utilisation de toggleConnected et vidage du local storage
        toggleConnected();
        localStorage.removeItem("userData");
    }

    //Fonction de gestion de la barre utilisateur qui inverse la valeur de maximise à chaque appel
    const toggleMaximise = () => {
        setMaximise(!maximise);
    }

    //Rendu du composant UserBar qui affiche en fonction de la variable maximise, un message de bienvenue avec le nom de l'utilisateur ou ses données complètes
    return(
        <section>
            {!maximise ? 
            (
                <DataContainer>
                    <DataContent>Bonjour {userData.firstName} !!</DataContent> 
                    <DataBtn onClick={() => toggleMaximise()}>Voir mon profil</DataBtn>
                </DataContainer>
            ) 
            : 
            (
                <DataContainer>
                    <DataContent>{userData.firstName} {userData.lastName}</DataContent>
                    <DataImg src={generic} alt="profil" />
                    <DataEmail>{userData.email}</DataEmail>
                    <div>
                        <DataTripTitle>Aventures Tribers effectuées : </DataTripTitle>
                        <DataTripContent>{trips}</DataTripContent>
                    </div>
                    <DataBtnContainer>
                        <DataBtn onClick={() => deconnection()}>Me déconnecter</DataBtn>
                        <DataBtn onClick={() => toggleMaximise()}>Réduire mon profil</DataBtn>
                    </DataBtnContainer>
                </DataContainer>
            )}
        </section>
    )

}

//Exportation du composant
export default UserBar;