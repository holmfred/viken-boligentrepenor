import { Link } from "react-router-dom";

export default function Footer() {
 return (
   <footer>
   <div className="godkjent">
    <img src={"../../images/boligmappa.png"} alt="Boligmappa"/>
    <img src={"../../images/sentralt_godkjent.jpg"} alt="Sentralt Godkjent"/>
   </div>
   <div>
    <h3>Kontakt Oss:</h3>
        <p>463 16 571</p>
        <p>post@vikenbe.as</p>
        <div className="socials">
            <Link to="https://www.facebook.com/VikenBoligentreprenor" class="fab fa-facebook"/>
            <Link to="https://www.instagram.com/vikenboligentreprenor/" class="fab fa-instagram"/>
        </div>
   </div>
   </footer>
 );
}