import Community from "../features/home/components/Community";
import CTA from "../features/home/components/CTA";
import Featured from "../features/home/components/Featured";
import Footer from "../features/home/components/Footer";
import Hero from "../features/home/components/Hero";
import Search from "../features/home/components/Search";
import Trending from "../features/home/components/Trending";

export default function Home() {
  return (
    <div className="min-h-screen bg-black ">
      <Hero />
     
      <Search></Search>
      <Trending />
      <Featured></Featured>
      <Community></Community>
      <CTA></CTA>
      <Footer></Footer>
     
     
    </div>
  );
}
