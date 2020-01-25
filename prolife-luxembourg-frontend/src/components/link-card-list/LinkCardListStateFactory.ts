import LinkCardListStateViewModel from "./LinkCardListStateViewModel";

export default class LinkCardListStateFactory {
    createData = (): LinkCardListStateViewModel => {
        let viewModel = new LinkCardListStateViewModel();
        viewModel.links = [
            {
                title: "Title",
                description: "Description",
                imageUrl: "https://stock.rtl.lu/rtl/800/rtlg//2015/04/21/05238f5752635d32ff10ec66b36603a5.jpg",
                linkDescription: "Link description",
                linkUrl: "www.sapo.pt"
            },
            {
                title: "Title",
                description: "Description",
                imageUrl: "https://repcaulkins.com/wp-content/uploads/sites/4/2019/06/Choose-Life.jpg",
                linkDescription: "Link description",
                linkUrl: "www.sapo.pt"
            },
            {
                title: "Title",
                description: "Description",
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREBuBRfZbnCEDFPN9LXsGCewSZYMUTov0aYMxijEIqgaGUPgVR",
                linkDescription: "Link description",
                linkUrl: "www.sapo.pt"
            },
            {
                title: "Title",
                description: "Description",
                imageUrl: "https://www.bento.de/images/4a820009-22db-4ab5-a066-ef4789f61b47_w900_fpx57.42_fpy49.86.png",
                linkDescription: "Link description",
                linkUrl: "www.sapo.pt"
            }            
        ]
        return viewModel;
    }
}