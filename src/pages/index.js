import About from "@/components/About";
import FoodItems from "@/components/FoodItems";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <About />
        <FoodItems />
      </div>
    </>
  );
}
