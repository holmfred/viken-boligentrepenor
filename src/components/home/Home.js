import HomeAboutUs from "./HomeAboutUs";
import HomeCarousel from "./HomeCarousel";
import Partners from "./Partners";
import Reviews from "./Reviews";

export default function Home() {
 return (

  <div className="home-container">
    <HomeCarousel/>
    <HomeAboutUs/>
    <Reviews/>
    <Partners/>
  </div>

 );
}