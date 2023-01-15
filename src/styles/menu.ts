import styled from "styled-components";

interface MenuProps {
    space: "space-between" | "space-evenly"
}

export const Menu = styled.ul<MenuProps>`
    list-style: none;
    display: flex;
    justify-content: ${(props) => props.space};

    @media (max-width: ${({theme}) => theme.breakpoint}) {
        justify-content: space-evenly
    }
`;

export const Item = styled.li`
    * {
        text-decoration: none;
        color: ${({theme}) => theme.colors.menu};

        :hover {
            color: ${({theme}) => theme.colors.selected};
        }
    }
`;