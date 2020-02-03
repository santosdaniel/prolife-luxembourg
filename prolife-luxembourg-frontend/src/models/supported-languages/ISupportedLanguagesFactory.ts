import { SupportedLanguagesEnum } from "./SupportedLanguages.enum";

export interface ISupportedLanguagesFactory {
    getSvgFlag(language: SupportedLanguagesEnum): string;
}