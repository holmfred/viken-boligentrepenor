import { useState, useEffect } from "react";
import { BASE_URL, COMMENTS_PATH} from "../../../constants/api"
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function CommentsCall() {
	const [comments, setComments] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
  	const API = BASE_URL + COMMENTS_PATH;

	useEffect(function () {
		async function getComments() {
			try {
				const response = await fetch(API);
				console.log(response)

				if (response.ok) {
					const json = await response.json();
					setComments(json);
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

		getComments();
		
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
				{comments.map((comment) => {
				return (
					
					<Card style={{ width: '18rem' }} key={comment.id}>
						<Card.Body>
							<Card.Title>{comment.title.rendered}</Card.Title>
							<Card.Text>Navn:<p dangerouslySetInnerHTML={{__html:comment.x_author }}></p></Card.Text>
							<Card.Text><p dangerouslySetInnerHTML={{__html:comment.content.rendered }}></p></Card.Text>
							<Link to={`/adminContact/${comment.id}`}><Button variant="primary" className="card-btn">Les Mer</Button></Link>
						</Card.Body>
            		</Card>

				)
				})}
    		</>
        
  )}

export default CommentsCall