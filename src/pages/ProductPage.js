import React, { useState } from 'react';
import agro1 from "../assets/produits/agro1.png";
import agro2 from "../assets/produits/agro2.png";
import agro3 from "../assets/produits/agro3.png";
import agro4 from "../assets/produits/agro4.png";
import construction1 from "../assets/produits/construction1.png";
import construction2 from "../assets/produits/construction2.png";
import construction3 from "../assets/produits/construction3.png";
import construction4 from "../assets/produits/construction4.png";
import quincaillerie1 from "../assets/produits/quincaillerie1.png";
import quincaillerie2 from "../assets/produits/quincaillerie2.png";
import quincaillerie3 from "../assets/produits/quincaillerie3.png";
import quincaillerie4 from "../assets/produits/quincaillerie4.png";
import {useTranslation} from "react-i18next";


const products = {
    "Agro-alimentaires": [
        agro1, agro2, agro3, agro4
    ],
    "Matériaux de construction": [
        construction1, construction2, construction3, construction4
    ],
    "Articles Quincailleries": [
        quincaillerie1, quincaillerie2, quincaillerie3, quincaillerie4
    ],
};

const ProductPage = () => {
    const [activeTab, setActiveTab] = useState("Agro-alimentaires");
    const [selectedImage, setSelectedImage] = useState(null);
    const { t } = useTranslation();


    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setSelectedImage(null);  // Close any open image modal when switching tabs
    };

    const openImageModal = (imgSrc) => {
        setSelectedImage(imgSrc);
    };

    const closeModal = () => {
        setSelectedImage(null);
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
                        onClick={() => openImageModal(imageSrc)}
                    />
                ))}
            </div>

            {/* Modal for enlarged image */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="relative bg-white p-4 rounded-lg">
                        <button className="absolute top-2 right-2 text-gray-700" onClick={closeModal}>
                            ✖
                        </button>
                        <img src={selectedImage} alt="Enlarged product" className="w-full h-full object-cover"/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductPage;
