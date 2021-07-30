import React from "react";
import Typewriter from "typewriter-effect";
import * as styles from "../styles/components/text.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import img2 from "../images/django.svg";
import QuoteCard from "./QuoteCard";
import defaultAvatar from "../images/avatar.png";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: theme.spacing(32),
			height: theme.spacing(16),
		},
		flexGrow: 1,
	},
	bluePaper: {
		width: theme.spacing(32),
		height: theme.spacing(20),
		position: "absolute",
		top: "30%",
		right: "12%",
		transform: "rotate(7deg)",
		boxShadow: "-1px 3px 24px 16px rgba(75, 75, 75, 0.07)",
		animation: `$mover 1000ms  ${theme.transitions.easing.easeInOut}`,
	},

	greensmallPaper: {
		backgroundColor: "#09c1d7",
		width: theme.spacing(24),
		height: theme.spacing(14),
		color: "#ffffff",
		borderRadius: "6px",
		position: "absolute",
		top: "60%",
		left: "6%",
		transform: "rotate(-10deg)",
		boxShadow: "-1px 3px 24px 19px rgba(75, 75, 75, 0.10)",
		animation: `$mover 1000ms  ${theme.transitions.easing.easeInOut}`,
	},

	greenPaper: {
		backgroundColor: "#77ce90",
		width: theme.spacing(42),
		height: theme.spacing(8),
		color: "#ffffff",
		borderRadius: "8px",
		position: "absolute",
		top: "13%",
		right: "40%",
		transform: "rotate(-6deg)",
	},

	greenbgPaper: {
		backgroundColor: "#77ce90",
		width: theme.spacing(42),
		height: theme.spacing(8),
		color: "#ffffff",
		borderRadius: "8px",
		position: "absolute",
		top: "18%",
		right: "42%",
		opacity: "20%",
	},

	image: {
		position: "absolute",
		top: "70%",
		right: "9%",
		width: "6%",
		transform: "rotate(-3deg)",
	},

	image2: {
		position: "absolute",
		top: "30%",
		left: "9%",
		width: "6%",
		transform: "rotate(3deg)",
	},

	"@keyframes mover": {
		"0%": "transform: translateY(0) ",
		"100%": "transform: translateY(-10px)",
	},
}));

export default function MainText() {
	const classes = useStyles();
	return (
		<div className={styles?.textContainer}>
			<p className={styles?.textMain}>
				Build blazing fast <br />
				landing pages for
				<br />
				<span className={styles?.textAnimated}>
					<Typewriter
						options={{
							strings: [
								'<span style="color: #09c1d7">APP</span>',
								'<span style="color: #09c1d7">SEO</span>',
								'<span style="color: #09c1d7">BLA</span>',
							],
							autoStart: true,
							loop: true,
							pauseFor: 1000,
							deleteSpeed: "natural",
						}}
					/>{" "}
					service
				</span>
			</p>

			<p className={styles?.textSub}>
				Launch your site in style with Fastland, a modern collection of <br />
				crafted Gatsby JS pages and modular components.
			</p>

			<div className={classes.root}>
				<Paper elevation={0} className={classes.bluePaper}>
					<Grid xs={12} spacing={3}>
						<Grid>Hello</Grid>
						<Grid>heelo</Grid>
						<Grid>hello</Grid>
					</Grid>
				</Paper>
				<Paper elevation={0} className={classes.greenbgPaper} />
				<Paper elevation={0} className={classes.greenPaper}>
					<Grid xs={12} spacing={3} direction="row">
						<Grid item>Hello</Grid>
						<Grid item>hello</Grid>
					</Grid>
				</Paper>

				<Paper elevation={0} className={classes.greensmallPaper}>
					Hello
				</Paper>

				<img src={img2} alt="logo" className={classes.image} />
				<img src={img2} alt="logo" className={classes.image2} />
			</div>
		</div>
	);
}
