import Heading from "../../layout/Heading";
import CommentsCall from "./AdminContactCall";
import { Container } from "react-bootstrap";
import { Breadcrumb } from "react-bootstrap";



export default function AdminContact() {


 return (

    <Container>
        <div className="admin-contact-container">
        <Heading content="Kommentarer" />
        <Breadcrumb>
      				<Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      				<Breadcrumb.Item href="/admin">
        			Admin
      				</Breadcrumb.Item>
					  <Breadcrumb.Item active>
        			Kommentarer
      				</Breadcrumb.Item>
    	</Breadcrumb>
            <div className="admin-contact-content-container">
                <CommentsCall />
            </div>
        </div>
    </Container>
 );
}