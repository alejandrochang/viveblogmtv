import LetsAllBeLosers from "../assets/letsallbealllosers.png";
import CarryYourCross from "../assets/carryyourcross.jpg";

export const mockData: BlogListProps = {
  posts: [
    {
      id: "lets-all-be-losers",
      title: "Lets All Be Losers",
      content: "Are you willing to lay down your life for Jesus? Pastor Keira Smallcombe brings us the second installment of our series, Sold Out, teaching from Matthew 16. When you let go of the world and lay down your life, you can take up the greater purpose and plans He has for you.  Press play and get ready to be sold out for the kingdom.",
      date: "2024-01-14",
      src: "https://www.youtube.com/embed/VxiAADFxROE?si=6c0hXkGNgosF1w3z",
      coverImg: LetsAllBeLosers,
      series: 'Sold Out',
      scriptures: ['John 12:24-26', 'Matthew 16:24-26'],
    },
    {
      id: "carry-your-cross",
      title: "Carry Your Cross",
      content:
        "Get ready to start the year “Sold Out” for Jesus. In the first sermon of the year titled Carry Your Cross, Pastor Adam explores the undeniable cost of answering the calling of Christ Jesus. Get ready to be challenged as we learn that the formula of faith is actually letting go of some things, and taking hold of Jesus.",
      date: "2024-01-07",
      src: "https://www.youtube.com/embed/LoSpNWFzF-k?si=XZpgCi_5yGHPsLTE",
      coverImg: CarryYourCross,
      series: 'Sold Out',
      scriptures: ['Matthew 16:24-26', 'Luke 14:25-33', 'Matthew 10:37-39', 'Mark 8:34-38'],
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
  scriptures: string[];
}

export interface BlogListProps {
  posts: BlogPostData[];
}
