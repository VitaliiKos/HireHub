import {FC} from 'react';
import {useTranslation} from "react-i18next";
import {ILanguages} from "../../interfaces";

const LanguageSwitcher: FC = () => {
    const lngs: ILanguages = {
        en: {nativeName: 'English'},
        uk: {nativeName: 'Ukraine'}
    }
    const {i18n: {changeLanguage}} = useTranslation();
    const currentLang = localStorage.getItem('i18nextLng') || 'en'

    const handleChangeLanguage = (e: any) => {
        const language = e.target.value;
        changeLanguage(language)
    }

    return (
        <div className="align">
            <select
                className="custom-select"
                style={{width: 70, margin: '0 10px'}}
                onChange={handleChangeLanguage}
                value={currentLang}
            >
                {
                    Object.keys(lngs).map((lng) => (
                        < option key={lng} value={lng}>{lngs[lng].nativeName}</option>
                    ))
                }
            </select>

        </div>
    );
};

export {LanguageSwitcher};