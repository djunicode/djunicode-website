import React, { useState } from "react";
import FormData from "form-data";

import axios from "axios";

// Material UI
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

//  Form Handling
import { Formik, Form } from "formik";

import * as styles from "../styles/components/contactform.module.scss";
import Toasts from "./Toasts";

function ContactForm() {
	const [openSuccess, setOpenSuccess] = useState(false);

	const toggleSuccess = () => {
		setOpenSuccess(!openSuccess);
	};

	return (
		<React.Fragment>
			<Formik
				initialValues={{
					name: "",
					email: "",
					message: "",
				}}
				validate={(values) => {
					const errors = {};

					if (!values.name) {
						errors.name = "Required";
					} else if (values.name.length > 50) {
						errors.name = "Maximum 50 Characters";
					}

					if (!values.email) {
						errors.email = "Required";
					} else if (
						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
					) {
						errors.email = "Invalid email address";
					}

					if (!values.message) {
						errors.message = "Required";
					} else if (values.message.length > 500) {
						errors.message = "Maximum 500 Characters";
					}

					return errors;
				}}
				onSubmit={async (values, actions) => {
					try {
						const data = new FormData();

						data.append("name", values.name);
						data.append("email", values.email);
						data.append("message", values.message);

						const config = {
							method: "post",
							url: process.env.GATSBY_CONTACT_SUBMISSION_ENDPOINT,
							data: data,
						};

						const response = await axios(config);

						actions.setSubmitting(false);
						actions.resetForm();

						if (response.data.result === "success") {
							toggleSuccess();
						}
					} catch (err) {
						console.log(err);
					}
				}}
			>
				{({
					values,
					isSubmitting,
					isValid,
					handleChange,
					handleBlur,
					touched,
					errors,
				}) => (
					<Form>
						<Grid container spacing={3}>
							<Grid item xs={12} sm={6}>
								<TextField
									name="name"
									label={
										<div>
											Your Name <span style={{ color: "red" }}>*</span>
										</div>
									}
									fullWidth
									value={values.name}
									onChange={handleChange}
									onBlur={handleBlur}
									helperText={touched.name ? errors.name : ""}
									error={!!errors.name && touched.name}
									variant="outlined"
									size="small"
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									name="email"
									label={
										<div>
											Your E-mail <span style={{ color: "red" }}>*</span>
										</div>
									}
									fullWidth
									value={values.email}
									onChange={handleChange}
									onBlur={handleBlur}
									helperText={touched.email ? errors.email : ""}
									error={!!errors.email && touched.email}
									variant="outlined"
									size="small"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									name="message"
									label={
										<div>
											Your message here <span style={{ color: "red" }}>*</span>
										</div>
									}
									fullWidth
									multiline
									minRows={3}
									maxRows={8}
									value={values.message}
									onChange={handleChange}
									onBlur={handleBlur}
									helperText={touched.message ? errors.message : ""}
									error={!!errors.message && touched.message}
									variant="outlined"
									size="small"
								/>
							</Grid>
						</Grid>
						<br />
						<div align="right">
							<Button
								type="submit"
								size="large"
								variant="contained"
								color="secondary"
								className={styles.button}
								disabled={isSubmitting || !isValid}
							>
								Send Message
							</Button>
						</div>
						<br />
						<br />
					</Form>
				)}
			</Formik>

			<Toasts
				open={openSuccess}
				toggler={toggleSuccess}
				severity="success"
				message="Your response was received!"
			/>
		</React.Fragment>
	);
}

export default ContactForm;
