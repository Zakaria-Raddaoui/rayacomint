import React from 'react';

const ContactForm = () => {
    return (
        <div className="container mx-auto p-5 font-poppins">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Get in touch with us</h1>
            <p className="mb-6 text-lg text-gray-700">
                You are only a few steps away from getting your personalized offer. Fill out the form and we will respond immediately with a call to assist you.
            </p>
            <ul className="list-disc pl-5 mb-6 text-gray-600">
                <li>It’s very simple, just fill out the form and we will call you.</li>
                <li>During the call, we will need information about your company.</li>
                <li>Do not hesitate to send us an e-mail for any questions or inquiries.</li>
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-lg font-semibold mb-4 text-gray-800">Contact Information</h2>
                    <p className="mb-2 text-gray-700"><strong>Phone number:</strong> +216 71 296 643</p>
                    <p className="mb-2 text-gray-700"><strong>Fax:</strong> +216 71 297 940</p>
                    <p className="mb-2 text-gray-700"><strong>Whatsapp:</strong> +216 20 454 005</p>
                    <p className="mb-2 text-gray-700"><strong>Email:</strong> scit.int@planet.tn</p>
                    <p className="mb-2 text-gray-700"><strong>Address:</strong> 15 rue Om Laarayes, Z.I. Saint Gobin, 2014, Megrine, Tunisie</p>
                </div>

                <form className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-lg font-semibold mb-4 text-gray-800">Contact Form</h2>
                    <div className="mb-4">
                        <label className="block mb-1 text-gray-700" htmlFor="name">Your Name</label>
                        <input className="border rounded w-full py-2 px-3" type="text" id="name" required />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 text-gray-700" htmlFor="email">Your Email</label>
                        <input className="border rounded w-full py-2 px-3" type="email" id="email" required />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 text-gray-700" htmlFor="subject">Subject</label>
                        <input className="border rounded w-full py-2 px-3" type="text" id="subject" required />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 text-gray-700" htmlFor="message">Your Message</label>
                        <textarea className="border rounded w-full py-2 px-3" id="message" rows="4" required />
                    </div>
                    <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition duration-200" type="submit">SEND</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
