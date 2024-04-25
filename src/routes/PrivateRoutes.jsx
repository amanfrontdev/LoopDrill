import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from '../pages/Contact'
import Education from '../pages/Education'
import Services from '../pages/Services'
import About from '../pages/About'
import Home from '../pages/Home'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PrivateRoutes = () => {
    return (
        <>
            <div className='bg-customPurple'><Navbar /></div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/education" element={<Education />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <div className='bg-customPurple'><Footer /></div>
        </>
    )
}

export default PrivateRoutes
