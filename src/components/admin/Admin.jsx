import { Link } from "react-router-dom";
import Heading from "../layout/Heading";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import { Breadcrumb } from "react-bootstrap";

export default function Admin() {
	return (
		<Container>
			<div className="admin-container">
			<Heading size="1" content="Admin" />

			<Breadcrumb>
      				<Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      				<Breadcrumb.Item active>
        			Admin
      				</Breadcrumb.Item>
    		</Breadcrumb>

			<div className="admin-container-content">
				<Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src="../../images/add.png" />
				<Card.Body>
					<Card.Title>Legg til Referanse</Card.Title>
					<Link to="/add"><Button variant="primary" className="card-btn">Legg Til</Button></Link>
				</Card.Body>
				</Card>

				<Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src="../../images/edit.png" />
				<Card.Body>
					<Card.Title>Redigere Referanser</Card.Title>
					<Link to="/editPage"><Button variant="primary" className="card-btn">Rediger</Button></Link>
				</Card.Body>
				</Card>

				<Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src="../../images/read.png" />
				<Card.Body>
					<Card.Title>Kommentarer</Card.Title>
					<Link to="/adminContact"><Button variant="primary" className="card-btn">Les</Button></Link>
				</Card.Body>
				</Card>
			</div>
		</div>
		</Container>
	);
}