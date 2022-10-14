import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BASE_URL, OUTDOORS_PATH } from "../../../constants/api"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function OutdoorsCall() {
	const [references, setReferances] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
  	const API = BASE_URL + OUTDOORS_PATH

	useEffect(function () {
		async function getReferences() {
			try {
				const response = await fetch(API);

				if (response.ok) {
					const json = await response.json();
					setReferances(json);
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

		getReferences();
		
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
    {references.map((posts) => {
          return (

            <Card style={{ width: '18rem' }} key={posts.id}>
              <Card.Img variant="top" src={posts.x_featured_media_original} />
              <Card.Body>
                <Card.Title>{posts.title.rendered}</Card.Title>
                <Link to={`/references/${posts.id}`}><Button variant="primary" className="card-btn">Les Mer</Button></Link>
              </Card.Body>
            </Card>

          )
        })}
    </>
        
  )}

export default OutdoorsCall