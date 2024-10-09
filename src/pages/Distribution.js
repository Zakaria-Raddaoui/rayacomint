import React, { useState } from 'react';
import distribution from "../assets/distribution.png";
import Navbar from "../components/Navbar";

const Distribution = () => {
    const [zoom, setZoom] = useState(1);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
        setZoom(1.8);
    };

    const handleMouseLeave = () => {
        setZoom(1);
    };

    return (
        <>
            <Navbar />
            <h1 className="mt-20 justify-center text-center text-black font-bold text-4xl">Distribution:</h1>
            <div
                className="flex justify-center items-center overflow-hidden"
                style={{ height: 'calc(100vh - 150px)' }}
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
