import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from '../pages/Contact'
import ITEducation from '../pages/Education'
import About from '../pages/About'
import Home from '../pages/Home'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ITServices from '../pages/Services'

const PrivateRoutes = () => {
    return (
        <div className='bg-DarkBlack'>
            <div><Navbar /></div>
            <div className='bg-black'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/it-services" element={<ITServices />} />
                    <Route path="/it-education" element={<ITEducation />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
            <div className='bg-customPurple'><Footer /></div>
        </div>
    )
}

export default PrivateRoutes
