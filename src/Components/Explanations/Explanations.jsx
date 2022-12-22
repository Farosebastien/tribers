import { Link } from "react-router-dom";
import Explanation from "../Explanation/Explanation";
import styled from "styled-components";


const ExplanationsLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    border: none;
    border-bottom: 2px solid #C5B46B;
    margin: 40px 50px ;
    font-size: 16px;
    color: #2c2c2c;
    background-color: white;
    &:hover {
        font-weight: bold;
    }
`;

const ExplanationsContainer = styled.aside`
    width: 50%;
    height: 650px;
    background-color: white;
    margin-top: -100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const ExplanationsName = styled.p`
    margin: 40px 0px 0px 50px;
    color: #C5B46B;
`;

const ExplanationsTitle = styled.h1`
    margin: 10px 0px 40px 50px;
    text-align: left;
    width: 300px;
    font-size: 40px;
`;

const ExplanationsP = styled.p`
    margin: 0px 0px 40px 50px;
    text-align: left;
    width: 450px;
`

function Explanations () {

    const lists = [
        {
            title: "Participez",
            contain: "à une course ludique et sportive à l'étranger"
        },
        {
            title: "Séjournez",
            contain: "chez l'habitant pour un voyage en immersion"
        },
        {
            title: "Voyagez",
            contain: "clé en main : logistique et sécurité verrouillées dans l'offre"
        }
    ];

    return (
        <ExplanationsContainer>
            <ExplanationsName>TRIBERS</ExplanationsName>
            <ExplanationsTitle>La promesse d'une aventure !</ExplanationsTitle>
            <ExplanationsP>Partez à la découverte d'un pays, au plus proche de ses coutumes et de ses habitants.</ExplanationsP>
            <ExplanationsP>Au rythme de défis à la fois sportifs, logiques et ludiques, prenez part à une compétition inédite qui vous fera voyager différemment et vous permettra de réaliser une action solidaire !</ExplanationsP>
            {lists.map((item, index) => (
                <Explanation key={`${item.title}-${index}`} title={item.title} contain={item.contain} />
            ))}
            <ExplanationsLink to={"/trips"}>Je découvre les voyages</ExplanationsLink>
        </ExplanationsContainer>
    );
}

export default Explanations;