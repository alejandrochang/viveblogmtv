import LetsAllBeLosers from "../assets/letsallbealllosers.png";
import CarryYourCross from "../assets/carryyourcross.jpg";

export const mockData: BlogListProps = {
  posts: [
    {
      id: "1",
      title: "Lets All Be Losers",
      content: "Are you willing to lay down your life for Jesus? Pastor Keira Smallcombe brings us the second installment of our series, Sold Out, teaching from Matthew 16. When you let go of the world and lay down your life, you can take up the greater purpose and plans He has for you.  Press play and get ready to be sold out for the kingdom.",
      date: "2024-01-14",
      src: "https://www.youtube.com/embed/VxiAADFxROE?si=6c0hXkGNgosF1w3z",
      coverImg: LetsAllBeLosers,
      series: 'Sold Out'
    },
    {
      id: "2",
      title: "Carry Your Cross",
      content:
        "Get ready to start the year “Sold Out” for Jesus. In the first sermon of the year titled Carry Your Cross, Pastor Adam explores the undeniable cost of answering the calling of Christ Jesus. Get ready to be challenged as we learn that the formula of faith is actually letting go of some things, and taking hold of Jesus.",
      date: "2024-01-07",
      src: "https://www.youtube.com/embed/LoSpNWFzF-k?si=XZpgCi_5yGHPsLTE",
      coverImg: CarryYourCross,
      series: 'Sold Out'
    },
  ],
};

export interface BlogPostData {
  id: string;
  title: string;
  content: string;
  date: string;
  src: string;
  coverImg: string;
  series: string;
}

export interface BlogListProps {
  posts: BlogPostData[];
}
