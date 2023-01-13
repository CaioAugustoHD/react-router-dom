import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Posts } from "./pages/Posts";
import { Post } from "./pages/Posts/Post";
import { Redirect } from "./pages/Redirect";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/posts" element={<Posts />}>
                    <Route path=":id" element={<Post />} />
                </Route>
                <Route path="/redirect" element={<Redirect />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}