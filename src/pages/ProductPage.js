import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import tamer0 from "../assets/produits/Tamer/tamer0.png";
import tamer1 from "../assets/produits/Tamer/tamer1.png";
import tamer2 from "../assets/produits/Tamer/tamer2.png";
import tamer3 from "../assets/produits/Tamer/tamer3.png";
import tamer4 from "../assets/produits/Tamer/tamer4.png";
import tamer5 from "../assets/produits/Tamer/tamer5.png";
import tamer6 from "../assets/produits/Tamer/tamer6.png";
import tamer7 from "../assets/produits/Tamer/tamer7.png";
import tamer8 from "../assets/produits/Tamer/tamer8.png";
import tamer9 from "../assets/produits/Tamer/tamer9.png";

import quincaillerie1 from "../assets/produits/quincailleries/quincailleries1.png";
import quincaillerie2 from "../assets/produits/quincailleries/quincailleries2.png";
import quincaillerie3 from "../assets/produits/quincailleries/quincailleries3.png";
import quincaillerie4 from "../assets/produits/quincailleries/quincailleries4.png";
import quincaillerie5 from "../assets/produits/quincailleries/quincailleries5.png";
import quincaillerie6 from "../assets/produits/quincailleries/quincailleries6.png";
import quincaillerie7 from "../assets/produits/quincailleries/quincailleries7.png";
import quincaillerie8 from "../assets/produits/quincailleries/quincailleries8.png";

import construction1 from "../assets/produits/construction/const1.png";
import construction2 from "../assets/produits/construction/const2.png";
import construction3 from "../assets/produits/construction/const3.png";
import construction4 from "../assets/produits/construction/const4.png";
import construction5 from "../assets/produits/construction/const5.png";

import hygiene1 from "../assets/produits/hygiene/hygiene1.png";
import hygiene2 from "../assets/produits/hygiene/hygiene2.png";
import hygiene3 from "../assets/produits/hygiene/hygiene3.png";
import hygiene4 from "../assets/produits/hygiene/hygiene4.png";

import cosm1 from "../assets/produits/cosmetique/cosm1.png";
import cosm2 from "../assets/produits/cosmetique/cosm2.png";
import cosm3 from "../assets/produits/cosmetique/cosm3.png";
import cosm4 from "../assets/produits/cosmetique/cosm4.png";

import sanitaire1 from "../assets/produits/sanitaire/sanitaire1.png";
import sanitaire2 from "../assets/produits/sanitaire/sanitaire2.png";
import sanitaire3 from "../assets/produits/sanitaire/sanitaire3.png";
import sanitaire4 from "../assets/produits/sanitaire/sanitaire4.png";
import sanitaire5 from "../assets/produits/sanitaire/sanitaire5.png";
import sanitaire6 from "../assets/produits/sanitaire/sanitaire6.png";
import sanitaire7 from "../assets/produits/sanitaire/sanitaire7.png";

import inox1 from "../assets/produits/inox/inox1.png";
import inox2 from "../assets/produits/inox/inox2.png";
import inox3 from "../assets/produits/inox/inox3.png";
import inox4 from "../assets/produits/inox/inox4.png";

import hygiened1 from "../assets/produits/hygieneDentretien/hygieneDentretien1.png";
import hygiened2 from "../assets/produits/hygieneDentretien/hygieneDentretien2.png";
import hygiened3 from "../assets/produits/hygieneDentretien/hygieneDentretien3.png";
import hygiened4 from "../assets/produits/hygieneDentretien/hygieneDentretien4.png";
import hygiened5 from "../assets/produits/hygieneDentretien/hygieneDentretien5.png";

import divers1 from "../assets/produits/divers/divers1.png";
import divers2 from "../assets/produits/divers/divers2.png";
import divers3 from "../assets/produits/divers/divers3.png";
import divers4 from "../assets/produits/divers/divers4.png";


const products = {
    "Agro-alimentaires": [tamer0, tamer1, tamer2, tamer3, tamer4, tamer5, tamer6, tamer7, tamer8, tamer9], /* */
    "Matériaux de construction": [construction1, construction2, construction3, construction4, construction5], /* */
    "Articles Quincailleries": [quincaillerie1, quincaillerie2, quincaillerie3, quincaillerie4, quincaillerie5, quincaillerie6, quincaillerie7, quincaillerie8], /* */
    "Hygiènes féminines & Couches bébés": [hygiene1, hygiene2, hygiene3, hygiene4], /* */
    "Produits cosmétiques": [cosm1, cosm2, cosm3, cosm4], /* */
    "Sanitaires": [sanitaire1, sanitaire2, sanitaire3, sanitaire4, sanitaire5, sanitaire6, sanitaire7], /* */
    "Inox": [inox1, inox2, inox3, inox4],/* */
    "Produits hygiéniques & d’entretien": [hygiened1, hygiened2, hygiened3, hygiened4, hygiened5], /* */
    "Divers": [divers1, divers2, divers3, divers4], /* */
};

const ProductPage = () => {
    const [activeTab, setActiveTab] = useState("Agro-alimentaires");
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [selectedImages, setSelectedImages] = useState([]);
    const { t } = useTranslation();

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setSelectedImageIndex(null);
    };

    const openImageModal = (imgSrcIndex) => {
        setSelectedImages(products[activeTab]);
        setSelectedImageIndex(imgSrcIndex);
    };

    const closeModal = () => {
        setSelectedImageIndex(null);
    };

    return (
        <div id="produits" className="min-h-screen bg-white p-4 sm:p-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">{t("products")}</h1>

            {/* Tabs with horizontal scrolling on mobile */}
            <div className="mb-4 sm:mb-8">
                <div className="flex space-x-4 sm:space-x-8 overflow-x-auto sm:overflow-visible pb-2">
                    {Object.keys(products).map((category) => (
                        <button
                            key={category}
                            className={`px-2 py-1 sm:px-4 sm:py-2 font-semibold text-sm sm:text-base whitespace-nowrap ${activeTab === category ? "text-blue-600 border-b-4 border-blue-600" : "text-gray-600"}`}
                            onClick={() => handleTabChange(category)}
                        >
                            {t(category)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid for displaying products */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-4">
                {products[activeTab].map((imageSrc, index) => (
                    <img
                        key={index}
                        src={imageSrc}
                        alt={`Product ${index}`}
                        className="w-full h-40 sm:h-[250px] sm:w-[250px] object-cover rounded-lg shadow-lg cursor-pointer transform scale-95 hover:scale-100 transition-transform duration-300"
                        onClick={() => openImageModal(index)}
                    />
                ))}
            </div>

            {/* Modal for selected image */}
            {selectedImageIndex !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={closeModal}>
                    <div className="relative bg-white p-4 rounded-lg max-w-[90%] max-h-[90%]" onClick={(e) => e.stopPropagation()}>
                        <Carousel
                            selectedItem={selectedImageIndex}
                            showThumbs={false}
                            autoPlay={false}
                            infiniteLoop={true}
                            emulateTouch={true}
                            showStatus={false}
                            onChange={(index) => setSelectedImageIndex(index)}
                        >
                            {selectedImages.map((image, index) => (
                                <div key={index} style={{ userSelect: 'none' }}>
                                    <img src={image} alt={`Slide ${index}`} className="w-full h-auto object-contain max-h-[70vh]" />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductPage;