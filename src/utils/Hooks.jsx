import { useState, useEffect } from "react";

export function useToken() {
    const [token, setToken] = useState("");

    useEffect(() => {
        const getToken = () => {
            let headers = new Headers();
            headers.set('Authorization', 'Basic ' + btoa("lacustomagency_faro:0y5WU6nNAe"));
            fetch('https://login.meteomatics.com/api/v1/token', {
                method: 'GET', headers: headers
            }).then(function (resp) {
                return resp.json();
            }).then(function (data) {
                setToken(data.access_token);
            }).catch(function (err) {
                console.log('problème lors de la connection', err);
            });
            
        };
        getToken();
    }, []);

    return token;
}

export function useWeather(token, gps) {

    const [itemWeather, setItemWeather] = useState("");

    useEffect(() => {
        const getWeather = () => {
            fetch(`https://api.meteomatics.com/2022-10-13T00:00:00Z/t_2m:C,weather_symbol_1h:idx/${gps}/json`, {
                method: 'GET', headers: {"Authorization": `Bearer ${token}`}
            }).then(function (resp) {
                return resp.json();
            }).then(function (data) {
                setItemWeather(data.data);
            }).catch(function (err) {
                console.log( err);
            });
                
        };
        getWeather();
    }, [gps, token])
    return itemWeather;

}