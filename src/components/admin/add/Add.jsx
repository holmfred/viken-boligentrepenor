import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ValidationError from "../../common/FormError";
import useAxios from "../../../hooks/useAxios";
import Heading from "../../layout/Heading";
import { POSTS_PATH } from "../../../constants/api";
import AddImage from "./AddImage";
import { Container } from "react-bootstrap";
import { Breadcrumb } from "react-bootstrap";

const schema = yup.object().shape({
	title: yup.string().required("Title is required"),
});

export default function AddPost() {
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
			const response = await http.post(POSTS_PATH, data);
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

		<Container>
			<div className="add-container">
			<Heading content="Legg til ny Referanse" />

			<Breadcrumb>
      				<Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      				<Breadcrumb.Item href="/admin">
        			Admin
      				</Breadcrumb.Item>
					  <Breadcrumb.Item active>
        			Ny Referanse
      				</Breadcrumb.Item>
    		</Breadcrumb>
			<form onSubmit={handleSubmit(onSubmit)}>
				{serverError && <ValidationError>{serverError}</ValidationError>}
				<fieldset disabled={submitting}>
					<div>
						<p>Tittel</p>
						<input name="title" type="text" {...register("title", {required: true})}/>
					</div>

					<AddImage/>

					<div>
						<p>Innhold</p>
						<textarea  rows={10} name="content" type="text" {...register("content", {required: true})} />
					</div>


					<hr/>

					<button className="add-btn">{submitting ? "Submitting..." : "Submit"}</button>
				</fieldset>
			</form>
			</div>
		</Container>
	)}