import { useParams, useSearchParams } from "react-router-dom"

export function Post() {

    const params = useParams();
    const [qs, setQs] = useSearchParams();

    return (
        <h2>Post - {`Params: ${params.id}`} {`| QS Page: ${qs.get('page')}`}</h2>
    )
}