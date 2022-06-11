import React from 'react'
import Navbar from './Components/navbar';
import Home from './Pages/home';
import Contact from './Pages/contact';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function Routing() {
    return (
        <div>
            <BrowserRouter>
            <Navbar />
            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={ <Contact />} />
            </Routes>
        </BrowserRouter>
        </div>
    )
}

export default Routing; 