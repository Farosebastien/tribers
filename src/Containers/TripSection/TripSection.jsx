import { Link, useLocation } from "react-router-dom";
import { scale } from "../../utils/keyframes";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVuejs } from "@fortawesome/free-brands-svg-icons";
import TripItem from "../../Components/TripItem/TripItem";
import TripPageItem from "../../Components/TripPageItem/TripPageItem";
import Maroc5 from "../../Images/maroc5.webp";
import Kenya from "../../Images/kenya.webp";
import Greece from "../../Images/greece.webp";
import CostaRica from "../../Images/costa_rica.webp";

//Création de styled-components
const TripContainer = styled.section`
    display: flex;
    flex-direction: column;
    background-color: rgba(197, 180, 107, 0.3);
`;

const TripFontAwesomeIcon = styled(FontAwesomeIcon)`
    align-self: flex-start;
    margin: 30px 0px 20px 30px;
    width: 120px;
    height: 150px;
    color: rgba(197, 180, 107, 0.5);
`;

const TripTitle = styled.h2`
    color: #C5B46B;
    align-self: flex-start;
    margin: -150px 0px 20px 50px;
    font-size: 30px;
    font-weight: bold;
`;

const TripTitleSuite = styled.h3`
    color: #C5B46B;
    align-self: flex-start;
    margin: -20px 0px 20px 50px;
    font-size: 24px;
    font-weight: bold;
`;

const TripsSection = styled.div`
    margin: 35px 0px 0px 0px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
`;

const TripBtn = styled(Link)`
    text-decoration: none;
    align-self: center;
    margin: 10px 0px 60px 0px;
    border: none;
    color: black;
    border-bottom: 2px solid #C5B46B;
    background-color: rgba(255, 255, 255, 0);
    font-size: 16px;
    cursor: pointer;
    font-weight: bold;
    &:hover {
        animation: ${scale} 500ms both ease-in-out;
    }
`;

function TripSection () {

    //Récupération de la date actuelle
    const date = new Date().toISOString();

    //Récupération de la location de l'utilisateur
    const path = useLocation().pathname;

    //Tableau d'objets qui contient les données de chaque voyage
    const items = [
        {
            location: "MAROC",
            gps: "31.6258257,-7.9891608",
            duration: "Formule 5 jours",
            image: Maroc5,
            description: "Situé à la pointe nord-ouest de l'Afrique du Nord, le pays s'étend sur des milliers de kilomètres le long des côtes méditerranéenne et atlantique. Entre Al Hoceima, Tanger, Essaouira, ou Agadir, les amateurs de plages, de sports nautiques en tout genre y trouveront forcément leur bonheur. Le pays est partagé par la chaîne montagneuse de l'Atlas qui s'élève à plus de 4000 mètres entre les grandes plaines du nord et le désert au sud. La diversité des paysages y est telle que vous pourrez effectuer des excursions très variées. L'architecture et la culture Marocaine sont riches. Il faut admirer les zelliges (sortes de bas-reliefs en plâtre), les stucks, les moucharabiehs (des treillis en bois sur les fenêtres, qui devaient dissimuler les personnes regardant vers l'extérieur.) Il faut voir les fantasias, courses de cavaliers lancés au galop qui font feu de leurs fusils archaïques vers le ciel. Il faut écouter les bruits des médinas, où se mélangent toutes activités. Il faut sentir les odeurs des étals d'épices, ou bien celles des parterres de roses du sud marocain. Il faut goûter une pastilla sous une tente caïdale, en compagnie d'hôtes chaleureux."
        },
        {
            location: "COSTA RICA",
            gps: "9.9325427,-84.0795782",
            duration: "Formule 10 jours",
            image: CostaRica,
            description: "Entre le Nicaragua au nord et le Panama au sud, le Costa Rica, de 50.660 km2, s'étire langoureusement entre l'océan Pacifique et la mer des Caraïbes. Une chaîne volcanique culminant à 3.820 m (Chipirro Grande) traverse le pays du nord au sud, bordée de plaines fertiles. Outre les tapirs, les toucans, les paresseux, les tamanoirs ou les quetzals, bel oiseau au plumage vert et rouge, la faune comprend des milliers d'espèces de poissons, d'amphibiens ou de reptiles. Les forêts abondent en ébène, acajou, cèdre ou balsa et on dénombre plus de 1.000 espèces d'orchidées ! Compte tenu de son relief montagneux, le Costa Rica connaît un climat varié. La vallée centrale, où se situe San José, est de climat tempéré alors que le climat tropical humide s'impose sur les côtes, la côte pacifique étant sujette à des étés plus chauds que la côte atlantique. Entre San José et les plages, la température moyenne annuelle varie entre 17°C et 32°C, un point à prendre en considération au moment de faire sa valise. La saison des pluies durant d'avril-mai à décembre, la saison « sèche », à partir de décembre et jusqu'à la mi-avril, est la plus touristique."
        },
        {
            location: "GRECE",
            gps: "37.9839412,23.7283052",
            duration: "Formule 5 jours",
            image: Greece,
            description: "Beauté et variété des paysages, richesse des vestiges historiques, climat doux, littoral et milliers d'îles paradisiaques, cuisine saine, infrastructures touristiques développées avec en prime un accueil chaleureux, voilà ce qui résume au mieux la Grèce. Elle est constituée d'une partie continentale et montagneuse au Nord, qui touche l'Albanie et la Bulgarie et dont le climat durcit au fur et à mesure que le relief monte (jusqu'à 2900 mètres au mont Olympe). La presqu'île du Péloponnèse, elle aussi montagneuse, ouvre ses quatre doigts vers le sud. Partout, le climat est doux et pluvieux l'hiver, chaud en été, avec des températures parfois caniculaires. Le printemps et l'automne sont donc les périodes les plus propices à un séjour agréable. Ce pays regorge de traces datant de l'âge du bronze, outils, armes ou vases, et vestiges en Crète, à Mycènes et Thessalonique. Évidemment, c'est un trésor de sanctuaires, temples et théâtres datant du siècle d'or grec (5e siècle avant JC). Outre l'Acropole d'Athènes, plusieurs autres sites archéologiques sont classés au patrimoine mondial par l'Unesco comme Aigai (aujourd'hui Vergina, ancienne capitale de la Macédoine), Olympie, Delphes ou le sanctuaire d'Asclépios à Epidaure. A Mistras, les traces de l'occupation byzantine ont laissé des ruines médiévales étonnantes. Les îles de Délos, Rhodes et Corfou valent le détour."
        },
        {
            location: "KENYA",
            gps: "36.8166700,-1.2833300",
            duration: "Formule 10 jours",
            image: Kenya,
            description: "Frontalier avec cinq autres pays, le Kenya donne sur l'océan indien. Sa capitale est Nairobi. Il a comme voisins la Somalie et l'Ethiopie, à l'Est et au Nord Est, le Soudan et l'Ouganda au Nord et à l'Ouest, et la République de Tanzanie au Sud Ouest. Un peu plus grand que la France, il est aussi connu pour le Lac Victoria. Cet incroyable pays réuni à lui seul paysages plats, montagnes au sommet blanchis par la neige, déserts, rift, volcans, ou encore barrière de corail ! A cheval sur l'équateur, le climat y est changeant selon l'endroit où l'on se trouve. Chaud, froid, humide sec, à chacun sa saison selon son lieu! La montagne de l'autruche, ou Kiinyaa, est l'origine du nom de ce beau pays. Choisirez-vous la farniente et les balades tranquilles ? Le contact avec les tribus masaï ? Le parachutisme et le safari dans des conditions extrêmes ? Les safaris sont l'héritage des colons partis découvrir le cœur du territoire kenyan. Imaginez ces hommes voyant pour la première fois un lion ou un éléphant dans leur milieu naturel. La république du Kenya est en effet le lieu idéal et est mondialement connue et reconnue pour ses excursions qui ne manqueront pas de vous époustoufler"
        }
    ];

    //Si l'utilisateur se trouve sur la page d'accueil
    if (path === "/") {
        //Rendu du composant TripSection en itérant sur chaque voyage avec et en envoyant les données de chaque voyage en props au composant TripItem
        return (
            <TripContainer>
                <TripFontAwesomeIcon icon={faVuejs} />
                <TripTitle>Nos voyages</TripTitle>
                <TripTitleSuite>clés en main</TripTitleSuite>
                <TripsSection>
                    {items.map((item, index) => (
                        <TripItem key={`${item.location}-${index}`} location={item.location} duration={item.duration} image={item.image} />
                    ))}
                </TripsSection>
                <TripBtn to="/trips">Tous les voyages</TripBtn>
            </TripContainer>
        )
    //Si l'utilisateur se trouve sur la page des voyages
    } else if (path === "/trips") {
        //Rendu du composant TripSection en itérant sur chaque voyage avec et en envoyant les données de chaque voyage en props au composant TripPageItem
        return (
            <>
                {items.map((item, index) => (
                    <TripPageItem key={`${item.location}-${index}`} location={item.location} duration={item.duration} image={item.image} gps={item.gps} date={date} description={item.description} />
                ))}
            </>  
        )
    }
}

//Exportation du composant
export default TripSection;