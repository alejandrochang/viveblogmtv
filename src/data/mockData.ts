export interface BlogPostData {
  id: string;
  title: string;
  content: string;
  date: string;
  src: string;
}

export interface BlogListProps {
  posts: BlogPostData[];
}

export const mockData: BlogListProps = {
  posts: [
    {
      id: '1',
      title: "Lets All be Losers",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "2024-01-14",
      src: 'https://www.youtube.com/embed/VxiAADFxROE?si=6c0hXkGNgosF1w3z',
    },
    {
      id: '2',
      title: "Carry your Cross",
      content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "2024-01-07",
      src: 'https://www.youtube.com/embed/LoSpNWFzF-k?si=XZpgCi_5yGHPsLTE',
    },
    // Add more blog posts here...
  ],
};
