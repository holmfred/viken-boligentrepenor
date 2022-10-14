import Heading from "../layout/Heading";

function ContactParagraph() {
 return (
    <div className="contact-container-paragraph">
        <Heading content="Kom I Kontakt Med Oss Nå!" />
        <p>Vi svarer mer enn gjerne på dine spørsmål.</p>
        <div className="contact-container-info">
            <p>Viken BOLIGENTREPENØR</p>
            <p>Tullipanvegen 6, 2034 Holter</p>
            <p>Org.nr: 927 169 096</p>
            <p>Faktura: post@vikenbe.as</p>
        </div>
        <div className="contact-container-socialmedia">
            <a href="https://www.facebook.com/VikenBoligentreprenor" target="_blank" rel="noreferrer" className="fab fa-facebook"> </a>
            <a href="https://www.instagram.com/vikenboligentreprenor/" target="_blank" rel="noreferrer" className="fab fa-instagram"> </a>
        </div>
    </div>
 );
}

export default ContactParagraph