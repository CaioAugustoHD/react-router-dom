import { useLocation } from "react-router-dom"

// interface PostProps {
//     id: number,
//     title: string,
//     text: string
// }

export function Post(){

    const location = useLocation();
    const { state } = location;

    return (
        <div>
            <h2>{state.title}</h2>
            <p>{state.text}</p>
        </div>
    )
}