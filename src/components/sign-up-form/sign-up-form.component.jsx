import { useState } from "react";

const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	console.log(formFields);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div>
			<h1>Sign up with your email and password</h1>
			<form onSubmit={() => {}}>
				<label>Display Name</label>
				<input
					type="text"
					required
					onChange={handleChange}
					value={displayName}
					name="displayName"
				/>

				<label>Email</label>
				<input
					type="email"
					required
					onChange={handleChange}
					value={email}
					name="email"
				/>

				<label>Password</label>
				<input
					type="password"
					required
					onChange={handleChange}
					value={password}
					name="password"
				/>

				<label>Confirm password</label>
				<input
					type="password"
					required
					onChange={handleChange}
					value={confirmPassword}
					name="confirmPassword"
				/>

				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
};
export default SignUpForm;
