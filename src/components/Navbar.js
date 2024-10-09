import logo from '../assets/logo.png';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import enFlag from '../assets/en.png';
import frFlag from '../assets/fr.png';
import prFlag from '../assets/prFlag.png';

import { useState } from 'react';

const Navbar = () => {
    const { i18n } = useTranslation();
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false); // State for dropdown visibility
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu visibility

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); // Changes the language dynamically
        setIsOpen(false);
    };

    const scrollToServices = () => {
        window.scrollTo({ top: document.getElementById('services').offsetTop, behavior: 'smooth' });
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className='flex items-center justify-between bg-white h-[65px] w-full z-10 fixed top-0 px-4 md:px-10'>
            {/* Logo */}
            <div className='flex items-center'>
                <a href="/">
                    <img src={logo} alt="logo" className='h-12' />
                </a>
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className="md:hidden">
                <button
                    type="button"
                    onClick={toggleMobileMenu}
                    className="text-gray-700 focus:outline-none"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M4 6h16M4 12h16m-7 6h7"/>
                    </svg>
                </button>
            </div>

            {/* Desktop Nav Links */}
            <nav className='hidden md:flex items-center gap-16'>
                <a href="/" className='text-gray-700 hover:text-red-600 font-medium text-lg'>
                    {t('home')}
                </a>

                <Link to="/" onClick={scrollToServices} className='text-gray-700 hover:text-red-600 font-medium text-lg'>
                    {t('services')}
                </Link>

                <a href="/#produits" className='text-gray-700 hover:text-red-600 font-medium text-lg'>
                    {t('products')}
                </a>

                <Link to="/distribution" className="text-gray-700 hover:text-red-600 font-medium text-lg">
                    {t('distribution')}
                </Link>

                <a href="/#partners" className='text-gray-700 hover:text-red-600 font-medium text-lg'>
                    {t('partners')}
                </a>

                <a href="/#contact" className='text-gray-700 hover:text-red-600 font-medium text-lg'>
                    {t('contact')}
                </a>
            </nav>

            {/* Language Selector */}
            <div className="relative">
                <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    onClick={() => setIsOpen(!isOpen)} // Toggle dropdown on click
                >
                    {i18n.language === 'en' ? (
                        <>
                            <img src={enFlag} alt="English" className="h-4 w-4 mr-1 mt-1"/>
                            <div className="text-base">English</div>
                        </>
                    ) : i18n.language === 'fr' ? (
                        <>
                            <img src={frFlag} alt="Français" className="h-4 w-4 mr-1 mt-1"/>
                            <div className="text-base">Français</div>
                        </>
                    ) : (
                        // New Portuguese Button
                        <>
                            <img src={prFlag} alt="Português" className="h-4 w-4 mr-1 mt-1"/>
                            <div className="text-base">Português</div>
                        </>
                    )}
                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                         fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06 0L10 10.44l3.71-3.23a.75.75 0 111.06 1.06l-4.25 3.5a.75.75 0 01-1.06 0l-4.25-3.5a.75.75 0 010-1.06z"
                              clipRule="evenodd"/>
                    </svg>
                </button>


                {isOpen && (
                    <div
                        className="absolute right-0 z-10 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1">
                            <button
                                onClick={() => changeLanguage('en')}
                                className="flex items-center px-4 py-2 text-base text-gray-700 hover:bg-gray-100 w-full"
                            >
                                <img src={enFlag} alt="English" className="h-5 w-5 mr-2"/>
                                English
                            </button>
                            <button
                                onClick={() => changeLanguage('fr')}
                                className="flex items-center px-4 py-2 text-base text-gray-700 hover:bg-gray-100 w-full"
                            >
                                <img src={frFlag} alt="Français" className="h-5 w-5 mr-2"/>
                                Français
                            </button>
                            <button
                                onClick={() => changeLanguage('pt')}
                                className="flex items-center px-4 py-2 text-base text-gray-700 hover:bg-gray-100 w-full"
                            >
                                <img src={prFlag} alt="Portuguese" className="h-5 w-5 mr-2"/>
                                Portuguese
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <nav
                    className='md:hidden absolute top-[65px] left-0 w-full bg-white flex flex-col items-center py-4 shadow-lg'>
                    <a href="/" className='text-gray-700 hover:text-red-600 font-medium text-lg py-2'>
                        {t('home')}
                    </a>

                    <Link to="/" onClick={scrollToServices} className='text-gray-700 hover:text-red-600 font-medium text-lg py-2'>
                        {t('services')}
                    </Link>

                    <a href="/#produits" className='text-gray-700 hover:text-red-600 font-medium text-lg py-2'>
                        {t('products')}
                    </a>

                    <Link to="/distribution" className="text-gray-700 hover:text-red-600 font-medium text-lg py-2">
                        {t('distribution')}
                    </Link>

                    <a href="/#partners" className='text-gray-700 hover:text-red-600 font-medium text-lg py-2'>
                        {t('partners')}
                    </a>

                    <a href="/contact" className='text-gray-700 hover:text-red-600 font-medium text-lg py-2'>
                        {t('contact')}
                    </a>
                </nav>
            )}
        </header>
    );
}

export default Navbar;
