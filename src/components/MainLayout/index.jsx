import { Outlet } from "react-router-dom";
import Banner from "../Banner";

const MainLayout = () => {
  return (
    <main>
      <Banner />
      {/* Outlet é onde as páginas filhas serão renderizadas */}
      <Outlet />
    </main>
  );
};

export default MainLayout;
