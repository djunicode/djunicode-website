import React from "react";
import Typewriter from "typewriter-effect";
import * as styles from "../styles/components/text.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import img2 from "../images/django.svg";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: theme.spacing(32),
			height: theme.spacing(16),
		},
	},
	bluePaper: {
		backgroundColor: "#09c1d7",
		width: theme.spacing(36),
		height: theme.spacing(20),
		color: "#ffffff",
		borderRadius: "8px",
		position: "absolute",
		top: "20%",
		left: "8%",
		transform: "rotate(7deg)",
		boxShadow: "-1px 3px 24px 14px rgba(9, 193, 215, 0.12)",
		animation: `$mover 1000ms  ${theme.transitions.easing.easeInOut}`,
	},

	greensmallPaper: {
		backgroundColor: "#77ce90",
		width: theme.spacing(30),
		height: theme.spacing(14),
		color: "#ffffff",
		borderRadius: "6px",
		position: "absolute",
		top: "70%",
		left: "6%",
		transform: "rotate(-4deg)",
		boxShadow: "-1px 3px 24px 14px rgba(119, 206, 144, 0.19)",
		animation: `$mover 1000ms  ${theme.transitions.easing.easeInOut}`,
	},

	greenPaper: {
		backgroundColor: "#77ce90",
		width: theme.spacing(42),
		height: theme.spacing(8),
		color: "#ffffff",
		borderRadius: "8px",
		position: "absolute",
		top: "40%",
		right: "8%",
		transform: "rotate(-6deg)",
	},

	greenbgPaper: {
		backgroundColor: "#77ce90",
		width: theme.spacing(42),
		height: theme.spacing(8),
		color: "#ffffff",
		borderRadius: "8px",
		position: "absolute",
		top: "45%",
		right: "12%",
		opacity: "20%",
	},

	image: {
		position: "absolute",
		top: "70%",
		right: "9%",
		width: "5%",
		transform: "rotate(-3deg)",
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

			<div>
				<Paper elevation={0} className={classes.bluePaper}>
					Hello
				</Paper>
				<Paper elevation={0} className={classes.greenbgPaper} />
				<Paper elevation={0} className={classes.greenPaper}>
					Hello
				</Paper>

				<Paper elevation={0} className={classes.greensmallPaper}>
					Hello
				</Paper>

				<img src={img2} alt="logo" className={classes.image} />
			</div>
		</div>
	);
}
