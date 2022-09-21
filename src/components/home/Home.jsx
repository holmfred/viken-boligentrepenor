import HomeAboutUs from "./HomeAboutUs";
import Partners from "./Partners";
import Reviews from "./Reviews";

export default function Home() {
 return (

  <div className="home-container">
    <HomeAboutUs/>
    <Reviews/>
    <Partners/>
  </div>

 );
}