import { Grid, Tooltip } from "@material-ui/core";
import { Link } from "gatsby";
import React from "react";
import * as styles from "../styles/components/footer.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import github from "../images/github-icon.svg";
import linkedin from "../images/linkdin-icon.svg";
import twitter from "../images/twitter-icon.svg";

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
				&quot; Programming isn't about what you know
				<br />
				<span className={styles.footerQuote}>
					It's about what you can figure out.{" "}
				</span>{" "}
				&quot;
			</p>
			<div>
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
							className={styles.footerNav}
						>
							<img
								src={github}
								alt="github icon"
								className={styles.footerIcon}
							/>
						</a>
					</Grid>
					<Grid item>
						<a
							href="https://www.linkedin.com/company/djunicode/about/"
							target="_blank"
							className={styles.footerNav}
						>
							<img
								src={linkedin}
								alt="linkedin icon"
								className={styles.footerIcon}
							/>
						</a>
					</Grid>
					<Grid item>
						<a
							href="https://twitter.com/djunicode?s=08"
							target="_blank"
							className={styles.footerNav}
						>
							<img
								src={twitter}
								alt="twitter icon"
								className={styles.footerIcon}
							/>
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
				{"   "}
				and subscribe to our newsletter.
			</p>
			<div>
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
				<p>
					{" "}
					&copy;{" "}
					<span className={styles.footerCopy}>
						2017-2018 All Rights Reserved
					</span>
				</p>
			</div>
		</div>
	);
}
