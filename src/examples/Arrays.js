import React from "react";
import {
	Formik,
	Field,
	Form,
	FieldArray,
	ErrorMessage,
} from "formik";

import {Debug} from "../components/Debug";

const initialValues = {
	friends: [
		{
			name: "",
			email: "",
		},
	],
};

const Invitation = () => {
	return (
		<div className="formik-example">
			<h2>Invite friends</h2>

			<Formik
				initialValues={initialValues}
				onSubmit={values => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
					}, 500);
				}}
			>
				{({isSubmitting}) => (
				<Form>
					<div className="row">
						<div className="col">
							<Field name="friends[0].name">
								{({field, form}) => (
									<input {...field} type="text" placeholder="Jane Doe" />
								)}
							</Field>
						</div>

						<div className="col">
							<Field name="email" type="email" placeholder="jane@example.com" />
						</div>

						<div className="col">
							<button type="button">X</button>
						</div>
					</div>

					<button type="submit" disabled={isSubmitting} className="secondary">Add Friend</button>
					<button type="submit" disabled={isSubmitting}>Invite</button>

					<Debug />
				</Form>
				)}
			</Formik>
		</div>
	);
};

export default Invitation;
