import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import NotFound from "./pages/NotFound"
import NavBar from "./components/NavBar"

function App() {

  return (
    <>
      <BrowserRouter>
        {/* Vai ser exibido em todas as páginas da aplicação, independente da rota */}
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mim" element={<AboutMe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
