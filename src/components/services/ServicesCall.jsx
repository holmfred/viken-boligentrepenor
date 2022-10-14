import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BASE_URL, PAGES_PATH} from "../../constants/api"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ServicesCall() {
	const [pages, setPages] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
  const API = BASE_URL + PAGES_PATH

	useEffect(function () {
		async function getPages() {
			try {
				const response = await fetch(API);

				if (response.ok) {
					const json = await response.json();
					setPages(json);
                    console.log(json)
				} else {
					setError("An error occured");
				}
			} catch (error) {
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}

		getPages();
         // eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) {
        return <div>Loading pages...</div>;
    }
	if (error) {
        return <div>An error occured: {error}</div>;
    }
	return (
    <>
    {pages.map((page) => {
          return (

            <Card style={{ width: '18rem' }} key={page.id}>
              <Card.Img variant="top" src={page.x_featured_media_original} />
              <Card.Body>
                <Card.Title>{page.title.rendered}</Card.Title>
                <Link to={`/services/${page.id}`}><Button variant="primary" className="services-btn">Les Mer</Button></Link>
              </Card.Body>
            </Card>

          )
        })}
    </>
        
  )}

export default ServicesCall