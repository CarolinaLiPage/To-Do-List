import users from "../data/db";
import { useState } from "react";

const initialFormValues = {
	username: "",
	password: "",
};

function SignUp() {
	const [formValues, setFormValues] = useState(initialFormValues);

	const addUser = (e) => {
		e.preventDefault();
		users.push(formValues);
		console.log(users);
	};

	const handleChanges = (e) => {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className="signUpButton">
			<h2>Sign Up</h2>
			<form onSubmit={addUser}>
				<input
					className="input"
					type="text"
					name="username"
					placeholder="Enter your username"
					value={formValues.username}
					onChange={handleChanges}
				/>
				<input
					className="input"
					type="password"
					name="password"
					placeholder="Enter your password"
					value={formValues.password}
					onChange={handleChanges}
				/>
				<button className="addButton addButtonText">Sign Up</button>
			</form>
		</div>
	);
}

export default SignUp;
