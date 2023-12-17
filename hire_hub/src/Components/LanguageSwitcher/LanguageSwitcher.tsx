import {FC} from 'react';
import {useTranslation} from "react-i18next";
import {ILanguages} from "../../interfaces";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


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
        <FormControl required sx={{m: '5px', width: 80}}>
            <Select
                sx={{p: 0}}
                value={currentLang}
                onChange={handleChangeLanguage}
            >
                {
                    Object.keys(lngs).map((lng) => (
                        <MenuItem key={lng} value={lng}> {lng} </MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    );
};

export {LanguageSwitcher};