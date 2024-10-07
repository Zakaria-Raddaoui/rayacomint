import {useEffect, useRef, useState} from 'react';
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";
import bridge from "../assets/bridge.png"; // Import the background image
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";

const testimonials = [
    {
        text: "M. Taoufik Mlayah et son équipe offrent un excellent service client, depuis la demande de devis jusqu'au lancement de l'expédition. Excellent service client du début à la fin.",
        name: "NDEYE FATOU",
        location: "Senegal",
        profileImage: profile1 // Use imported image
    },
    {
        text: "Nous sommes chez Scit-Export depuis 10 ans L'exceLLent service et les prix contribuent notre succés.",
        name: "Mohamed",
        location: "Tunisie",
        profileImage: profile2 // Use imported image
    },
    {
        text: "Les chauffeurs et livreurs sont touJours expérimentés et savent comment nous souhaitons que les conteneurs/caisses soient placés. Nous n'avons jamais eu de problémes ou de soucis avec SCIT.",
        name: "Abass",
        location: "Mauritanie",
        profileImage: profile3 // Use imported image
    },
];


const TestimonialSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(testimonials.length); // Start in the middle set
    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startPosition, setStartPosition] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);

    // Calculate the total number of testimonials including duplicates
    const totalTestimonials = testimonials.length * 3; // original + 2 duplicates

    // Auto scroll functionality
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 7000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    });

    const handleNext = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex + 1) % totalTestimonials;
            scrollToIndex(newIndex);
            return newIndex;
        });
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex - 1 + totalTestimonials) % totalTestimonials;
            scrollToIndex(newIndex);
            return newIndex;
        });
    };

    const scrollToIndex = (index) => {
        const container = containerRef.current;
        if (container) {
            const scrollAmount = container.scrollWidth / totalTestimonials;
            container.scrollTo({
                left: scrollAmount * index,
                behavior: 'smooth'
            });
        }
    };

    const handleScroll = () => {
        const container = containerRef.current;
        const scrollAmount = container.scrollWidth / totalTestimonials;
        const index = Math.round(container.scrollLeft / scrollAmount);

        // Infinite scroll logic: Reposition the user to the "real" testimonials if at one of the duplicates
        if (index >= testimonials.length * 2) {
            setCurrentIndex(testimonials.length); // Jump back to the start
            container.scrollTo({left: scrollAmount * testimonials.length, behavior: 'auto'});
        } else if (index < testimonials.length) {
            setCurrentIndex(testimonials.length * 2 - 1); // Jump to the end
            container.scrollTo({left: scrollAmount * (testimonials.length * 2 - 1), behavior: 'auto'});
        } else {
            setCurrentIndex(index);
        }
    };

    // Mouse drag functions for desktop scrolling
    const startDragging = (e) => {
        setIsDragging(true);
        setStartPosition(e.pageX - containerRef.current.offsetLeft);
        setScrollPosition(containerRef.current.scrollLeft);
    };

    const stopDragging = () => {
        setIsDragging(false);
    };

    const onDragging = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startPosition) * 1.5;
        containerRef.current.scrollLeft = scrollPosition - walk;
    };

    return (
        <div className="relative z-0 w-full h-screen select-none">
            {/* Testimonial Slider Container */}
            <div className="flex items-center sm:mt-[200px] justify-center sm:h-3/4 h-screen" style={{backgroundImage: `url(${bridge})`, backgroundSize: "auto", backgroundPosition: 'center'}}>
                <div
                    ref={containerRef}
                    onScroll={handleScroll}
                    onMouseDown={startDragging}
                    onMouseMove={onDragging}
                    onMouseUp={stopDragging}
                    onMouseLeave={stopDragging}
                    className="w-full h-full flex overflow-x-scroll snap-x snap-mandatory cursor-grab hide-scrollbar"
                    style={{scrollBehavior: 'smooth'}}
                >
                    {/* Clone before the main testimonials */}
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={`prev-${index}`}
                            className="w-full flex-shrink-0 h-full snap-center relative bg-black bg-opacity-50 flex items-center"
                        >
                            <div
                                className="relative z-10 flex flex-col justify-center items-start text-left h-full text-white p-8"> {/* Adjusted for left alignment */}

                                <h2 className="text-2xl lg:text-4xl font-semibold max-w-4xl">
                                        <FaQuoteLeft style={{color:"gray"}} size="50"/> {testimonial.text} <FaQuoteRight style={{color:"gray"}} size="50"/>
                                </h2>
                                <div className="mt-6 text-xl">
                                    <img src={testimonial.profileImage} alt={`${testimonial.name}'s profile`}
                                         className="w-16 h-16 rounded-full mb-4"/>
                                    <p className="font-bold">{testimonial.name}</p>
                                    <p className="text-gray-300">{testimonial.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Main Testimonials */}
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="w-full flex-shrink-0 h-full snap-center relative bg-black bg-opacity-50 flex items-center"
                        >
                            <div
                                className="relative z-10 flex flex-col justify-center items-start text-left h-full text-white p-8"> {/* Adjusted for left alignment */}

                                <h2 className="text-2xl lg:text-4xl font-semibold max-w-4xl">
                                    <FaQuoteLeft style={{color: "gray"}} size="50"/> {testimonial.text} <FaQuoteRight
                                    style={{color: "gray"}} size="50"/>
                                </h2>
                                <div className="mt-6 text-xl">
                                    <img src={testimonial.profileImage} alt={`${testimonial.name}'s profile`}
                                         className="w-16 h-16 rounded-full mb-4"/>
                                    <p className="font-bold">{testimonial.name}</p>
                                    <p className="text-gray-300">{testimonial.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Clone after the main testimonials */}
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={`next-${index}`}
                            className="w-full flex-shrink-0 h-full snap-center relative bg-black bg-opacity-50 flex items-center"
                        >
                            <div
                                className="relative z-10 flex flex-col justify-center items-start text-left h-full text-white p-8"> {/* Adjusted for left alignment */}

                                <h2 className="text-2xl lg:text-4xl font-semibold max-w-4xl">
                                    <FaQuoteLeft style={{color: "gray"}} size="50"/> {testimonial.text} <FaQuoteRight
                                    style={{color: "gray"}} size="50"/>
                                </h2>
                                <div className="mt-6 text-xl">
                                    <img src={testimonial.profileImage} alt={`${testimonial.name}'s profile`}
                                         className="w-16 h-16 rounded-full mb-4"/>
                                    <p className="font-bold">{testimonial.name}</p>
                                    <p className="text-gray-300">{testimonial.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CSS to hide the scrollbar */}
                <style jsx="true">{`
                    .hide-scrollbar::-webkit-scrollbar {
                        display: none; /* Safari and Chrome */
                    }

                    .hide-scrollbar {
                        -ms-overflow-style: none; /* Internet Explorer and Edge */
                        scrollbar-width: none; /* Firefox */
                    }
                `}</style>
            </div>
        </div>
    );
};

export default TestimonialSlider;
