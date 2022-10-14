import { Container } from "react-bootstrap";
import Heading from "../layout/Heading";
import PostList from "./PostList";
import { Breadcrumb } from "react-bootstrap";

export default function EditPage() {
	return (
		<Container>
			<div className="edit-container">
			<Heading size="1" content="Rediger" />

			<Breadcrumb>
      				<Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      				<Breadcrumb.Item href="/admin">
        			Admin
      				</Breadcrumb.Item>
					  <Breadcrumb.Item active>
        			Rediger
      				</Breadcrumb.Item>
    			</Breadcrumb>
            <PostList/>
		</div>
		</Container>
	);
}