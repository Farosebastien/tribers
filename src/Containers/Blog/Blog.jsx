import Background from "../../Images/background_blogsection.webp";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Loader } from "../../utils/loader";


const BlogContainer = styled.section`
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BlogTitle = styled.h1`
    z-index: 1;
    font-size: 60px;
    color: #c5b56b;
    text-align: center;
    margin-top: 180px;
`;

const BackgroundBlogImg = styled.img`
    width: 100%;
    height: auto;
    margin-top: -260px;
`;

const PostContainer = styled.div`
    width: 60%;
    height: auto;
    display: flex;
    flex-direction: column;
    border: 2px solid #c5b56b;
    border-radius: 20px ;
    margin: 40px 0;
`;

const PostHeader = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const PostAuthor = styled.span`
    margin: 10px 0;
    border-bottom: 2px solid #c5b56b;
`;

const PostDate = styled.span`
    margin: 10px 0;
    color: grey;
    border-bottom: 2px solid #c5b56b;
`;

const PostContent = styled.div`
    margin: 40px 20px 20px 20px;
    text-align: center;
`;

function Blog () {

    const currentUser = JSON.parse(localStorage.getItem("userData"));
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const getUsers = () => {
            setIsLoading(true);
            fetch(`https://63a5c805f8f3f6d4abffbcce.mockapi.io/api/tribers/user`)
            .then(function (resp) {
                return resp.json();
            }).then(function (data) {
                setUsers(data);
                setIsLoading(false);
            }).catch(function (err) {
                console.log( err);
                setError("Oups, une erreur est survenue à la récupération des utilisateurs!!!!")
            });
        }
        const getPosts = () => {
            setIsLoading(true);
            fetch(`https://63a5c805f8f3f6d4abffbcce.mockapi.io/api/tribers/posts`)
            .then(function (resp) {
                return resp.json();
            }).then(function (data) {
                setPosts(data);
                setIsLoading(false);
            }).catch(function (err) {
                console.log( err);
                setError("Oups, une erreur est survenue à la récupération des posts!!")
            });
        }
        getUsers();
        getPosts();
    }, []);

    posts.forEach((post) => {
        for(const user of users) {
            if (post.userId === user.id) {
                post.name = `${user.firstName + " " + user.lastName}`;
            }
        }
        if (post.userId === currentUser.id) {
            post.name = "Vous";
        }
    })

    if (error !== "") {
        return (
            <BlogContainer>
                <BlogTitle>{error}</BlogTitle>
            </BlogContainer>
        )
    }

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

export default Blog;