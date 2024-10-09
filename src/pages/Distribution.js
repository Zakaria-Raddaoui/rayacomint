import React, { useState } from 'react';
import distribution from "../assets/distribution.png"; // Ensure the path is correct
import Navbar from "../components/Navbar";

const Distribution = () => {
    const [zoom, setZoom] = useState(1);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left; // Get X position relative to the image
        const y = e.clientY - rect.top; // Get Y position relative to the image
        setMousePosition({ x, y });
        setZoom(1.8); // Zoom level adjustment
    };

    const handleMouseLeave = () => {
        setZoom(1); // Reset zoom when the mouse leaves
    };

    return (
        <>
            <Navbar />
            <h1 className="mt-20 justify-center text-center text-black font-bold text-4xl">Distribution:</h1>
            <div
                className="flex justify-center items-center overflow-hidden"
                style={{ height: 'calc(100vh - 150px)' }} // Adjust height for the screen minus navbar/title
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <div
                    className="relative"
                    style={{
                        width: '90%', // Container width
                        maxWidth: '1800px', // Limit the max width of the image
                        maxHeight: '1600px', // Limit the max height of the image
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

            {/* Add media query CSS adjustments for responsiveness */}
            <style jsx>{`
                @media (max-width: 768px) {
                    h1 {
                        font-size: 2rem; // Adjust heading size for mobile
                    }
                    .relative {
                        width: 100%; // Make the image container full width on mobile
                        height: auto; // Let the image container auto-resize based on content
                    }
                    img {
                        max-height: 500px; // Limit image height for mobile screens
                    }
                }
            `}</style>
        </>
    );
};

export default Distribution;
