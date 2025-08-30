import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import MainLayout from "./components/MainLayout";
import NavBar from "./components/NavBar";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Post from "./pages/Post";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Vai ser exibido em todas as páginas da aplicação, independente da rota */}
        <NavBar />

        <Routes>
          {/* Rota pai que contém o layout com Banner */}
          <Route path="/" element={<MainLayout />}>
            {/* Rotas filhas que serão renderizadas no Outlet */}
            <Route index element={<Home />} />
            <Route path="sobre-mim" element={<AboutMe />} />
            <Route path="posts/:id" element={<Post />} />
          </Route>

          {/* Rota fora do layout principal (sem Banner) */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
