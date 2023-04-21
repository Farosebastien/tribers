import Background from "../../Images/background_blogsection.webp";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Loader } from "../../utils/loader";
import colors from "../../utils/Colors";

//Création de styled-components
const BlogContainer = styled.section`
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BlogTitle = styled.h1`
    z-index: 1;
    font-size: 60px;
    color: ${colors.primary};
    text-align: center;
    margin-top: 180px;
`;

const BackgroundBlogImg = styled.img`
    width: 100%;
    height: 400px;
    margin-top: -260px;
    object-fit: cover;
`;

const PostContainer = styled.div`
    width: 60%;
    height: auto;
    display: flex;
    flex-direction: column;
    border: 2px solid ${colors.primary};
    border-radius: 20px ;
    margin: 40px 0;
    box-shadow: ${colors.primary} 2px 2px 10px 2px;
    background-color: ${colors.goldBackground}
`;

const PostHeader = styled.div`
    display: flex;
    justify-content: space-evenly;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const PostAuthor = styled.span`
    margin: 10px 0;
    border-bottom: 2px solid ${colors.primary};
`;

const PostDate = styled.span`
    margin: 10px 0;
    color: ${colors.grey};
    border-bottom: 2px solid ${colors.primary};
`;

const PostContent = styled.div`
    margin: 40px 20px 20px 20px;
    text-align: center;
`;

function Blog () {

    //Récupération des données de l'utilisateur courant dans le local storage
    const currentUser = JSON.parse(localStorage.getItem("userData"));
    //Variable du state
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    //UseEffect pour la récupération des utilisateurs et des posts
    useEffect(() => {
        //Fonction de récupération des utilisateurs
        const getUsers = () => {
            //Mise du booléen de chargement à true
            setIsLoading(true);
            //Requête à la mockAPI
            fetch(`${process.env.REACT_APP_MOCKAPI}user`)
            //Quand on a la réponse, on la retourne
            .then(function (resp) {
                return resp.json();
            //Ensuite, on l'envoie dans le state et on met le booléen de chargement a false
            }).then(function (data) {
                setUsers(data);
                setIsLoading(false);
            //Si il y a une erreur, on la log et on l'indique avec la variable error du state
            }).catch(function (err) {
                console.log( err);
                setError("Oups, une erreur est survenue à la récupération des utilisateurs!!!!")
            });
        }
        //Fonction de récupération des posts
        const getPosts = () => {
            //Mise du booléen de chargement à true
            setIsLoading(true);
            //Requête à la mockAPI
            fetch(`${process.env.REACT_APP_MOCKAPI}posts`)
            //Quand on a la réponse, on la retourne
            .then(function (resp) {
                return resp.json();
            //Ensuite, on l'envoie dans le state et on met le booléen de chargement a false
            }).then(function (data) {
                setPosts(data);
                setIsLoading(false);
            //Si il y a une erreur, on la log et on l'indique avec la variable error du state
            }).catch(function (err) {
                console.log( err);
                setError("Oups, une erreur est survenue à la récupération des posts!!")
            });
        }
        //Appel des fonction de récupération des posts et des utilisateurs
        getUsers();
        getPosts();
    }, []);

    //Pour chaque post
    posts.forEach((post) => {
        //On cherche dans les utilisateurs, celui qui a le même id que l'auteur du post
        for(const user of users) {
            //Quand on l'a trouvé on mets la variables name de chaque post à jour
            if (post.userId === user.id) {
                post.name = `${user.firstName + " " + user.lastName}`;
            }
        }
        //Si l'auteur du post est l'utilisateur courant on met juste le nom à "vous"
        if (post.userId === currentUser.id) {
            post.name = "Vous";
        }
    })

    //Si il y a eu une erreur, on l'affiche
    if (error !== "") {
        return (
            <BlogContainer>
                <BlogTitle>{error}</BlogTitle>
            </BlogContainer>
        )
    }
    //Rendu du composant Blog en affichant un loader si on est en chargement et sinon on affiche chaque post avec le nom de l'auteur, la date de post et le contenu du post
    return (
        <BlogContainer>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <BlogTitle>Le Blog</BlogTitle>
                    <BackgroundBlogImg src={Background} alt="image de voyageurs" />
                    {posts && posts.map((post, index) => (
                        <PostContainer key={`${post.id}-${index}`}>
                            <PostHeader>
                                <PostAuthor>Tribers: {post.name}</PostAuthor>
                                <PostDate>posté le: {post.postDate}</PostDate>
                            </PostHeader>
                            <PostContent>{post.content}</PostContent>
                        </PostContainer>
                    ))}
                </>
            )}
        </BlogContainer>
    )
}

//Exportation du composant
export default Blog;