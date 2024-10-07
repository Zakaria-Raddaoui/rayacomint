import React, { useState, useEffect, useRef } from 'react';
import { FaTruck, FaGlobe, FaUserFriends } from 'react-icons/fa'; // Icons for stats
import { useTranslation } from 'react-i18next';
import bg from '../assets/storage-container-hero.webp';

const ServicesOverview = () => {
    const { t } = useTranslation();

    // Define target numbers for each statistic
    const [deliveries, setDeliveries] = useState(0);
    const [countries, setCountries] = useState(0);
    const [teamMembers, setTeamMembers] = useState(0);
    const [animate, setAnimate] = useState(false); // State to trigger animation

    const statsRef = useRef(null); // Ref for the stats section

    // Function to animate the numbers
    const animateNumber = (finalValue, setter) => {
        let count = 0;
        const interval = setInterval(() => {
            count += Math.ceil(finalValue / 100); // Adjust speed by changing the divisor
            if (count >= finalValue) {
                setter(finalValue);
                clearInterval(interval);
            } else {
                setter(count);
            }
        }, 50); // Speed of the animation (lower is faster)
    };

    // Intersection Observer to trigger animation when the section is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setAnimate(true); // Trigger the animation when the section is in view
                }
            },
            { threshold: 0.3 } // Trigger when 30% of the section is visible
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, []);

    // Trigger the animation once the section is visible
    useEffect(() => {
        if (animate) {
            animateNumber(50, setDeliveries);   // Final value for deliveries
            animateNumber(5, setCountries);     // Final value for countries
            animateNumber(10, setTeamMembers);  // Final value for team members
        }
    }, [animate]);

    return (
        <div className="relative h-screen">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={bg}
                    alt="bg"
                    className="w-full h-full object-cover"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-white bg-opacity-90" />
            </div>

            {/* Content on top of the background */}
            <div className="relative h-full flex items-center justify-center p-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Section: Title and Description */}
                    <div>
                        <h1 className="text-5xl font-bold text-black">
                            {t('hometitle')}
                        </h1>
                        <p className="mt-4 text-2xl text-black-300">
                            {t('aboutbelow')}
                        </p>
                    </div>
                    <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {/* Each stat box with larger square-like background */}
                        <div
                            className="transform transition bg-white duration-500 scale-90 sm:scale-105 hover:scale-95 sm:hover:scale-110 hover:text-white hover:bg-black shadow-lg sm:p-10 rounded-lg flex flex-col items-center justify-center min-w-[200px] sm:min-h-[200px] min-h-[150px]">
                            <div className="flex items-center">
                                <FaTruck className="text-orange-700 text-5xl ml-2 mr-4" />
                                <p className="text-5xl font-bold">{deliveries.toLocaleString()}+</p>
                            </div>
                            <p className="text-gray-500 mt-2">{t('delivery')}</p>
                        </div>
                        <div
                            className="transform transition bg-white duration-500 scale-90 sm:scale-105 hover:scale-95 sm:hover:scale-110 hover:text-white hover:bg-black shadow-lg sm:p-10 rounded-lg flex flex-col items-center justify-center min-w-[200px] sm:min-h-[200px] min-h-[150px]">
                            <div className="flex items-center">
                                <FaGlobe className="text-orange-700 text-5xl ml-2 mr-4" />
                                <p className="text-5xl font-bold">{countries}+</p>
                            </div>
                            <p className="text-gray-500 mt-2">{t('AfricanCountry')}</p>
                        </div>
                        <div
                            className="transform transition bg-white duration-500 scale-90 sm:scale-105 hover:scale-95 sm:hover:scale-110 hover:text-white hover:bg-black shadow-lg sm:p-10 rounded-lg flex flex-col items-center justify-center min-w-[200px] sm:min-h-[200px] min-h-[150px]">
                            <div className="flex items-center">
                                <FaUserFriends className="text-orange-700 text-5xl ml-2 mr-4" />
                                <p className="text-5xl font-bold">{teamMembers}+</p>
                            </div>
                            <p className="text-gray-500 mt-2">{t('Team')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesOverview;
