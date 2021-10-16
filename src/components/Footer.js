import { Grid, Tooltip } from "@material-ui/core";
import { Link } from "gatsby";
import React from "react";
import * as styles from "../styles/components/footer.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		textAlign: "center",
	},
}));

export default function Footer() {
	const classes = useStyles();
	return (
		<div className={styles.footerContainer}>
			<p>
				<strong>Code. Create. Collaborate.</strong>
			</p>
			<div style={{ overflow: "hidden" }}>
				<Grid
					container
					className={classes.root}
					spacing={2}
					direction="row"
					justifyContent="center"
					alignItems="center"
				>
					<Grid item>
						<a
							href="https://github.com/djunicode"
							target="_blank"
							rel="noreferrer"
							className={styles.footerNav}
						>
							<GitHubIcon fontSize="large" />
						</a>
					</Grid>
					<Grid item>
						<a
							href="https://www.linkedin.com/company/djunicode/about/"
							target="_blank"
							rel="noreferrer"
							className={styles.footerNav}
						>
							<LinkedInIcon fontSize="large" />
						</a>
					</Grid>
					<Grid item>
						<a
							href="https://twitter.com/djunicode?s=08"
							target="_blank"
							rel="noreferrer"
							className={styles.footerNav}
						>
							<TwitterIcon fontSize="large" />
						</a>
					</Grid>
					<Grid item>
						<a
							href="https://www.instagram.com/djunicode/"
							target="_blank"
							rel="noreferrer"
							className={styles.footerNav}
						>
							<InstagramIcon fontSize="large" />
						</a>
					</Grid>
				</Grid>
			</div>
			<p>
				Want to get in touch? Give us a shout on our social media handles or
				<br /> drop in a{" "}
				<Link to="/contact" className={styles.footerLink}>
					mail{" "}
				</Link>
			</p>
			<div style={{ overflow: "hidden" }}>
				<Grid
					container
					className={classes.root}
					spacing={2}
					direction="row"
					justifyContent="center"
					alignItems="center"
				>
					<Grid item>
						<Tooltip title="Go to About us" placement="left-start">
							<Link to="/" className={styles.footerNav}>
								About Us
							</Link>
						</Tooltip>
					</Grid>
					<Grid item>
						<Tooltip title="View Projects" placement="bottom">
							<Link to="/projects" className={styles.footerNav}>
								Projects
							</Link>
						</Tooltip>
					</Grid>
					<Grid item>
						<Tooltip title="View Events" placement="right">
							<Link to="/events" className={styles.footerNav}>
								Events
							</Link>
						</Tooltip>
					</Grid>
				</Grid>
			</div>
			<br />

			<div>
				<p style={{ marginBottom: "0" }}>
					{" "}
					&copy;{" "}
					<span className={styles.footerCopy}>2021 All Rights Reserved</span>
				</p>
			</div>
		</div>
	);
}
