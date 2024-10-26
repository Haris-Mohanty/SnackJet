import About from "@/components/About";
import Faq from "@/components/Faq";
import FoodItems from "@/components/FoodItems";
import Hero from "@/components/Hero";
import Strength from "@/components/Strength";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <About />
        <FoodItems />
        <Strength />
        <Testimonial />
        <Faq />
      </div>
    </>
  );
}
