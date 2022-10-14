import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../common/FormError";
import useAxios from "../../hooks/useAxios";
import Heading from "../layout/Heading";
import DeletePostButton from "./DeleteButton";
import { POSTS_PATH } from "../../constants/api";
import { Container } from "react-bootstrap";
import { Breadcrumb } from "react-bootstrap";

const schema = yup.object().shape({
	title: yup.string().required("Title is required"),
});

export default function EditPost() {
	const [post, setPost] = useState(null);
	const [updated, setUpdated] = useState(false);
	const [fetchingPost, setFetchingPost] = useState(true);
	const [updatingPost, setUpdatingPost] = useState(false);
	const [fetchError, setFetchError] = useState(null);
	const [updateError, setUpdateError] = useState(null);

	const { register, handleSubmit} = useForm({
		resolver: yupResolver(schema),
	});

	const http = useAxios();

	let { id } = useParams();

	const url = POSTS_PATH + id;

	useEffect(
		function () {
			async function getPost() {
				try {
					const response = await http.get(url);
					console.log("response", response.data);
					setPost(response.data);
				} catch (error) {
					console.log(error);
					setFetchError(error.toString());
				} finally {
					setFetchingPost(false);
				}
			}

			getPost();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

	async function onSubmit(data) {
		setUpdatingPost(true);
		setUpdateError(null);
		setUpdated(false);

		console.log(data);

		try {
			const response = await http.put(url, data);
			console.log("response", response.data);
			setUpdated(true);
		} catch (error) {
			console.log("error", error);
			setUpdateError(error.toString());
		} finally {
			setUpdatingPost(false);
		}
	}

	if (fetchingPost) return <div>Loading...</div>;

	if (fetchError) return <div>Error loading post</div>;

	return (

		<Container>
			<div className="edit-container">
		<Heading content="Rediger Referanse" />

		<Breadcrumb>
      				<Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      				<Breadcrumb.Item href="/admin">
        			Admin
      				</Breadcrumb.Item>
					<Breadcrumb.Item href="/editPage">
        			Rediger
      				</Breadcrumb.Item>
					<Breadcrumb.Item active>
        			{post.title.rendered}
      				</Breadcrumb.Item>
    	</Breadcrumb>

		<form onSubmit={handleSubmit(onSubmit)}>
			{updated && <div className="success"> <Heading size="2" content="The post was updated"/></div>}

			{updateError && <FormError>{updateError}</FormError>}

			<fieldset disabled={updatingPost}>
				<div>
					<p>Tittel</p>
					<input name="title" type="text" placeholder="Title" defaultValue={post.title.rendered} {...register("title", {required: true})} />
				</div>

				<div>
					<p>Hoved Bilde</p>
					<textarea name="x_featured_media_original" type="url" rows={3} defaultValue={post.x_featured_media_original} {...register("x_featured_media_original", {required: true})} />
				</div>

				<div>
					<p>Innhold</p>
					<textarea name="content" type="text" rows={10} defaultValue={post.content.rendered} {...register("content", {required: true})} />
				</div>

				<hr/>

				<div className="edit-button-container">
					<button>Update</button>
					<DeletePostButton id={post.id} />
				</div>
			</fieldset>
		</form>	
		</div>
		</Container>
	);
}