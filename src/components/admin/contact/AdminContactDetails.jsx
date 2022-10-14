import Heading from "../../layout/Heading";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, POSTS_PATH } from "../../../constants/api";
import { Breadcrumb, Container } from "react-bootstrap";

function AdminDetails() {
    const [comment, setComment] = useState(null);
    const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
    
	let { id } = useParams();

    const newUrl =  BASE_URL + POSTS_PATH + id;

    useEffect(function () {
		async function getReferance() {
			try {
				const response = await fetch(newUrl);

				if (response.ok) {
					const json = await response.json();
					setComment(json);
                    console.log("Info", json)
				} else {
					setError("An error occured");
				}
			} catch (error) {
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}

		getReferance();
         // eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

    if (loading) {
        return <div>Loading page...</div>;
    }
	if (error) {
        return <div>An error occured: {error}</div>;
    }
	return (
            <Container>
			<div className="contact-detail-container">
				<Heading content={comment.title.rendered} />
				<Breadcrumb>
      				<Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      				<Breadcrumb.Item href="/admin">
        			Admin
      				</Breadcrumb.Item>
					<Breadcrumb.Item href="/adminContact">
        			Kommentarer
      				</Breadcrumb.Item>
					<Breadcrumb.Item active>
        			{comment.title.rendered}
      				</Breadcrumb.Item>
    			</Breadcrumb>
				<div className="contact-detail-content-container">
					<h2 dangerouslySetInnerHTML={{ __html:comment.x_author }}></h2>
					<p dangerouslySetInnerHTML={{__html:comment.content.rendered }}></p>
				</div>
			</div>
            </Container>	
	);
}

export default AdminDetails