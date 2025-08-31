
import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Components/pages/Home.jsx'
import HotelListing from './Components/pages/Hotels.jsx'
import BusinessListingPage from './Components/pages/Restaurant.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="Restaurant" element={<BusinessListingPage />} />
        <Route path="Hotel" element={<HotelListing />} />
        <Route path="Home" element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
