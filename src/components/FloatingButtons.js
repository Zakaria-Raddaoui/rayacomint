import React from 'react';
import { FaWhatsapp, FaFacebookMessenger } from 'react-icons/fa'; // Using react-icons for logos

const FloatingButtons = () => {
    return (
        <div>
            {/* WhatsApp Button */}
            <a
                href="https://wa.me/21620454005"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 right-20 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-colors duration-300"
            >
                <FaWhatsapp size={30} />
            </a>

            {/* Facebook Button */}
            <a
                href="https://www.facebook.com/profile.php?id=61565503229877"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors duration-300"
            >
                <FaFacebookMessenger size={30} />
            </a>
        </div>
    );
};

export default FloatingButtons;
