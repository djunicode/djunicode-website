import React from "react";

// Material UI
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

//  Form Handling
import { Formik, Form } from "formik";

import * as styles from "../styles/components/contactform.module.scss";

function ContactForm() {
	return (
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
			onSubmit={(values) => {}}
		>
			{({
				values,
				isSubmitting,
				handleChange,
				handleBlur,
				touched,
				errors,
			}) => (
				<Form autoComplete="no">
					<div style={{ flexGrow: 1 }}>
						<Grid container spacing={3}>
							<Grid item xs={12} sm={6}>
								<TextField
									name="name"
									label="Your Name"
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
									label="Your E-Mail Address"
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
									label="Your message here"
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
					</div>
					<br />
					<div align="right">
						<Button
							type="submit"
							size="large"
							variant="contained"
							color="secondary"
							className={styles.button}
						>
							Send Message
						</Button>
					</div>
					<br />
					<br />
				</Form>
			)}
		</Formik>
	);
}

export default ContactForm;
