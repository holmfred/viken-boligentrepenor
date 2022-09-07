import AboutUs from "./AboutUs";
import HomeCarousel from "./HomeCarousel";
import Partners from "./Partners";
import Reviews from "./Reviews";

export default function Home() {
 return (

  <div className="container">
    <HomeCarousel/>
    <AboutUs/>
    <Reviews/>
    <Partners/>
  </div>

 );
}