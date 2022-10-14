export default function Footer() {
 return (
   <footer>
   <div className="godkjent">
    <img src={"../../images/boligmappa.png"} alt="Boligmappa"/>
    <img src={"../../images/sentralt_godkjent.jpg"} alt="Sentralt Godkjent"/>
   </div>
   <div className="all-socials">
    <h5>Kontakt Oss:</h5>
        <p><i className="fas fa-phone"></i>463 16 571</p>
        <p><i className="fas fa-envelope"></i>post@vikenbe.as</p>
        <div className="socials">
            <a href="https://www.facebook.com/VikenBoligentreprenor" target="_blank" rel="noreferrer" className="fab fa-facebook"> </a>
            <a href="https://www.instagram.com/vikenboligentreprenor/" target="_blank" rel="noreferrer" className="fab fa-instagram"> </a>
        </div>
   </div>
   </footer>
 );
}