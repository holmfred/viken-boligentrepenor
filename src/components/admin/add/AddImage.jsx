import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ValidationError from "../../common/FormError";
import useAxios from "../../../hooks/useAxios";
import { MEDIA_PATH } from "../../../constants/api";

const schema = yup.object().shape({
	title: yup.string().required("Title is required"),
});

export default function AddImage() {
	const [submitting, setSubmitting] = useState(false);
	const [serverError, setServerError] = useState(null);

	const history = useNavigate();
	const http = useAxios();

	const { register, handleSubmit } = useForm({
		resolver: yupResolver(schema),
	});

	async function onSubmit(data) {
		setSubmitting(true);
		setServerError(null);

		data.status = "publish";

		if (data.featured_media === "") {
			data.featured_media = null;
		}

		console.log(data);

		try {
			const response = await http.post(MEDIA_PATH, data);
			console.log("response", response.data);
			history("/admin");
		} catch (error) {
			console.log("error", error);
			setServerError(error.toString());
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<div className="add-image-container">
			<form onSubmit={handleSubmit(onSubmit)}>
				{serverError && <ValidationError>{serverError}</ValidationError>}
				<fieldset disabled={submitting}>

                    <div>
						<p>Hoved Bilde</p>
						<input name="x_featured_media_original" type="file" {...register("x_featured_media_original", {required: true})} />
					</div>


					<div>
						<p>Bilder</p>
						<input name="x_featured_media_original" type="file" {...register("x_featured_media_original", {required: true})} />
					</div>

				</fieldset>
			</form>
		</div>
	)}