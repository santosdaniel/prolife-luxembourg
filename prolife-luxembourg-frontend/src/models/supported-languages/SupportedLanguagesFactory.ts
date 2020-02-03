import { SupportedLanguagesEnum } from "./SupportedLanguages.enum";
import en from './../../resources/flags/flag_uk.svg';
import fr from './../../resources/flags/flag_fr.svg';

export class SupportedLanguagesFactory {

    public static readonly EnLanguage = "en";
    public static readonly FrLanguage = "fr";

    public getSvgFlag(language: SupportedLanguagesEnum): string {
        switch (language) {
            case SupportedLanguagesEnum.En:
                return en
            case SupportedLanguagesEnum.Fr:
                return fr;
        }
    }


    public getLanguagesEnum(language: string): SupportedLanguagesEnum {
        switch (language) {
            case SupportedLanguagesFactory.EnLanguage:
                return SupportedLanguagesEnum.En;
            case SupportedLanguagesFactory.FrLanguage:
                return SupportedLanguagesEnum.Fr;
            default:
                return SupportedLanguagesEnum.En;
        }
    }


}

