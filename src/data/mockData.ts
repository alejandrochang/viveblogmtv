import LetsAllBeLosers from "../assets/letsallbealllosers.png";
import CarryYourCross from "../assets/carryyourcross.jpg";
import WhatDidYouDo from "../assets/whatdidyoudo.jpg";

export const mockData: BlogListProps = {
  posts: [
    {
      id: "what-did-you-do",
      title: "What Did You Do?",
      content: "Teaching from Matthew 16:24, Pastor Adam Smallcombe brings a message that will challenge your understanding of faith and works. As Christians, your participation in building the kingdom is not a gentle invitation but rather an expectation. Grab your bible and get ready to take notes on this powerful message titled “What Did You Do?” in our SOLD OUT series.",
      date: "2024-01-21",
      src: "https://www.youtube.com/embed/4mLhA3JztB0?si=TV-oL0ZOhCD1nx_F",
      coverImg: WhatDidYouDo,
      series: 'Sold Out',
      scriptures: ['Matthew 16:24-28', 'Ephesians 2:8-9', 'Matthew 5:16', 'James 2:14', 'James 2:17-18', 'James 2:26', 'Colossians 3:24', 'Galatians 6:9', 'Matthew 10:32', 'Matthew 10:38-39', '2 Timothy 4:8', '2 Timothy 4:1'],
      notes: [
        'If I show up should I get some praise? In culture we are currently seeing how everyone in this world wants a participation tropy, wants individual praise. Even in the christian world we are seeing this idea of participation awards',
        'What does your participation look like in the Kingdom? And where does your heart stand with this participation? Theres this idea of resting and not striving to grow in your faith.',
        'Are you looking for validation, or are you doing it out of the love for the Lord? This idea of anti-works is not biblical. We are called to do good works. We are called to be the light of the world. We are called to be the salt of the earth. We are called to be the hands and feet of Jesus. We are called to be the body of Christ.',
        'We are called to be the church. We are called to be the bride of Christ. We are called to be the ambassadors of Christ. We are called to be the children of God. We are called to be the sons and daughters of the King. We are called to be the disciples of Jesus. We are called to be the followers of Jesus. We are called to be the friends of Jesus. We are called to be the servants of Jesus. We are called to be the worshippers of the Father, Son, and Holy Spirit.',
        'Kingdom service is not an invitation, but an expectation. By Grace we are saved, but once were saved there is this expectation of works. We are called to put that freedom we have in Christ to work. Those who acknowledge Jesus in front of others will be acknowledged by Jesus in front of the Father. To acknowledge Jesus is to carry him wherever you go. His presence through you should be transformative.',
        'People make the excuse of burnout as the reason they dont serve. But if you are serving out of the love for the Lord, you will never burnout. The Lord provides the oil that allows you to keep going. You will be filled with the Holy Spirit. You will be filled with the love of God. You will be filled with the love of Jesus.',
        'Dont worry about the temporary or the opinon of people, worry about Gods opinion of you, and the eternal. There is a reward in the next life that Jesus is telling us to focus on, to aim at!'
      ],
    },
    {
      id: "lets-all-be-losers",
      title: "Lets All Be Losers",
      content: "Are you willing to lay down your life for Jesus? Pastor Keira Smallcombe brings us the second installment of our series, Sold Out, teaching from Matthew 16. When you let go of the world and lay down your life, you can take up the greater purpose and plans He has for you.  Press play and get ready to be sold out for the kingdom.",
      date: "2024-01-14",
      src: "https://www.youtube.com/embed/VxiAADFxROE?si=6c0hXkGNgosF1w3z",
      coverImg: LetsAllBeLosers,
      series: 'Sold Out',
      scriptures: ['Matthew 16:24-26', 'John 12:24-26', 'John 10:17-18', 'John 15:13-14'],
      notes: [
        'In your losing you can actually be winning. When you let go of the world and lay down your life, you can take up the greater purpose and plans He has for you. Less of you is more of Him. When you lose your life for Jesus, you gain your life in Jesus.',
        'The world says, “I have to get mine.” Jesus says, “I have to give mine.” The world says, “I have to be first.” Jesus says, “I have to be last.” The world says, “I have to be served.” Jesus says, “I have to serve.” The world says, “I have to be the greatest.” Jesus says, “I have to be the least.” The world says, “I have to be the boss.” Jesus says, “I have to be the servant.” The world says, “I have to be the winner.” Jesus says, “I have to be the loser.”',
        'The kingdom of Heaven is an upside down kingdom. Where the world does the opposite of what Jesus says, we are called to do the opposite of what the world says.',
        'With the loss of yourself, the death of yourself, the laying down of yourself, you gain the life of Jesus. For Jesus raises the dead. How can Christ be raised in you if you are not dead? How can Christ be in you with you in you?',
        'Our identity is found in Christ. We are not our own. We are bought with a price. You are the Lords friend if you do what he comands. God is the only one whofulfills covenants and promises. Its a promise that YOU WILL FIND YOUR LIFE IF YOU LAY IT DOWN!',
        'Some questions to ask yourself: What am I holding onto that I need to let go off? What do I need to leave at the altar? What from me must die, so that it can be resurected by the only one who can?'
      ],
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
      notes: [
        'The formula of faith is letting go of some things and taking hold of Jesus.',
      ],
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
  notes: string[];
}

export interface BlogListProps {
  posts: BlogPostData[];
}
