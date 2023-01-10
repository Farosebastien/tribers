import { useState, useEffect, useContext } from "react";
import { LoginContext } from './loginContext';

//Création et export d'un hook pour le token de l'api meteomatics
export function useToken() {

    //Variables pour le token et pour le isLoading en utilisant le state
    const [token, setToken] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    //UseEffect pour la récupération du token
    useEffect(() => {
        //Fonction getToken
        const getToken = () => {
            //Mise du booléen de chargement à true
            setIsLoading(true);
            //Préparation des headers pour les identifiants de connection
            let headers = new Headers();
            headers.set('Authorization', 'Basic ' + btoa(`${process.env.REACT_APP_METEO_API}`));
            //fetch à l'API meteomatics pour récupérer le token d'authentification
            fetch('https://login.meteomatics.com/api/v1/token', {
                method: 'GET', headers: headers
            //Quand on a la réponse, on la retourne
            }).then(function (resp) {
                return resp.json();
            //Quand a la reponse on la stocke dans la variable token et on met le booléen de chargement à false
            }).then(function (data) {
                setToken(data.access_token);
                setIsLoading(false);
            //Si il y a une erreur, on la log
            }).catch(function (err) {
                console.log('problème lors de la connection', err);
            });
            
        };
        //appel de getToken
        getToken();
    }, []);

    //Retour des variables token et isLoading
    return { token, isLoading };
}

//Création et export d'un hook pour la connection utilisateur
export function useLogin () {

    //Récupération de isConnected et toggleConnected provenant de LoginContext 
    const { isConnected, toggleConnected } = useContext(LoginContext);

    //Retour de isConnected et toggleConnected
    return { isConnected, toggleConnected };
}