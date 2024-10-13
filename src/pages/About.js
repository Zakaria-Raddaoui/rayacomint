import React, { useState, useEffect, useRef } from 'react';
import { FaTruck, FaGlobe, FaUserFriends } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import bg from '../assets/storage-container-hero.webp';

const ServicesOverview = () => {
    const { t } = useTranslation();

    // Define target numbers for each statistic
    const [deliveries, setDeliveries] = useState(0);
    const [countries, setCountries] = useState(0);
    const [teamMembers, setTeamMembers] = useState(0);
    const [animate, setAnimate] = useState(false);

    const statsRef = useRef(null);

    // Function to animate the numbers
    const animateNumber = (finalValue, setter) => {
        let count = 0;
        const interval = setInterval(() => {
            count += Math.ceil(finalValue / 100);
            if (count >= finalValue) {
                setter(finalValue);
                clearInterval(interval);
            } else {
                setter(count);
            }
        }, 50);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setAnimate(true);
                }
            },
            { threshold: 0.3 }
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

    useEffect(() => {
        if (animate) {
            animateNumber(80, setDeliveries);
            animateNumber(15, setCountries);
            animateNumber(10, setTeamMembers);
        }
    }, [animate]);

    return (
        <div className="relative h-screen">
            <div className="absolute inset-0">
                <img
                    src={bg}
                    alt="bg"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-white bg-opacity-90" />
            </div>

            <div className="relative h-full flex items-center justify-center p-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h1 className="text-5xl font-bold text-black">
                            {t('hometitle')}
                        </h1>
                        <p className="mt-4 text-2xl text-black-300">
                            {t('aboutbelow')}
                        </p>
                    </div>
                    <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {[
                            {
                                icon: <FaTruck className="text-orange-700 text-5xl ml-2 mr-4" />,
                                value: deliveries,
                                label: t('delivery'),
                            },
                            {
                                icon: <FaGlobe className="text-orange-700 text-5xl ml-2 mr-4" />,
                                value: countries,
                                label: t('AfricanCountry'),
                            },
                            {
                                icon: <FaUserFriends className="text-orange-700 text-5xl ml-2 mr-4" />,
                                value: teamMembers,
                                label: t('Team'),
                            },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className={`hover:bg-black hover:text-white transform transition-all duration-500 scale-90 bg-white shadow-lg sm:p-10 rounded-lg flex flex-col items-center justify-center min-w-[200px] sm:min-h-[200px] min-h-[150px] 
                                ${animate ? 'animate-fade-in' : 'opacity-0 translate-y-20'}`}
                            >
                                <div className="flex items-center">
                                    {stat.icon}
                                    <p className="text-5xl font-bold">{stat.value}+</p>
                                </div>
                                <p className="text-gray-500 mt-2">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in {
                    opacity: 1;
                    animation: fadeIn 1s forwards;
                }
            `}</style>
        </div>
    );
};

export default ServicesOverview;
