import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

const Home = lazy(() => import('./Components/HomeComponent/Home'));
const Navbar = lazy(() => import('./Components/NavbarComponent/Navbar'));
const Header = lazy(() => import('./Components/HeaderComponent/Header'));
const About = lazy(() => import('./Components/NavbarComponent/About'));
const Contact = lazy(() => import('./Components/NavbarComponent/Contact'));
const Mobiles = lazy(() => import('./Components/NavbarComponent/Mobiles'));
const Electronics = lazy(() => import('./Components/NavbarComponent/Electronics'));
const Furniture = lazy(() => import('./Components/NavbarComponent/Furniture'));
const Appliances = lazy(() => import('./Components/NavbarComponent/Appliances'));
const Soon = lazy(() => import('./Components/NavbarComponent/Grocery'));
const Under99 = lazy(() => import('./Components/NavbarComponent/Under99'));
const Fashion = lazy(() => import('./Components/NavbarComponent/Fashion'));
const Coupon = lazy(() => import('./Components/NavbarComponent/Coupon'));
const Sports = lazy(() => import('./Components/NavbarComponent/Sports'));
const Baby = lazy(() => import('./Components/NavbarComponent/Baby'));
const ServerDown = lazy(() => import('./Components/HomeComponent/ServerDown'));
const SelectBrand = lazy(() => import('./Components/HomeComponent/SelectBrand'));
const DealsDisplay = lazy(() => import('./Components/HomeComponent/DealsDisplay'));
const SelectProduct = lazy(() => import('./Components/HomeComponent/SelectProduct'));
const TitleSearch = lazy(() => import('./Components/HomeComponent/TitleSearch'));
const Footer = lazy(() => import('./Components/FooterComponent/Footer'));

const CustomLoadingSpinner = () => (
  <div className="loading-spinner">
    <div className="spinner"></div>
  </div>
);

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/deals", element: <DealsDisplay /> },
  { path: "/mobiles", element: <Mobiles /> },
  { path: "/fashion", element: <Fashion /> },
  { path: "/electronics", element: <Electronics /> },
  { path: "/furniture", element: <Furniture /> },
  { path: "/appliances", element: <Appliances /> },
  { path: "/grocery", element: <Soon /> },
  { path: "/under99", element: <Under99 /> },
  { path: "/coupon", element: <Coupon /> },
  { path: '/brand/:brandName', element: <SelectBrand /> },
  { path: '/product/:ProductName', element: <SelectProduct /> },
  { path: '/babyitems', element: <Baby /> },
  { path: '/sports', element: <Sports /> },
  { path: "/server-down", element: <ServerDown /> },
  { path: "/buyAt/:title", element: <TitleSearch /> },
];

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<CustomLoadingSpinner />}>
          <Header />
          <Navbar />
          <Routes>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
