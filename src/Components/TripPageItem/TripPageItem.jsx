import { useState, useEffect } from "react";
import { TokenContext } from "../../utils/tokenContext";
import { useContext } from "react";
import { Loader } from './../../utils/loader';
import styled from "styled-components";
import { PropTypes } from 'prop-types';

const TripsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TripItemBox = styled.div`
    display: flex;
    justify-content: ${({weatherLoading}) => (weatherLoading ?  'center' : 'space-around')};
    min-height: 200px;
    width: 80%;
    margin: 40px 0px;
`;

const TripLeft = styled.aside`
    display: flex;
    flex-Direction: column;
    justify-content: center;
    align-items: center;
`;

const TripTitle = styled.h2`
    font-size: 26px;
    font-weight: bold;
    color: grey;
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
`;

const TripDescription = styled.p`
    color: grey;
    font-size: 18px;
    width: 100%;
    align-self: center;
    margin: 60px 0px 0px 40px;
    text-align: justify;
`;

const TripWeather = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const Weather = styled.p`
    margin: 60px 0px 0px 10px;
    font-size: 18px;
    color: grey;
`;

function TripPageItem ({ date, gps, location, duration, image, description }) {

    let windSpeed = null;
    let temperature = null;
    const { token, isLoading }  = useContext(TokenContext);
    const [itemWeather, setItemWeather] = useState();
    const [weatherLoading, setWeatherLoading] = useState(false);

    useEffect(() => {
        const getWeather = () => {
            fetch(`https://api.meteomatics.com/${date}/t_2m:C,wind_speed_10m:ms/${gps}/json`, {
                method: 'GET', headers: {"Authorization": `Bearer ${token}`}
            }).then(function (resp) {
                return resp.json();
            }).then(function (data) {
                setItemWeather(data.data);
                setWeatherLoading(false);
            }).catch(function (err) {
                console.log( err);
            });
        }
        if(!isLoading) {
            setWeatherLoading(true);
            getWeather();
        }
    }, [isLoading, gps, token, date]);

    if(itemWeather) {
        windSpeed = itemWeather[1].coordinates[0].dates[0].value * 3.6;
        windSpeed = Math.floor(windSpeed);
        temperature = Math.ceil(itemWeather[0].coordinates[0].dates[0].value);
    }

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

TripPageItem.propTypes = {
    location: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    gps: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

export default TripPageItem;