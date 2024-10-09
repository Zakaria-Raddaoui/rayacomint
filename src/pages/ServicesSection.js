import { useState } from 'react';
import {useTranslation} from "react-i18next";
import commercial from '../assets/commercial.png';
import transit from '../assets/transit.png';
import logistique from '../assets/logistique.png';

const ServicesSection = () => {
    const [activeTab, setActiveTab] = useState('Commercial');
    const {t} = useTranslation();
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <section id="services" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">{t('services')}</h2>

                <div className="flex flex-col md:flex-row justify-center mb-6">
                    <button
                        className={`mx-4 py-2 font-semibold text-xl flex items-center ${activeTab === 'Commercial' ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}
                        onClick={() => handleTabClick('Commercial')}
                    >
                        <span className="mr-2">👥</span> COMMERCIAL
                    </button>
                    <button
                        className={`mx-4 py-2 font-semibold text-xl flex items-center ${activeTab === 'Transit & Transport' ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}
                        onClick={() => handleTabClick('Transit & Transport')}
                    >
                        <span className="mr-2">🚛</span> TRANSIT & TRANSPORT
                    </button>
                    <button
                        className={`mx-4 py-2 font-semibold text-xl flex items-center ${activeTab === 'Logistique' ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}
                        onClick={() => handleTabClick('Logistique')}
                    >
                        <span className="mr-2">📦</span> {t('logistique')}
                    </button>
                </div>

                {activeTab === 'Commercial' && (
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4">
                            {t('TitleService2')}
                        </h3>
                        <p className="text-lg mb-6 max-w-4xl mx-auto">
                            "{t('SousTitle')}"
                        </p>
                        <img
                            src={commercial}
                            alt="Commercial Service"
                            className="sm:w-1/2 mx-auto"
                        />
                    </div>
                )}

                {activeTab === 'Transit & Transport' && (
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4">
                            {t('TransitDesc')}
                        </h3>
                        <p className="text-lg mb-6 max-w-4xl mx-auto">
                            {t('TransitText')}
                        </p>
                        <img
                            src={transit}
                            alt="Transit & Transport Service"
                            className="sm:w-1/2 mx-auto"
                        />
                    </div>
                )}

                {activeTab === 'Logistique' && (
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4">
                            {t('LogisticDesc')}
                        </h3>
                        <p className="text-lg mb-6 max-w-4xl mx-auto">
                            {t('LogisticText')}
                        </p>
                        <img
                            src={logistique}
                            alt="Logistique Service"
                            className="sm:w-1/2 mx-auto"
                        />
                    </div>
                )}
            </div>
        </section>
    );
};

export default ServicesSection;
