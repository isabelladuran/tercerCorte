import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { NavComponent } from "./NavComponent";

const PrivateRoute = ({ children }) => {
	const { isLoggedIn } = useContext(AuthContext);
	const navigate = useNavigate();

	const { pathname, search } = useLocation();
	localStorage.setItem("lastPath", `${pathname}${search}`);

	const goToLogIn = () => {
		navigate("/login");
	};

	return isLoggedIn ? (
		children
	) : (
		<>
			<NavComponent />
			<h1>COmponente</h1>
			<button onClick={() => goToLogIn()}> Log Out</button>
		</>
	);
};
export default PrivateRoute;
