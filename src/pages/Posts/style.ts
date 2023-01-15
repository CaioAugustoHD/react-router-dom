import styled from "styled-components";

export const PostsContainer = styled.div`
    padding: 0 28%;

    @media (max-width: ${({theme}) => theme.breakpoint}) {
        padding: 1em 14%; 
    }
`;