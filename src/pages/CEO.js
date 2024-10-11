import React from "react";
import issamadjmi from '../assets/issam.png';
import {useTranslation} from "react-i18next";
const CEO = () => {
    const { t } = useTranslation();
    return (
        <div className="bg-white flex flex-col items-center">
            <div className="flex flex-col items-center mt-10">
                <img
                    src={issamadjmi}
                    alt="Mr. Taoufik Mlayah"
                    className="rounded-full w-40 h-40 object-cover"
                />
                <h1 className="text-3xl font-bold mt-4">MR. Issam AOUISSAOUI</h1>
                <h2 className="text-lg text-gray-600 mt-2">{t("president")}</h2>
                <ul className="text-blue-600 mt-4 text-center">
                    <li>– {t("a1")}</li>
                    <li>– {t("a2")}</li>
                    <li>– {t("a3")}</li>
                    <li>– {t("a4")}</li>
                </ul>
            </div>

            <div className="mt-16 text-center">
                <h2 className="text-4xl font-bold">{t("talents")}</h2>
                <p className="text-gray-500 mt-4 px-4">
                    {t("description")}
                </p>
            </div>
        </div>
    );
};

export default CEO;
