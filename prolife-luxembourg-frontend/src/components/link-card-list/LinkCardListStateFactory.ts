import LinkCardListStateViewModel from "./LinkCardListStateViewModel";

export default class LinkCardListStateFactory {
    createData = (): LinkCardListStateViewModel => {
        let viewModel = new LinkCardListStateViewModel();
        viewModel.links = [
            {
                title: "Prolife europe",
                description: "A new voice for the pro-life movement",
                imageUrl: "https://www.bento.de/images/4a820009-22db-4ab5-a066-ef4789f61b47_w900_fpx57.42_fpy49.86.png",
                linkDescription: "Go to prolifeeurope",
                linkUrl: "https://prolifeeurope.org"
            },
            {
                title: "March for life Brussels",
                description: "The coming 2020 March for Life promises to be a great success, let us all unite to defend the respect of human life from conception to natural death !",
                imageUrl: "http://www.marchepourlavie.be/_base/img-resize.php?i=http%3A%2F%2Fwww.marchepourlavie.be%2Fimg%2Fimages%2F2019-12%2Fimg-1576071862-649.jpg&h=430&w=1000",
                linkDescription: "Go to march for life",
                linkUrl: "http://www.marchepourlavie.be/?lng=en"
            },
            {
                title: "Vienaissante",
                description: "The Work for the Protection of Emerging Life, a recognized non-profit organization",
                imageUrl: "https://stock.rtl.lu/rtl/800/rtlg//2015/04/21/05238f5752635d32ff10ec66b36603a5.jpg",
                linkDescription: "Go to vienaissante",
                linkUrl: "https://www.vienaissante.lu/index.php/fr/"
            }         
        ]
        return viewModel;
    }
}