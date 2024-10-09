import React from 'react';
import { FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import {useTranslation} from "react-i18next";

const ContactForm = () => {
    const {t} = useTranslation();
    return (
        <div id="contact" className="container mx-auto p-5 font-poppins">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">{t("contact")}</h1>
            <p className="mb-6 text-lg text-gray-700">{t("form")}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Contact Information Section */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-lg font-semibold mb-4 text-orange-500"><FaPhone size={25} className="inline-block mr-2" /> {t("tel")}</h2>
                    <p className="mb-2 text-gray-700"> +216 22 286 499</p>
                    <h2 className="text-lg font-semibold mb-4 text-orange-500"><FaWhatsapp size={30} className="inline-block mr-2" /> Whatsapp</h2>
                    <p className="mb-2 text-gray-700"> +216 20 454 005</p>
                    <h2 className="text-lg font-semibold mb-4 text-orange-500"><FaEnvelope size={25} className="inline-block mr-2" /> Email</h2>
                    <p className="mb-2 text-gray-700"> sci.rayacomint@gmail.com</p>
                    <h2 className="hover:text-xl text-lg font-semibold mb-4 text-orange-500"><FaMapMarkerAlt size={25} className="inline-block mr-2" /> {t("address")}</h2>
                    <p className="mb-2 text-gray-700"> Rue Khairedin Becha Montplaisir, 1073 Beb Bhar, 25 Rue Omar Kadeh, Imm Montplaisir 2éme étage.</p>
                </div>

                {/* Contact Form Section */}
                <form className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-lg font-semibold mb-4 text-gray-800">{t("name")}</h2>
                    <div className="mb-4">
                        <input className="border rounded w-full py-2 px-3" type="text" id="name" placeholder={t("name")} required />
                    </div>
                    <h2 className="text-lg font-semibold mb-4 text-gray-800">{t("email")}</h2>
                    <div className="mb-4">
                        <input className="border rounded w-full py-2 px-3" type="email" id="email" placeholder={t("email")} required />
                    </div>
                    <h2 className="text-lg font-semibold mb-4 text-gray-800">{t("sujet")}</h2>
                    <div className="mb-4">
                        <input className="border rounded w-full py-2 px-3" type="text" id="subject" placeholder={t("sujet")} required />
                    </div>
                    <h2 className="text-lg font-semibold mb-4 text-gray-800">{t("message")}</h2>
                    <div className="mb-4">
                        <textarea className="border rounded w-full py-2 px-3" id="message" rows="4" placeholder={t("message")} required />
                    </div>
                    <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition duration-200" type="submit">{t("send")}</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
