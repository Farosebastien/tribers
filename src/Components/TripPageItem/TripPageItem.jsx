import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TokenContext } from "../../utils/tokenContext";
import { useContext } from "react";
import { scale } from "../../utils/keyframes";
import { Loader } from './../../utils/loader';
import styled from "styled-components";
import { PropTypes } from 'prop-types';
import colors from "../../utils/Colors";

//Création de styled-components
const TripsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TripItemBox = styled.div`
    display: flex;
    justify-content: ${({weatherLoading}) => (weatherLoading ? 'center' : 'space-around')};
    min-height: 200px;
    width: 80%;
    margin: 40px 0px;
    @media (max-width: 1205px) {
        flex-direction: column;
        align-items: center;
    }
`;

const TripLeft = styled.aside`
    display: flex;
    flex-Direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
`;

const TripTitle = styled.h2`
    font-size: 26px;
    font-weight: bold;
    color: ${colors.grey};
    margin-bottom: 20px;
`;

const TripDuration = styled.span`
    font-size: 20px;
    margin-top: 25px;
    align-self: center;
`;

const TripContent = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: start;
`;

const TripPhoto = styled.img`
    width: 355px;
    height: 350px;
    @media (min-width: 771px) and (max-width: 1205px) {
        object-fit: cover;
        height: 350px;
        width: 80%;
    }
    @media (max-width: 770px) {
        width: 300px;
        height: 300px;
    }
`;

const TripDescription = styled.p`
    color: ${colors.grey};
    font-size: 18px;
    width: 100%;
    align-self: center;
    margin: 60px 0px 0px 40px;
    text-align: justify;
    @media (max-width: 1205px) {
        margin: 60px 0px 0px 0px;
    }
`;

const TripWeather = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 770px) {
        margin-top: 20px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const Weather = styled.p`
    margin: 60px 0px 0px 10px;
    font-size: 18px;
    color: ${colors.grey};
    @media (max-width: 770px) {
        margin: 20px;
    }
`;

const TripLink = styled(Link)`
    text-decoration: none;
    text-align: center;
    align-self: flex-end;
    width: 80px;
    border: none;
    border-bottom: 2px solid ${colors.primary};
    background-color: ${colors.whiteBackground};
    margin: 0px 20px;
    color: ${colors.grey};
    font-size: 18px;
    cursor: pointer;
    &:hover {
        animation: ${scale} 500ms both ease-in-out;
    }
    @media (max-width: 770px) {
        align-self: center;
    }
`;

function TripPageItem ({ date, gps, location, duration, image, description }) {

    //Variables pour la météo et le token
    let windSpeed = null;
    let temperature = null;

    //Récupération du token depuis le context
    const { token, isLoading }  = useContext(TokenContext);
    const [itemWeather, setItemWeather] = useState();
    const [weatherLoading, setWeatherLoading] = useState(false);

    //Récupération des données météo grâce à la date actuelle, aux coordonnées gps et au token
    useEffect(() => {
        const getWeather = () => {
            fetch(`https://api.meteomatics.com/${date}/t_2m:C,wind_speed_10m:ms/${gps}/json`, {
                method: 'GET', headers: {"Authorization": `Bearer ${token}`}
            //Quand on a une réponse, on la retourne
            }).then(function (resp) {
                return resp.json();
            //Quand elle est retournée, on met les variables à jour grâce au state
            }).then(function (data) {
                setItemWeather(data.data);
                setWeatherLoading(false);
            //Si il y a une erreur, on la log
            }).catch(function (err) {
                console.log( err);
            });
        }
        //Quand on a reçu le token on lance le useEffect
        if(!isLoading) {
            setWeatherLoading(true);
            getWeather();
        }
    }, [isLoading, gps, token, date]);

    //Quand on a reçu les données météo, on les met à jour en les arrondissants et en changeant l'unité pour la vitesse du vent
    if(itemWeather) {
        windSpeed = itemWeather[1].coordinates[0].dates[0].value * 3.6;
        windSpeed = Math.floor(windSpeed);
        temperature = Math.ceil(itemWeather[0].coordinates[0].dates[0].value);
    }

    //Rendu du composant tripPageItem qui affiche les différents voyages disponibles dans les props venant de son parent ou du loader si les données ne sont pas encore chargées
    return (
        <TripsContainer>
            <TripItemBox>
                {weatherLoading ? (
                        <Loader />
                    ) : (
                        <>
                            <TripLeft>
                                <TripTitle>{location}</TripTitle>
                                <TripPhoto src={image} alt={`${location}-${duration}`}/>
                            </TripLeft>
                            <TripContent>
                                <TripDuration>{duration}</TripDuration>
                                <TripDescription>{description}</TripDescription>
                                <TripWeather>
                                    <Weather>Température locale 🌡️ : {temperature} °C</Weather>
                                    <TripLink to="/blog/signup">J'y vais</TripLink>
                                    <Weather>Vitesse du vent 🌬️: {windSpeed} km/h</Weather>
                                </TripWeather>
                            </TripContent>
                        </>
                    )
                }
            </TripItemBox>
        </TripsContainer>
    )
}

//Prop-types qui sont toutes obligatoire et toutes des chaînes de caractères
TripPageItem.propTypes = {
    location: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    gps: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

//Exportation du composant
export default TripPageItem;