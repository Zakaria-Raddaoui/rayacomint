import React from 'react';
import Navbar from '../components/Navbar';
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import ServicesSection from './ServicesSection';
import Testimonial from './Testimonial';
import CEO from "./CEO";
import ProductPage from "./ProductPage";
import ContactForm from "./ContactForm";
import FloatingButtons from "../components/FloatingButtons";
import PartnersPage from "./PartnersPage";
import Footer from "../components/Footer";

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
            <CEO/>
            <ProductPage/>
            <PartnersPage />
            <ContactForm/>
            <FloatingButtons />
            <Footer/>
        </>
    );
}

export default Root;
