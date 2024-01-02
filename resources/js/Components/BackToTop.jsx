import { useState, useEffect } from 'react';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const threshold = 200; // Adjust the threshold as needed

        setIsVisible(scrollY > threshold);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <button onClick={scrollToTop} className="z-50 fixed bottom-10 right-11 bg-gradient-to-r from-blue-500 to-teal-400 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                    </svg>
                </button>
            )}
        </>
    );
};

export default BackToTopButton;