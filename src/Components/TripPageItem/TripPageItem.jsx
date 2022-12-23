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
    width: 80%;
    align-self: center;
    margin: 60px 0px 0px 0px;
    text-align: justify;
`;

function TripPageItem ({ date, gps, location, duration, image, description }) {
    
    const { token, isLoading }  = useContext(TokenContext);
    const [itemWeather, setItemWeather] = useState({});
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