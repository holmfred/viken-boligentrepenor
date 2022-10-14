import { Container } from "react-bootstrap";
import ContactForm from "./ContactForm";
import ContactParagraph from "./ContactParagraph";

export default function Contact() {
 return (
  <Container>
      <div className="contact-container">
   <ContactParagraph/>
   <ContactForm />
   </div>
  </Container>
 );
}