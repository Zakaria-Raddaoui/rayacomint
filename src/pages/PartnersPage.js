import React, { useState, useRef } from 'react';
import Modal from 'react-modal';

import partner1 from "../assets/partners/partner1.png";
import partner2 from "../assets/partners/partner2.png";
import partner3 from "../assets/partners/partner3.png";
import partner4 from "../assets/partners/partner4.png";
import partner5 from "../assets/partners/partner5.png";
import partner6 from "../assets/partners/partner6.png";
import partner7 from "../assets/partners/partner7.png";
import partner8 from "../assets/partners/partner8.png";
import partner9 from "../assets/partners/partner9.png";
import partner10 from "../assets/partners/partner10.png";
import partner11 from "../assets/partners/partner11.png";
import partner12 from "../assets/partners/partner12.png";
import partner13 from "../assets/partners/partner13.png";
import partner14 from "../assets/partners/partner14.png";
import partner15 from "../assets/partners/partner15.png";
import partner16 from "../assets/partners/partner16.png";
import partner17 from "../assets/partners/partner17.png";
import partner18 from "../assets/partners/partner18.png";
import partner19 from "../assets/partners/partner19.png";
import partner20 from "../assets/partners/partner20.png";
import partner21 from "../assets/partners/partner21.png";
import partner22 from "../assets/partners/partner22.png";
import partner23 from "../assets/partners/partner23.png";
import partner24 from "../assets/partners/partner24.png";
import partner25 from "../assets/partners/partner25.png";
import partner26 from "../assets/partners/partner26.png";
import partner27 from "../assets/partners/partner27.png";
import partner28 from "../assets/partners/partner28.png";
import partner29 from "../assets/partners/partner29.png";
import partner30 from "../assets/partners/partner30.png";
import partner31 from "../assets/partners/partner31.png";
import partner32 from "../assets/partners/partner32.png";
import partner33 from "../assets/partners/partner33.png";
import partner34 from "../assets/partners/partner34.png";
import partner35 from "../assets/partners/partner35.png";
import partner36 from "../assets/partners/partner36.png";
import partner37 from "../assets/partners/partner37.png";
import partner38 from "../assets/partners/partner38.png";
import partner39 from "../assets/partners/partner39.png";
import partner40 from "../assets/partners/partner40.png";
import partner41 from "../assets/partners/partner41.png";
import partner42 from "../assets/partners/partner42.png";
import partner43 from "../assets/partners/partner43.png";
import partner44 from "../assets/partners/partner44.png";
import partner45 from "../assets/partners/partner45.png";
import partner46 from "../assets/partners/partner46.png";
import partner47 from "../assets/partners/partner47.png";
import partner48 from "../assets/partners/partner48.png";
import partner49 from "../assets/partners/partner49.png";
import partner50 from "../assets/partners/partner50.png";
import partner51 from "../assets/partners/partner51.png";
import partner52 from "../assets/partners/partner52.png";
import partner53 from "../assets/partners/partner53.png";
import partner54 from "../assets/partners/partner54.png";
import partner55 from "../assets/partners/partner55.png";
import partner56 from "../assets/partners/partner56.png";
import partner57 from "../assets/partners/partner57.png";
import partner58 from "../assets/partners/partner58.png";
import partner59 from "../assets/partners/partner59.png";
import partner60 from "../assets/partners/partner60.png";
import partner61 from "../assets/partners/partner61.png";
import partner62 from "../assets/partners/partner62.png";
import partner63 from "../assets/partners/partner63.png";
import partner64 from "../assets/partners/partner64.png";
import partner65 from "../assets/partners/partner65.png";
import partner66 from "../assets/partners/partner66.png";
import partner67 from "../assets/partners/partner67.png";
import partner68 from "../assets/partners/partner68.png";
import partner69 from "../assets/partners/partner69.png";
import partner70 from "../assets/partners/partner70.png";
import partner71 from "../assets/partners/partner71.png";
import { useTranslation } from "react-i18next";


const partners = {
    "": [
        partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8, partner9, partner10,
        partner11, partner12, partner13, partner14, partner15, partner16, partner17, partner18, partner19,
        partner20, partner21, partner22, partner23, partner24, partner25, partner26, partner27, partner28,
        partner29, partner30, partner31, partner32, partner33, partner34, partner35, partner36, partner37,
        partner38, partner39, partner40, partner41, partner42, partner43, partner44, partner45, partner46,
        partner47, partner48, partner49, partner50, partner51, partner52, partner53, partner54, partner55,
        partner56, partner57, partner58, partner59, partner60, partner61, partner62, partner63, partner64,
        partner65, partner66, partner67, partner68, partner69, partner70, partner71
    ]
};

const PartnersPage = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const sliderRef = useRef(null);
    const isMouseDown = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const {t} = useTranslation();

    // Modal handlers
    const openAllImages = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    // Mouse drag scrolling
    const handleMouseDown = (e) => {
        isMouseDown.current = true;
        startX.current = e.pageX - sliderRef.current.offsetLeft;
        scrollLeft.current = sliderRef.current.scrollLeft;
    };

    const handleMouseMove = (e) => {
        if (!isMouseDown.current) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX.current) * 1.5;
        sliderRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const handleMouseUp = () => (isMouseDown.current = false);

    return (
        <div id="partners" className="min-h-screen bg-white p-4 sm:p-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">Our Partners</h1>

            {/* Image slider */}
            <div
                ref={sliderRef}
                className="flex overflow-x-scroll space-x-4 py-4 scrollbar-hide"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseUp}
                style={{ cursor: isMouseDown.current ? 'grabbing' : 'grab', scrollBehavior: 'smooth' }}  // Smooth scrolling
            >
                {partners[""].map((imageSrc, index) => (
                    <div key={index} className="w-40 sm:w-56 flex-shrink-0">
                        <img src={imageSrc} alt={`Product ${index}`} className="object-contain w-full h-full" />
                    </div>
                ))}
            </div>

            {/* View all images button */}
            <div className="text-center mt-8">
                <button
                    onClick={openAllImages}
                    className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
                >
                    {t("view")}
                </button>
            </div>

            {/* Modal to show all images */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="All Images"
                className="modal-content"  // Custom modal content class
                overlayClassName="modal-overlay"  // Custom overlay
            >
                <div className="grid grid-cols-2 sm:grid-cols-6 gap-4">
                    {partners[""].map((imageSrc, index) => (
                        <div key={index} className="w-full">
                            <img src={imageSrc} alt={`Full Image ${index}`} className="object-contain w-full h-full" />
                        </div>
                    ))}
                </div>
                <button
                    onClick={closeModal}
                    className="mt-4 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition-colors"
                >
                    {t("close")}
                </button>
            </Modal>

            {/* Add custom CSS for modal popup and hiding the scrollbar */}
            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.7);  // Dark overlay background
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                }
                .modal-content {
                    background: white;
                    padding: 2rem;
                    border-radius: 0.5rem;
                    max-width: 90vw;
                    max-height: 90vh;
                    overflow-y: auto;
                    z-index: 1001;  // Ensure it's above the overlay
                    position: relative;
                }
                @media (max-width: 768px) {
                    h1 {
                        font-size: 1.5rem; // Adjust heading for mobile
                    }
                    .flex {
                        flex-wrap: nowrap; // Ensure no wrapping on mobile
                    }
                    .w-40 {
                        width: 30%; // Adjust image size on mobile
                    }
                }
            `}</style>
        </div>
    );
};

export default PartnersPage;
