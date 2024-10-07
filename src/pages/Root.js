import React from 'react';
import Navbar from '../components/Navbar';
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import ServicesSection from './ServicesSection';
import Testimonial from './Testimonial';
import CEO from "./CEO";
import ProductPage from "./ProductPage";

const Root = () => {

    return (
        <>
            <nav>
                <Navbar/>
            </nav>
            <Home/>
            <Services/>
            <About/>
            <ServicesSection/>
            <Testimonial/>
            <CEO/>
            <ProductPage/>
        </>
    );
}

export default Root;
