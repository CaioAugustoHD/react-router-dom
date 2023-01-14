import { Link } from "react-router-dom"
import { Item, Menu } from "../../styles/menu"
import { HeaderContainer} from "./style"

export function Header() {
    return (
        <HeaderContainer>
            <Menu space="space-between">
                <Item>
                    <Link to={"/"}>Home</Link>
                </Item>
                <Item>
                    <Link to={"/about"}>About</Link>
                </Item>
                <Item>
                    <Link to={"/contact"}>Contact</Link>
                </Item>
                <Item>
                    <Link to={"/posts"}>Posts</Link>
                </Item>
                <Item>
                    <Link to={"/redirect"}>Redirect</Link>
                </Item>
            </Menu>
        </HeaderContainer>
    )
}