import styled from "styled-components";

export const Title = styled.h2`
    margin: 1.5em auto;
    text-align: center;
    font-size: 1.6em;
    color: ${({theme}) => theme.colors.text};
    letter-spacing: 2px;
`;