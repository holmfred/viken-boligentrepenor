import Heading from "../layout/Heading";
import ServicesCall from "./ServicesCall";
import ServicesContact from "./ServicesContact";
import { Breadcrumb } from "react-bootstrap";
import Container from "react-bootstrap/Container";

export default function Services() {
 return (
  <Container>
    <div className="services-container">
    <Heading content="Tjenster" />
    <Breadcrumb>
      				<Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      				<Breadcrumb.Item active>
        			Tjenester
              </Breadcrumb.Item>
    </Breadcrumb>
    <div className="services-container-content">
        <ServicesCall/>
        <ServicesContact/>
    </div>
  </div>

  </Container>
 );
}