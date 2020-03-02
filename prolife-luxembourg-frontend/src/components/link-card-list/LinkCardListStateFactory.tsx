import LinkCardListStateViewModel from "./LinkCardListStateViewModel";
import { SupportedLanguagesEnum } from "../../models/supported-languages/SupportedLanguages.enum";
import LinkCardViewModel from "../link-card/LinkCardViewModel";
import Alarm from "@material-ui/icons/ViewList";
import React from "react";

export default class LinkCardListStateFactory {
    private getListOfSheltersIcon = (): JSX.Element => {
        return (<Alarm style={{ fontSize: 240 }} />);
    }

    private createEnData = (): LinkCardViewModel[] => [
        {
            title: "Vienaissante",
            description: "The Work for the Protection of Emerging Life, a recognized non-profit organization",
            imageUrl: "https://stock.rtl.lu/rtl/800/rtlg//2015/04/21/05238f5752635d32ff10ec66b36603a5.jpg",
            linkDescription: "Go to vienaissante",
            linkUrl: "https://www.vienaissante.lu/index.php/fr/",
            icon: undefined
        },
        {
            title: "One of Us",
            description: "Group of citizens from the European Union countries to demand the Community institutions to guarantee the protection of human beings",
            imageUrl: "https://oneofus.eu/wp-content/uploads/2017/05/main_slider_new.jpg",
            linkDescription: "Go to One of Us",
            linkUrl: "https://oneofus.eu/",
            icon: undefined
        },
        {
            title: "Prolife europe",
            description: "A new voice for the pro-life movement",
            imageUrl: "https://www.bento.de/images/4a820009-22db-4ab5-a066-ef4789f61b47_w900_fpx57.42_fpy49.86.png",
            linkDescription: "Go to prolife europe",
            linkUrl: "https://prolifeeurope.org",
            icon: undefined
        },
        {
            title: "March for life Brussels",
            description: "The coming 2020 March for Life promises to be a great success, let us all unite to defend the respect of human life from conception to natural death !",
            imageUrl: "http://www.marchepourlavie.be/_base/img-resize.php?i=http%3A%2F%2Fwww.marchepourlavie.be%2Fimg%2Fimages%2F2019-12%2Fimg-1576071862-649.jpg&h=430&w=1000",
            linkDescription: "Go to march for life",
            linkUrl: "http://www.marchepourlavie.be/?lng=en",
            icon: undefined
        },
        {
            title: "List of shelters",
            description: "Shelters for women, girls, women with children and men",
            imageUrl: undefined,
            linkDescription: "Go to list of shelters",
            linkUrl: "https://mega.public.lu/fr/acteurs/partenaires/partenaires-conventionnes/foyers-hebergement.html",
            icon: this.getListOfSheltersIcon()
        }
    ]

    private createDataByLanguage = (language: SupportedLanguagesEnum): LinkCardViewModel[] => {
        switch (language) {
            case SupportedLanguagesEnum.En:
                return this.createEnData();
            case SupportedLanguagesEnum.Fr:
                return this.createEnData();
        }
    }

    createData = (language: SupportedLanguagesEnum): LinkCardListStateViewModel => {
        const links = this.createDataByLanguage(language);
        let viewModel = new LinkCardListStateViewModel();

        viewModel.links = links;
        return viewModel;
    }
}