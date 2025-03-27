'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
    {
      quote:
        "Learning music has transformed my life! The lessons are engaging, and I feel more confident in my skills every day. My tutor makes complex concepts easy to understand.",
      name: "Emily Johnson",
      title: "Student, Guitar Lessons",
    },
    {
      quote:
        "Thanks to this platform, I've improved my vocal technique significantly. The personalized feedback from my tutor has been invaluable. I can't recommend it enough!",
      name: "Michael Smith",
      title: "Vocal Student",
    },
    {
      quote:
        "As a beginner, I was nervous about learning the piano. My tutor has been patient and encouraging, making each lesson enjoyable and productive.",
      name: "Sarah Lee",
      title: "Piano Student",
    },
    {
      quote:
        "The flexibility of scheduling lessons around my busy life has made all the difference. I've grown so much as a musician with the help of my amazing instructor!",
      name: "James Brown",
      title: "Drum Student",
    },
    {
      quote:
        "I love the community aspect of this platform! I've met fellow musicians, and my tutor has helped me collaborate on projects, which has greatly enhanced my learning experience.",
      name: "Olivia Davis",
      title: "Music Theory Student",
    },
  ];
  
function TestimonialCard()
{
    return( 
        
        <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h1 className="text-3xl font-bold text-center mb-8 z-10">It have information of succeses</h1>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            
            <div className="w-full max-w-6xl" >
        <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
      </div>
    </div>
    </div>
    );
}
export default TestimonialCard;