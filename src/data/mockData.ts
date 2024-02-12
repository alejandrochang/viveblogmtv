import postData from "./postData";

export const mockData: BlogListProps = {
  seriesScripture: ['Then Jesus said to his disciples, “Whoever wants to be my disciple must deny themselves and take up their cross and follow me. For whoever wants to save their life will lose it, but whoever loses their life for me will find it. What good will it be for someone to gain the whole world, yet forfeit their soul? Or what can anyone give in exchange for their soul?" '],
  posts: [...postData],
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
  notes: string[];
}

export interface BlogListProps {
  posts: BlogPostData[];
  seriesScripture: string[];
}
