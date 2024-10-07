import {useTranslation} from "react-i18next";
import plane from '../assets/plane.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/container.png';
import {useEffect, useState} from "react";

const Home = () => {
    const {t} = useTranslation();
    const images = [plane, image2, image3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // States to handle the animation on load
    const [isTitleVisible, setIsTitleVisible] = useState(false);
    const [isSubtitleVisible, setIsSubtitleVisible] = useState(false);
    const [isButtonVisible, setIsButtonVisible] = useState(false);

    // Function to go to the next image
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    // Function to go to the previous image
    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    // Auto-slide images every 6 seconds
    useEffect(() => {
        const interval = setInterval(nextImage, 6000);
        return () => clearInterval(interval);
    });

    // Trigger animation after the page loads
    useEffect(() => {
        setTimeout(() => setIsTitleVisible(true), 250);  // Title appears after 500ms
        setTimeout(() => setIsSubtitleVisible(true), 750);  // Subtitle appears after 1000ms
        setTimeout(() => setIsButtonVisible(true), 1000);  // Button appears after 1500ms
    }, []);

    return (
        <div id="Home" className="relative w-full">
            {/* Image Slider */}
            <div className="relative w-full h-[100vh] overflow-hidden">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt="slider"
                        className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'}`}
                    />
                ))}
            </div>

            {/* Dark overlay for better contrast */}
            <div className="absolute inset-0 bg-black bg-opacity-10"/>

            {/* Content over the slider */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                {/* Title */}
                <h1
                    className={`font-bold text-center text-5xl sm:text-4xl md:text-5xl sm:mb-[360px] lg:text-6xl xl:text-7xl max-w-[90%] md:max-w-[80%] lg:max-w-[60%] xl:max-w-[50%] leading-snug transition-opacity transform duration-1000 ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    {t('hometitle')}
                </h1>

                {/* Subtitle */}
                <p
                    className={`text-lg font-light sm:text-base md:text-lg sm:mb-[20px] mb-[360px] lg:text-xl mt-4 text-center transition-opacity transform duration-1000 delay-200 ${isSubtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    {t('belowtitle')}
                </p>

                {/* Button */}
                <a href="#secondPage" className="mt-4">
                    <button
                        className={`border-2 border-blue-500 bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow-lg transition transform duration-1000 ease-in-out scale-110 hover:scale-125 hover:bg-blue-600 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 ${isButtonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        aria-label="Discover"
                    >
                        {t('discover')}
                    </button>
                </a>
            </div>

            {/* Left and right navigation buttons */}
            <button
                className="scale-150 ml-4 absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black px-3 py-1 rounded-full shadow-md sm:left-2 sm:px-2 sm:py-1"
                onClick={prevImage}
            >
                &#8592;
            </button>
            <button
                className="scale-150 mr-4 absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black px-3 py-1 rounded-full shadow-md sm:right-2 sm:px-2 sm:py-1"
                onClick={nextImage}
            >
                &#8594;
            </button>
        </div>
    );
};

export default Home;
