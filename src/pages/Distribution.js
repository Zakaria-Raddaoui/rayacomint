import React, {useState} from 'react';
import distribution from "../assets/distribution.png";
import {useTranslation} from "react-i18next";

const Distribution = () => {
    const [zoom, setZoom] = useState(1);
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
    const {t} = useTranslation();

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({x, y});
        setZoom(1.8);
    };

    const handleMouseLeave = () => {
        setZoom(1);
    };

    return (
        <>
            <header
                className='flex items-center justify-center bg-white h-[65px] w-full z-10 fixed top-0 px-4 md:px-10'>
                <div className='flex items-center justify-center h-full'>
                    <a href="/" className='text-gray-700 hover:text-red-600 font-medium text-lg'>
                        {t('home')}
                    </a>
                </div>
            </header>


            <h1 className="mt-20 justify-center text-center text-black font-bold text-4xl">{t('distribution')}:</h1>
            <div
                className="flex justify-center items-center overflow-hidden"
                style={{height: 'calc(100vh - 150px)'}}
                onMouseMove={window.innerWidth > 768 ? handleMouseMove : null}
                onMouseLeave={window.innerWidth > 768 ? handleMouseLeave : null}
            >

                <div
                    className="relative"
                    style={{
                        width: '90%',
                        maxWidth: '1800px',
                        maxHeight: '1600px',
                        overflow: 'hidden',
                    }}
                >
                    <img
                        src={distribution}
                        alt="distribution"
                        className="object-contain transition-transform duration-300"
                        style={{
                            width: '100%',
                            height: '100%',
                            transform: `scale(${zoom})`,
                            transformOrigin: `${mousePosition.x}px ${mousePosition.y}px`,
                            position: 'relative',
                        }}
                    />
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 768px) {
                    h1 {
                        font-size: 2rem;
                    }

                    .relative {
                        width: 100%;
                        height: auto;
                    }

                    img {
                        max-height: 100vh;
                        max-width: 100%;
                        transform: rotate(90deg) scale(${zoom});
                        transform-origin: center center;
                    }
                }
            `}</style>
        </>
    );
};

export default Distribution;
