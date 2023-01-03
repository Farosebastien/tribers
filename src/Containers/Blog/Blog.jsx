import Background from "../../Images/background_blogsection.webp";
import styled from "styled-components";

const BlogContainer = styled.section`
    margin: 0;
`;

const BlogTitle = styled.h1`
    color: #c5b56b;
    text-align: center;
`;

const BackgroudBlogImg = styled.img`
    width: 100%;
    height: auto;
`;

function Blog () {

    return (
        <BlogContainer>
            <BlogTitle>Le Blog</BlogTitle>
            <BackgroudBlogImg src={Background} alt="image de voyageurs" />
        </BlogContainer>
    )
}

export default Blog;