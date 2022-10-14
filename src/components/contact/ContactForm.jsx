import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ValidationError from "../common/FormError";
import useAxios from "../../hooks/useAxios";
import { COMMENTS_PATH } from "../../constants/api";

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
			const response = await http.post(COMMENTS_PATH, data);
			console.log("response", response.data);
			history("/");
		} catch (error) {
			console.log("error", error);
			setServerError(error.toString());
		} finally {
			setSubmitting(false);
		}
	}

	return (
			<form onSubmit={handleSubmit(onSubmit)}>
				{serverError && <ValidationError>{serverError}</ValidationError>}
				<fieldset disabled={submitting}>
                    <div>
                        <div>
                            <p>Navn</p>
                            <input name="title" type="text" placeholder="Ditt Navn"{...register("x_author", {required: true})}/>
                        </div>

                        <div className='contact-mail-phone'>
                            <div className="email">
                                <p>E-post</p>
                                <input name="title" type="email" placeholder="Din e-post" {...register("content", {required: true})}/>
                            </div>

                            <div className="phone">
                                <p>Telefonnummer</p>
                                <input name="title" type="number" placeholder="Ditt telefonnummer"{...register("content", {required: true})}/>
                            </div>
                        </div>

                        <div>
                            <p>Emne</p>
                            <input name="title" type="text" placeholder="Hva gjelder henvendelsen?"{...register("title", {required: true})}/>
                        </div>

                        <div>
                            <p>Melding</p>
                            <textarea  rows={6} name="content" type="text" placeholder="Hva kan vi hjelpe deg med?" {...register("content", {required: true})} />
                        </div>
                    </div>

					<hr/>

					<button className="add-btn">{submitting ? "Submitting..." : "Submit"}</button>
				</fieldset>
			</form>
	)}