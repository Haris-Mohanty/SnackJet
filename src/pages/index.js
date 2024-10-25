import About from "@/components/About";
import FoodItems from "@/components/FoodItems";
import Hero from "@/components/Hero";
import Strength from "@/components/Strength";


export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <About />
        <FoodItems />
        <Strength />
      </div>
    </>
  );
}
