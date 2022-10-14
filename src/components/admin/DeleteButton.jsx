import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { POSTS_PATH } from "../../constants/api";

export default function DeletePostButton({ id }) {
	const [error, setError] = useState(null);

	const http = useAxios();
	const history = useNavigate();

	const url = POSTS_PATH + id;

	async function handleDelete() {
		const confirmDelete = window.confirm("Delete this post?");

		if (confirmDelete) {
			try {
				await http.delete(url);
				history.push("/admin");
			} catch (error) {
				setError(error);
			}
		}
	}

	return (
		<button type="button" className="delete" onClick={handleDelete}>
			{error ? "Error" : "Delete"}
		</button>
	);
}

DeletePostButton.propTypes = {
	id: PropTypes.number.isRequired,
};