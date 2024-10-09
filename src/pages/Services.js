import bcard from "../assets/bcard.png";
import { FaShip, FaPlane, FaTrain, FaTruck } from "react-icons/fa";
import {useTranslation} from "react-i18next";

const Services = () => {
    const {t} = useTranslation();
    return (
        <>
            <div id="secondPage" className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-white py-10 px-5">
                <div className="lg:w-1/2 flex justify-center mb-10 lg:mb-0 transform transition duration-500 hover:scale-90">
                    <img src={bcard} alt="SCIT" className="scale-125 sm:mb-0 mb-16 sm:scale-95 object-cover rounded-lg shadow-lg w-full lg:w-auto max-w-xs lg:max-w-none" />
                </div>
                <div className="sm:ml-20 lg:w-1/2 px-6 lg:px-12 text-white rounded-lg p-8">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center lg:text-left text-black">{t('Title')}</h1>
                    <p className="text-base sm:text-lg mb-6 text-center lg:text-left text-black">{t('ServicesTitle')}</p>
                    <div className="grid grid-cols-2 gap-8">
                        <div className="flex items-center space-x-4">
                            <FaShip className="text-orange-700 text-2xl sm:text-3xl" />
                            <p className="text-lg sm:text-xl font-medium text-black">{t('Fret maritime')}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaTrain className="text-orange-700 text-2xl sm:text-3xl" />
                            <span className="text-lg sm:text-xl font-medium text-black">{t('Fret ferroviaire')}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaPlane className="text-orange-700 text-2xl sm:text-3xl" />
                            <span className="text-lg sm:text-xl font-medium text-black">{t('Fret aérien')}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaTruck className="text-orange-700 text-2xl sm:text-3xl" />
                            <span className="text-lg sm:text-xl font-medium text-black">{t('Fret terrestre')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;
