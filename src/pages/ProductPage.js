import React, { useState } from 'react';

import construction1 from "../assets/produits/construction1.png";
import construction2 from "../assets/produits/construction2.png";
import construction3 from "../assets/produits/construction3.png";
import construction4 from "../assets/produits/construction4.png";
import quincaillerie1 from "../assets/produits/quincaillerie1.png";
import quincaillerie2 from "../assets/produits/quincaillerie2.png";
import quincaillerie3 from "../assets/produits/quincaillerie3.png";
import quincaillerie4 from "../assets/produits/quincaillerie4.png";
import tamer0 from "../assets/produits/Tamer/tamer0.png";
import tamer1 from "../assets/produits/Tamer/tamer1.png";
import tamer2 from "../assets/produits/Tamer/tamer2.png";
import tamer3 from "../assets/produits/Tamer/tamer3.png";
import tamer4 from "../assets/produits/Tamer/tamer4.png";
import tamer5 from "../assets/produits/Tamer/tamer5.png";
import tamer6 from "../assets/produits/Tamer/tamer6.png";
import tamer7 from "../assets/produits/Tamer/tamer7.png";
import tamer8 from "../assets/produits/Tamer/tamer8.png";

import { useTranslation } from "react-i18next";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const products = {
    "Agro-alimentaires": [tamer0, tamer1, tamer2, tamer3, tamer4, tamer5, tamer6, tamer7, tamer8],
    "Matériaux de construction": [construction1, construction2, construction3, construction4],
    "Articles Quincailleries": [quincaillerie1, quincaillerie2, quincaillerie3, quincaillerie4],
};

const ProductPage = () => {
    const [activeTab, setActiveTab] = useState("Agro-alimentaires");
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [selectedImages, setSelectedImages] = useState([]);
    const { t } = useTranslation();

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setSelectedImageIndex(null); // Close any open image modal when switching tabs
    };

    const openImageModal = (imgSrcIndex) => {
        setSelectedImages(products[activeTab]);
        setSelectedImageIndex(imgSrcIndex);
    };

    const closeModal = () => {
        setSelectedImageIndex(null);
    };

    return (
        <div id="produits" className="min-h-screen bg-white p-4 sm:p-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">{t("products")}</h1>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center space-x-4 sm:space-x-8 mb-4 sm:mb-8">
                {Object.keys(products).map((category) => (
                    <button
                        key={category}
                        className={`px-2 py-1 sm:px-4 sm:py-2 font-semibold text-sm sm:text-base ${activeTab === category ? "text-blue-600 border-b-4 border-blue-600" : "text-gray-600"}`}
                        onClick={() => handleTabChange(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {products[activeTab].map((imageSrc, index) => (
                    <img
                        key={index}
                        src={imageSrc}
                        alt={`Product ${index}`}
                        className="w-full h-40 sm:h-[320px] object-cover rounded-lg shadow-lg cursor-pointer transform scale-95 hover:scale-100 transition-transform duration-300"
                        onClick={() => openImageModal(index)}
                    />
                ))}
            </div>

            {/* Modal for enlarged image */}
            {selectedImageIndex !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={closeModal}>
                    <div className="relative bg-white p-4 rounded-lg max-w-[90%] max-h-[90%]" onClick={(e) => e.stopPropagation()}>
                        <Carousel
                            selectedItem={selectedImageIndex} // Start at the clicked image
                            showThumbs={false}
                            autoPlay={false}
                            infiniteLoop={true}
                            emulateTouch={true}
                            showStatus={false}
                            onChange={(index) => setSelectedImageIndex(index)} // Update the selected image index
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
