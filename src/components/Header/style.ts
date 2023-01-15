import styled from "styled-components";

export const HeaderContainer = styled.header`
    padding: 1em 25%;

    @media (max-width: ${({theme}) => theme.breakpoint}) {
        padding: 1em 4%; 
    }
`;