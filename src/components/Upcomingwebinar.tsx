import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
import { Button } from "./ui/moving-border";
 const webinars = [
    {
      title: "Songwriting Essentials",
      description:
        "Join us for an interactive session on the fundamentals of songwriting, covering techniques, structure, and lyrical inspiration.",
      link: "https://example.com/webinars/songwriting-essentials",
    },
    {
      title: "Understanding Music Theory",
      description:
        "Explore the basics of music theory, including scales, chords, and harmony, to enhance your musical compositions.",
      link: "https://example.com/webinars/understanding-music-theory",
    },
    {
      title: "Mastering the Guitar",
      description:
        "Learn essential guitar techniques and exercises from experienced instructors, suitable for beginners and advanced players alike.",
      link: "https://example.com/webinars/mastering-the-guitar",
    },
    {
      title: "Vocal Techniques for Singers",
      description:
        "Enhance your vocal skills with tips and exercises focused on breath control, pitch accuracy, and performance techniques.",
      link: "https://example.com/webinars/vocal-techniques-for-singers",
    },
    {
      title: "Music Production Basics",
      description:
        "Dive into the world of music production, covering software, recording techniques, and mixing to help you create professional-sounding tracks.",
      link: "https://example.com/webinars/music-production-basics",
    },
    {
      title: "Exploring Music Genres",
      description:
        "Take a journey through various music genres, their history, and key characteristics, and learn how to incorporate diverse styles into your own music.",
      link: "https://example.com/webinars/exploring-music-genres",
    },
  ];
  

function Upcomingwebinar()
{
    return(
        <div className="p-12 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h2  className="text-base text-teal-600 font-semibold tracking-wide uppercase">FATURE WEBINARS</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey </p>
                </div>
                <div className="mt-10"><HoverEffect items={webinars} /></div>
                <div className="mt-10 text-center"><Link href={"/"} className=""><Button
        borderRadius="1rem"
        className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800  "
      >View All Webinars</Button></Link></div>
            </div>
        </div>
    );
}
export default Upcomingwebinar;