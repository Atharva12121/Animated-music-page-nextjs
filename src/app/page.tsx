import FeatureCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialCard from "@/components/TestimonialCard";
import Upcomingwebinar from "@/components/Upcomingwebinar";
import WhyChooseUS from "@/components/WhyChooseUs";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">

<HeroSection/>
<FeatureCourses></FeatureCourses>
<WhyChooseUS></WhyChooseUS>
<TestimonialCard></TestimonialCard>
<Upcomingwebinar></Upcomingwebinar>
<Instructors></Instructors>
<Footer></Footer>
    </main>
   
  );
}
