import { useEffect, useState } from "react";
import { useLogin } from "../../utils/Hooks";
import generic from "../../Images/profile_generic.jpeg";
import styled from "styled-components";

const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DataBtn = styled.button`
    color: white;
    text-decoration: none;
    text-align: center;
    align-self: center;
    width: 160px;
    border: none;
    background-color: #c5b56b;
    margin-bottom: 20px;
    font-size: 14px;
    cursor: pointer;
    font-weight: bold;
`;

const DataImg = styled.img`
    width: 150px;
`;

const DataContent = styled.p`
    color: #c5b56b;
    font-weight: bold;
    margin: 0px 0px 20px 0px;
`;

const DataEmail = styled.p`
    color: #c5b56b;
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

    const [trips, setTrips] = useState("");
    const [maximise, setMaximise] = useState(false);
    const [userData, setUserData] = useState({});

    const { toggleConnected } = useLogin();

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

    useEffect(() => {
        const getUserData = async() => {
            const data = await JSON.parse(localStorage.getItem("userData"));
            return data;
        }
        getUserData()
        .then((data) => {
            setUserData(data);
            setTrips(getTrips(data));
        })
    }, []);

    const deconnection = () => {
        toggleConnected();
        localStorage.removeItem("userData");
    }

    const toggleMaximise = () => {
        setMaximise(!maximise);
    }
    console.log(userData.trips)

    return(
        <div>
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
        </div>
    )

}

export default UserBar;