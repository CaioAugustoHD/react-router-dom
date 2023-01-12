import { Link, Outlet, useParams, useSearchParams } from "react-router-dom"
import JSONposts from "./posts.json"

interface PostProps {
    id: number,
    title: string,
    text: string
}

export function Posts() {

    const params = useParams();
    const [qs, setQs] = useSearchParams();

    const posts = JSONposts.posts;

    return (
        <div>
            <h2>Post - {`Params: ${params.id}`} {`| QS Page: ${qs.get('page')}`}</h2>

            <ul>
                {posts.map((post: PostProps) => {
                    return <li key={post.id}><Link to={`/posts/${post.id}`} state={{id: post.id, title: post.title, text: post.text}}>{post.title}</Link></li>
                })}
            </ul>

            <Outlet/>
        </div>
    )
}