import { Testimonial } from "./schema";

const testimonials: Testimonial[] = [
  {
    message:
      "Welcome onboard, Milind! Cannot wait to see where you take us next <3",
    linkToTestimony:
      "https://www.linkedin.com/feed/update/urn:li:ugcPost:7303644803752247296?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7303644803752247296%2C7303666709750562817%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287303666709750562817%2Curn%3Ali%3AugcPost%3A7303644803752247296%29",
    author: {
      name: "Merlin AI by Foyer",
      bio: "Personal AI assistant",
      image: "/assets/testimonials/merlin.jpeg",
      social: "https://getmerlin.in",
    },
    show: true,
  },
  {
    message:
      "I'm so impressed by your work on the UI so far, I can't wait to deliver those SMOOOTH experiences to our customers. Excited to see you growing into a fullstack role here too. Glad to have you on the team!",
    linkToTestimony:
      "https://www.linkedin.com/feed/update/urn:li:activity:7279841521690890241?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7279841521690890241%2C7279842437064278016%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287279842437064278016%2Curn%3Ali%3Aactivity%3A7279841521690890241%29",
    author: {
      name: "Yash Chavan",
      bio: "Founder & CEO at SARAL",
      image: "/assets/testimonials/yash.jpeg",
      social: "https://www.linkedin.com/in/yctheman",
    },
    show: false,
  },
  {
    message:
      "100% AGREE! Also, the way team has launched the project is commendable. This is by far the most successful project launch on Peerlist",
    linkToTestimony:
      "https://peerlist.io//milind/project/ai-roadmap-generator?commentId=CH6AJBDNQGQRPR8CG9DBBQE6LDDD",
    author: {
      name: "Akash Bhadange",
      bio: "CEO at Peerlist",
      image: "/assets/testimonials/akash.webp",
      social: "https://peerlist.io/designerdada",
    },
    show: true,
  },
];

export { testimonials };
