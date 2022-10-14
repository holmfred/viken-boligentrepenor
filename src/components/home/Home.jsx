import HomeAboutUs from "./HomeAboutUs";
import Jumbotron from "./HomeJubmo";
import Partners from "./Partners";
import Reviews from "./Reviews";

export default function Home() {
 return (

  <div className="home-container">
    <Jumbotron />
    <HomeAboutUs/>
    <Reviews/>
    <Partners/>
  </div>

 );
}