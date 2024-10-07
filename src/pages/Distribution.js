import React, {useState} from 'react';
import logo from "../assets/logo.png";
import enFlag from "../assets/en.png";
import frFlag from "../assets/fr.png";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Distribution = () => {
    const {i18n} = useTranslation();
    const {t} = useTranslation();
    const [isOpen, setIsOpen] = useState(false); // State for dropdown visibility

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); // Changes the language dynamically
        setIsOpen(false);
    };

    const scrollToServices = () => {
        // Scroll to the services section
        window.scrollTo({top: document.getElementById('services').offsetTop, behavior: 'smooth'});
    };
    return (
        <>
            <header className='flex items-center justify-center space-x-24 bg-white h-[65px] w-full z-10 fixed top-0'>
                {/* Logo or Title */}
                <div className='flex size-20 items-center mr-10 mb-1'>
                    <Link to="/"
                          className="text-gray-700 hover:text-red-600 font-medium text-lg transition-colors duration-300 relative">{
                        <img src={logo} alt="logo"/>}
                    </Link>
                </div>


                {/* Language Selector */}
                <div className="mr-10 ml-20 relative inline-block text-left">
                    <div>
                        <button
                            type="button"
                            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                            aria-expanded={isOpen}
                            aria-haspopup="true"
                            onClick={() => setIsOpen(!isOpen)} // Toggle dropdown on click
                        >
                            {i18n.language === 'en' ? (
                                <>
                                    <img src={enFlag} alt="English" className="h-4 w-4 mr-1 mt-1"/>
                                    <div className="text-base">English</div>
                                </>
                            ) : (
                                <>
                                    <img src={frFlag} alt="Français" className="h-4 w-4 mr-1 mt-1"/>
                                    <div className="text-base">Français</div>
                                </>
                            )}
                            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                 fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd"
                                      d="M5.23 7.21a.75.75 0 011.06 0L10 10.44l3.71-3.23a.75.75 0 111.06 1.06l-4.25 3.5a.75.75 0 01-1.06 0l-4.25-3.5a.75.75 0 010-1.06z"
                                      clipRule="evenodd"/>
                            </svg>
                        </button>
                    </div>

                    {/* Dropdown Menu */}
                    {isOpen && (
                        <div
                            className="absolute right-0 z-10 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1" role="menu" aria-orientation="vertical"
                                 aria-labelledby="options-menu">
                                <button
                                    onClick={() => changeLanguage('en')}
                                    className="flex items-center block px-4 py-2 text-base text-gray-700 hover:bg-gray-100 w-full text-left"
                                    role="menuitem"
                                >
                                    <img src={enFlag} alt="English" className="h-5 w-5 mr-2"/>
                                    English
                                </button>
                                <button
                                    onClick={() => changeLanguage('fr')}
                                    className="flex items-center block px-4 py-2 text-base text-gray-700 hover:bg-gray-100 w-full text-left"
                                    role="menuitem"
                                >
                                    <img src={frFlag} alt="Français" className="h-5 w-5 mr-2"/>
                                    Français
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Navigation Links */}
                <nav className='flex items-center gap-16'>
                    <Link to="/"
                          className="text-gray-700 hover:text-red-600 font-medium text-lg transition-colors duration-300 relative">{t('home')}
                    </Link>

                    <Link
                        to="/"
                        id="services"
                        onClick={scrollToServices}
                        className="text-gray-700 hover:text-red-600 font-medium text-lg transition-colors duration-300"
                    >
                        {t('services')}
                    </Link>

                    <a
                        href="#produits"
                        className='text-gray-700 hover:text-red-600 font-medium text-lg transition-colors duration-300 relative'
                    >
                        {t('products')}
                        <span
                            className="block h-[2px] bg-red-600 scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left absolute left-0 bottom-[-2px] w-full"></span>
                    </a>


                    <Link to="/distribution"
                          className="text-gray-700 hover:text-red-600 font-medium text-lg transition-colors duration-300 relative">{t('distribution')}</Link>

                    <a
                        href="#partners"
                        className='text-gray-700 hover:text-red-600 font-medium text-lg transition-colors duration-300 relative'
                    >
                        {t('partners')}
                        <span
                            className="block h-[2px] bg-red-600 scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left absolute left-0 bottom-[-2px] w-full"></span>
                    </a>

                    <a
                        href="#contact"
                        className='text-gray-700 hover:text-red-600 font-medium text-lg transition-colors duration-300 relative'
                    >
                        {t('contact')}
                        <span
                            className="block h-[2px] bg-red-600 scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left absolute left-0 bottom-[-2px] w-full"></span>
                    </a>
                </nav>
            </header>
            <h1 className="mt-20 ml-20 justify-center items-center text-black font-bold text-4xl">Distribution:</h1>
        </>
    );
};

export default Distribution;
