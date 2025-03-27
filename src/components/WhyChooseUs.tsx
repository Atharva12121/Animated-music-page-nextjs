"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
const content = [
    {
      title: "Collaborative Jamming",
      description:
        "Play together in real time with your bandmates, producers, and collaborators. Share riffs, create harmonies, and make decisions on the fly. With our platform, you can streamline your creative process and boost your musical productivity.",
     
    },
    {
      title: "Live Editing",
      description:
        "Hear changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your track. Say goodbye to the chaos of file versions and embrace the simplicity of live updates.",

    },
    {
      title: "Track Management",
      description:
        "Experience real-time updates and never stress about track versions again. Our platform ensures that you're always working on the latest mix of your song, eliminating the need for constant manual updates. Stay in the groove, keep your team in sync, and maintain the flow of your creativity without any interruptions.",
     
    },
    {
      title: "Lyrical Inspiration",
      description:
        "Run out of lyrics? Our platform helps you brainstorm and collaborate on ideas in real time. Whether you need a catchy hook or a deep verse, stay connected with your co-writers and keep the creative flow going without interruptions.",
     
    },
  ];
  
function WhyChooseUS(){
    return(
       <div className="">
        <StickyScroll content={content} />
       </div>
    );
}

export default WhyChooseUS;