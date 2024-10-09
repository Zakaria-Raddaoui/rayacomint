import {useEffect, useRef, useState} from 'react';
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";
import bridge from "../assets/bridge.png";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";

const testimonials = [
    {
        text: "M. Taoufik Mlayah et son équipe offrent un excellent service client, depuis la demande de devis jusqu'au lancement de l'expédition. Excellent service client du début à la fin.",
        name: "NDEYE FATOU",
        location: "Senegal",
        profileImage: profile1
    },
    {
        text: "Nous sommes chez Scit-Export depuis 10 ans L'exceLLent service et les prix contribuent notre succés.",
        name: "Mohamed",
        location: "Tunisie",
        profileImage: profile2
    },
    {
        text: "Les chauffeurs et livreurs sont touJours expérimentés et savent comment nous souhaitons que les conteneurs/caisses soient placés. Nous n'avons jamais eu de problémes ou de soucis avec SCIT.",
        name: "Abass",
        location: "Mauritanie",
        profileImage: profile3
    },
];


const TestimonialSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(testimonials.length);
    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startPosition, setStartPosition] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);

    const totalTestimonials = testimonials.length * 3;

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 7000);

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

        if (index >= testimonials.length * 2) {
            setCurrentIndex(testimonials.length);
            container.scrollTo({left: scrollAmount * testimonials.length, behavior: 'auto'});
        } else if (index < testimonials.length) {
            setCurrentIndex(testimonials.length * 2 - 1);
            container.scrollTo({left: scrollAmount * (testimonials.length * 2 - 1), behavior: 'auto'});
        } else {
            setCurrentIndex(index);
        }
    };

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
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={`prev-${index}`}
                            className="w-full flex-shrink-0 h-full snap-center relative bg-black bg-opacity-50 flex items-center"
                        >
                            <div
                                className="relative z-10 flex flex-col justify-center items-start text-left h-full text-white p-8">

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
                                className="relative z-10 flex flex-col justify-center items-start text-left h-full text-white p-8">

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

                    {testimonials.map((testimonial, index) => (
                        <div
                            key={`next-${index}`}
                            className="w-full flex-shrink-0 h-full snap-center relative bg-black bg-opacity-50 flex items-center"
                        >
                            <div
                                className="relative z-10 flex flex-col justify-center items-start text-left h-full text-white p-8">

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

                <style jsx="true">{`
                    .hide-scrollbar::-webkit-scrollbar {
                        display: none; 
                    }

                    .hide-scrollbar {
                        -ms-overflow-style: none; 
                        scrollbar-width: none; 
                    }
                `}</style>
            </div>
        </div>
    );
};

export default TestimonialSlider;
