import styled from "styled-components";

export const PostContainer = styled.div`
    border: 1px solid ${({theme}) => theme.colors.text};
    width: 40%;
    margin: 4em auto 0;
`;

export const Text = styled.p`
    color: ${({theme}) => theme.colors.text};
    text-align: center;
    margin-bottom: 1.5em;
`; 