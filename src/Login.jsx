import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { NavComponent } from "./components/NavComponent";
import { AuthContext } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const { login } = useContext(AuthContext);
	const { isLoggedIn } = useContext(AuthContext);
	const { setUser } = useContext(AuthContext);
	const navigate = useNavigate();

	const onSubmit = (data) => {
		login();
		console.log(data);
		setUser(data);

		const lastPath = localStorage.getItem("lastPath") || "/";
		navigate(lastPath, {
			replace: true,
		});
	};

	return (
		<div>
			<NavComponent />
			<h1> Este es un fake login </h1>
			
			<form onSubmit={handleSubmit(onSubmit)}>
				<input {...register("USUARIO")} />

				<input {...register("CONTRASEÑA", { required: true })} />
				{errors.exampleRequired && <span>+</span>}

				<input type="submit" />
			</form>
		</div>
	);
};

export default Login;
