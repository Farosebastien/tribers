import styled from "styled-components"; 
import Background from "../../Images/background.webp";
import colors from "../../utils/Colors";

//Création de styled-components
const ValuesContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: ${colors.white} url(${Background}) center no-repeat;
    background-size: cover;
    resize: both;
    height: 200vh;
`;

const ValuesBackgroundBlur = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 170px;
    background: ${colors.blurBackground};
    -webkit-backdrop-filter: blur(3px);
    backdrop-filter: blur(4px);
    height: 200vh;
`;

const ValueContainer = styled.div`
    display: flex;
    width: 80%;
    justify-content: center;
    flex-direction: column;
    z-index: 1;
`;

const ValuesTitle = styled.h2`
    color: ${colors.white};
    font-size: 30px;
    margin-top: 100px;
    text-align: center;
    z-index: 1;
`;

const ValueTitle = styled.p`
    color: ${colors.white};
    align-self: center;
`;

const ValueContent = styled.p`
    color: ${colors.white};
    width: 60%;
    align-self: center;
    text-align: justify;

`;

function Values () {

    //Tableau d'objets contenant chacune des valeur de tribers
    const values = [
        {
            title: " 👯‍♀️ D'abord des rencontres : 👯‍♀️",
            content: "Nos voyages sont tout d'abord des rencontres, nous voulons que nos voyageurs rencontrent les habitants, découvrent leurs façons de vivre, leurs coutumes. Qu'ils échangent de réels moments intenses et enrichissants. Chaque voyageur part avec la personne de son choix afin de former une équipe, cela permet en plus des instant incroyables avec la personne que l'on désire."
        },
        {
            title: " 🌍 La découverte d'un pays : 🌍",
            content: "Ce n'est pas seulement ses habitants que les voyageurs vont découvrir, nous souhaitons aussi qu'ils puissent découvrir la richesse de chaque destination où ils auront l'occasion d'aller durant leur séjour, comment vit le pays, ses richesses, les plus paysages mais aussi quelques fois malheureusement, la pauvreté, les difficultés du pays ou de ses habitants a vivre dans un monde que nous connaissont bien différement en fonction de notre point de vue. Nous pensons chez Tribers que c'est tout celà qui participe à faire grandir la richesse culturelle et la personnalité de chacun d'entre nous."
        },
        {
            title: " 🏎️ Une course en équipe : 🏎️",
            content: "Chaque voyage est organisé comme une course à travers le pays de destination, plusieurs équipes devront s'affronter dans divers défis. Chaque jour un nouvelle étape à rejoindre au plus vite, un prix récompensera l'équipe qui arrive en premier, et chaque jour des jeuxdifférents pour avantager ou, au contraire, désavantager les équipes. Dans chaque défi aura pour but de faire découvrir ou vivre par exemples les coutumes ou les paysages locaux."
        },
        {
            title: " 💸 Une action caritative : 💸",
            content: "Avant le départ, chaque équipe choisi une association. Celle qu'elle a envie de soutenir. Tous les gains de l'équipe irons directectement à cette association. Pour l'équipe les gains sont uniquements dans tout ce qu'elle a vécu dans cette aventure. Ce sera seulement l'association qui profitera pleinement de l'argent."
        }
    ];
    
    //Rendu du composant Values qui pour chaque élement du tableau values affiche un container
    return (
        <>
            <ValuesContainer>
                <ValuesTitle>Le voyage d'après Tribers !!</ValuesTitle>
                {values.map((value, index) => (
                    <ValueContainer key={`${value.title}-${index}`}>
                        <ValueTitle>{value.title}</ValueTitle>
                        <ValueContent>{value.content}</ValueContent>
                    </ValueContainer>
                ))}
            </ValuesContainer>
            <ValuesBackgroundBlur></ValuesBackgroundBlur>
        </>
    )
}

//Exportation du composant
export default Values;