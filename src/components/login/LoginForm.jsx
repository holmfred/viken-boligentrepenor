import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import FormError from "../common/FormError";
import { BASE_URL, TOKEN_PATH } from "../../constants/api";
import { useNavigate } from "react-router-dom";
import  AuthContext  from "../../context/AuthContext"
import { useContext } from "react";


const url = BASE_URL + TOKEN_PATH;

const schema = yup.object().shape({
	username: yup.string().required("Please enter your username"),
	password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
	const [submitting, setSubmitting] = useState(false);
	const [loginError, setLoginError] = useState(null);

	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		formState: { errors },
	  } = useForm({
		resolver: yupResolver(schema),
	  });

	const [, setAuth] = useContext(AuthContext);

	async function onSubmit(data) {
		setSubmitting(true);
		setLoginError(null);

		console.log(data);

		try {
			const response = await axios.post(url, data);
			console.log("response", response.data);
			setAuth(response.data)
			navigate("/admin")
		} catch (error) {
			console.log("error", error);
			setLoginError(error.toString());
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<>
		<form onSubmit={handleSubmit(onSubmit)}>
				{loginError && <FormError>{loginError}</FormError>}
				<fieldset disabled={submitting}>
					<div>
						<p>Username/E-mail</p>
						<input {...register("username", { required: true })} />
						{errors.username && <FormError>{errors.username.message}</FormError>}
					</div>

					<div>
						<p>Password</p>
						<input type="password" {...register("password", { required: true })} />
						{errors.password && <FormError>{errors.password.message}</FormError>}
					</div>
					<button className="login-btn">{submitting ? "Loggin in..." : "Login"}</button>
				</fieldset>
			</form>
		</>
	);
}