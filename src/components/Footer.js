import React from 'react';
import {FaFacebook, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaWhatsapp} from 'react-icons/fa'; // Import social media icons
import { useTranslation } from 'react-i18next'; // Import translation hook

const Footer = () => {
    const { t } = useTranslation(); // Translation hook

    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto text-center">
                <div className="mb-4">
                    <h3 className="text-xl font-bold">Rayacomint</h3>
                    <p className="text-gray-400">Une Société Du Commerce de confiance en Tunisie rapport qualité-prix.</p>
                </div>

                <div className="flex justify-center space-x-4 mb-4">
                    <a href="https://www.facebook.com/profile.php?id=61565503229877" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={30} className="hover:text-blue-500 transition duration-200" />
                    </a>
                    <a href="https://wa.me/21620454005" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp size={30} className="hover:text-blue-600 transition duration-200" />
                    </a>
                </div>

                <div className="text-gray-400">
                    <p><FaEnvelope size={25} className="inline-block mr-2" />rayacomint@gmail.com</p>
                    <p><FaMapMarkerAlt size={25} className="inline-block mr-2" />Rue Khairedin Becha Montplaisir, 1073 Beb Bhar</p>
                </div>

                <div className="mt-4 text-gray-500">
                    <p>{new Date().getFullYear()} All &copy; Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
