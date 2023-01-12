import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";

export function Redirect() {

    const [time, setTime] = useState(3);
    const timeout = useRef(0);
    const navigate = useNavigate();

    useEffect(() => {
        clearTimeout(timeout.current);

        timeout.current = setTimeout(() => {
            setTime((t) => t-1);
        }, 1000);

        time == 0 && navigate('/');

        return () => {
            clearTimeout(timeout.current);
        }
    }, [time])

    return (
        <h2>Get out of here in: {time}</h2>
    )
}