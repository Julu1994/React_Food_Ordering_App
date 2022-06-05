import React from 'react'
import Navbar from '../Components/navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Home() {
    return (
        <div>
            <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" />
            </Routes>
        </BrowserRouter>
        </div>
    )
}

export default Home; 