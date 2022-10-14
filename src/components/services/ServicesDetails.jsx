import Heading from "../layout/Heading";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, PAGES_PATH } from "../../constants/api";
import { Breadcrumb, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ServicesDetail() {
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
    
	let { id } = useParams();

    const newUrl =  BASE_URL + PAGES_PATH + id;

    useEffect(function () {
		async function getService() {
			try {
				const response = await fetch(newUrl);

				if (response.ok) {
					const json = await response.json();
					setService(json);
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

		getService();
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
			<div className="services-detail-container">
				<Heading content={service.title.rendered} />
				<Breadcrumb>
      				<Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      				<Breadcrumb.Item href="/services">
        			Tjenester
      				</Breadcrumb.Item>
      				<Breadcrumb.Item active>{service.title.rendered}</Breadcrumb.Item>
    			</Breadcrumb>
				<div className="services-detail-content-container">
					<p dangerouslySetInnerHTML={{__html:service.content.rendered }}></p>
					<img src={service.x_featured_media_original} alt={service.title.renderd} />
				</div>
				<Link to={"/contact"}><Button variant="primary" className='services-detail-btn'>Kontakt Oss</Button></Link>
			</div>
            </Container>	
	);
}

export default ServicesDetail