import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Footer from "./components/Footer";
import MainLayout from "./components/MainLayout";
import NavBar from "./components/NavBar";

// Home carrega direto (sem lazy), pois é a rota principal e deve ser rápida
import Home from "./pages/Home";

// Lazy loading nas demais páginas
const AboutMe = lazy(() => import("./pages/AboutMe"));
const Post = lazy(() => import("./pages/Post"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <BrowserRouter>
      {/* Vai ser exibido em todas as páginas da aplicação, independente da rota */}
      <NavBar />

      {/* Suspense controla o carregamento das rotas lazy */}
      <Suspense fallback={<div>Carregando...</div>}>
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
      </Suspense>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
