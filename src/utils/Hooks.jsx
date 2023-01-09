import { useState, useEffect, useContext } from "react";
import { LoginContext } from './loginContext';

export function useToken() {
    const [token, setToken] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getToken = () => {
            setIsLoading(true);
            let headers = new Headers();
            headers.set('Authorization', 'Basic ' + btoa(`${process.env.REACT_APP_METEO_API}`));
            fetch('https://login.meteomatics.com/api/v1/token', {
                method: 'GET', headers: headers
            }).then(function (resp) {
                return resp.json();
            }).then(function (data) {
                setToken(data.access_token);
                setIsLoading(false);
            }).catch(function (err) {
                console.log('problème lors de la connection', err);
            });
            
        };
        getToken();
    }, []);

    return { token, isLoading };
}

export function useLogin () {
    const { isConnected, toggleConnected } = useContext(LoginContext);
    return { isConnected, toggleConnected };
}