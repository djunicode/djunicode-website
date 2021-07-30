import React from "react";

import Grid from "@material-ui/core/Grid";

import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";
import Seo from "../components/SEO";

import * as styles from "../styles/pages/contact.module.scss";

function ContactPage() {
	return (
		<Layout>
			<Seo title="Contact" />
			<div className={styles.contactContainer}>
				<Grid container spacing={8}>
					<Grid item sm={12} md={7}>
						<h2 className={styles.contactTitle}>Contact Us</h2>
						<h3 className={styles.contactSubtitle}>Send A Message</h3>
						<br />
						<ContactForm />
					</Grid>
					<Grid item sm={12} md={5}>
						<ContactCard />
					</Grid>
				</Grid>
			</div>
		</Layout>
	);
}

export default ContactPage;
