import AboutUsPage from "../pages/aboutUs/AboutUsPage";
import CatalogsPage from "../pages/catalogs/CatalogsPage";
import MainPage from "../pages/MainPage";
import ProfilPage from "../pages/profil/ProfilPage";


export const routes = [
  { path: "/", element: <MainPage /> },
  { path: "/profil", element: <ProfilPage /> },
  { path: "/favourites", element: <ProfilPage /> },
  { path: '/about', element: <AboutUsPage /> },
  { path: "/catalogs", element: <CatalogsPage /> },
];
