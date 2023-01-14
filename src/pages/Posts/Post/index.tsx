import { useLocation } from "react-router-dom"
import { Title } from "../../../styles/title";
import { PostContainer, Text } from "./style";

export function Post(){

    const location = useLocation();
    const { state } = location;

    return (
        <PostContainer>
            <Title>{state.title}</Title>
            <Text>{state.text}</Text>
        </PostContainer>
    )
}