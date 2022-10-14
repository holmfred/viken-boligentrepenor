import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

export default function ServicesContact() {
 return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../../images/annet.png" />
            <Card.Body>
              <Card.Title>Annet</Card.Title>
              <Link to={"/contact"}><Button variant="primary" className='services-btn'>Kontakt Oss</Button></Link>
            </Card.Body>
          </Card>
 );
}