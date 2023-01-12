import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "./components/Header"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Home } from "./pages/Home"
import { Post } from "./pages/Post"
import { Redirect } from "./pages/Redirect"

export function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/posts/:id" element={<Post/>}/>
        <Route path="/posts" element={<Post/>}/>
        <Route path="/redirect" element={<Redirect/>}/>
      </Routes>
    </BrowserRouter>
  )
}
