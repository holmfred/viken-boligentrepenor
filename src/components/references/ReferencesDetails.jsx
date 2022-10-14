import Heading from "../layout/Heading";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, POSTS_PATH } from "../../constants/api";
import { Breadcrumb } from "react-bootstrap";
import Container from "react-bootstrap/Container";

function ReferenceDetails() {
    const [referance, setReferance] = useState(null);
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
					setReferance(json);
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
			<div className="reference-detail-container">
				<Heading content={referance.title.rendered} />

				<Breadcrumb>
      				<Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      				<Breadcrumb.Item href="/referencesPage">
        			Referanser
      				</Breadcrumb.Item>
      				<Breadcrumb.Item active>{referance.title.rendered}</Breadcrumb.Item>
    			</Breadcrumb>

				<div className="reference-detail-content-container">
					<p dangerouslySetInnerHTML={{__html:referance.content.rendered }}></p>
					<img src={referance.x_featured_media_original} alt={referance.title.renderd} />
				</div>
			</div>
            </Container>	
	);
}

export default ReferenceDetails