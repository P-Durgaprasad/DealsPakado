import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SelectBrand from './Components/HomeComponent/SelectBrand';
import Footer from './Components/FooterComponent/Footer';
import DealsDisplay from './Components/HomeComponent/DealsDisplay';
import SelectProduct from './Components/HomeComponent/SelectProduct';
import TitleSearch from './Components/HomeComponent/TitleSearch';

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
const ServerDown =lazy(() => import('./Components/HomeComponent/ServerDown'));


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div c>Loading...</div>}>
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/deals" element={<DealsDisplay />} />
            <Route path="/mobiles" element={<Mobiles />} />
            <Route path="/fashion" element={<Fashion />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/furniture" element={<Furniture />} />
            <Route path="/appliances" element={<Appliances />} />
            <Route path="/grocery" element={<Soon />} />
            <Route path="/under99" element={<Under99 />} />
            <Route path="/coupon" element={<Coupon />} />
            <Route path='/brand/:brandName' element={<SelectBrand />} />
            <Route path='/product/:ProductName' element={<SelectProduct />} />
            <Route path='/babyitems' element={<Baby />} />
            <Route path='/sports' element={<Sports />} />
            <Route path="/server-down" element={<ServerDown />} />
            <Route path="/buyAt/:title" element={<TitleSearch />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
