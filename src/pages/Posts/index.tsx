import { Link, Outlet, useParams, useSearchParams } from "react-router-dom"
import { Item, Menu } from "../../styles/menu";
import { Title } from "../../styles/title";
import JSONposts from "./posts.json"
import { PostsContainer } from "./style";

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
        <PostsContainer>
            <Title>Post - {`Params: ${params.id}`} {`| QS Page: ${qs.get('page')}`}</Title>

            <Menu space="space-evenly">
                {posts.map((post: PostProps) => {
                    return <Item key={post.id}><Link to={`/posts/${post.id}`} state={{id: post.id, title: post.title, text: post.text}}>{post.title}</Link></Item>
                })}
            </Menu>

            <Outlet/>
        </PostsContainer>
    )
}