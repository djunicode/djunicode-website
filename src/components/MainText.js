import React from "react";

import Typewriter from "typewriter-effect";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

// Styling
import * as styles from "../styles/components/text.module.scss";

// Static Assests
import img2 from "../images/django.svg";

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

	grid: {
		height: "inherit",
	},

	"@keyframes mover": {
		"0%": "transform: translateY(0) ",
		"100%": "transform: translateY(-10px)",
	},
}));

let width = window.innerWidth;

export default function MainText() {
	const classes = useStyles();
	return (
		<div className={styles?.textContainer}>
			<p className={styles?.textMain}>
				A club <br />
				where students
				<span className={styles?.textAnimated}>
					<Typewriter
						options={{
							strings: [
								'<span style="color: #09c1d7">Code.</span>',
								'<span style="color: #09c1d7">Create.</span>',
								'<span style="color: #09c1d7">Collaborate.</span>',
							],
							autoStart: true,
							loop: true,
							pauseFor: 1000,
							deleteSpeed: "natural",
						}}
					/>
				</span>
			</p>

			<p className={styles?.textSub}>
				Unicode is not just a student chapter it's a student community
			</p>

			{width > 1024 ? (
				<div className={classes.root}>
					<Paper elevation={0} className={classes.bluePaper}>
						<Grid
							className={classes.grid}
							container
							direction="row"
							alignContent="center"
							alignItems="center"
							justifyContent="center"
							wrap="wrap"
							spacing={1}
						>
							<Grid xs={4}>
								<b>15</b>
								<br /> Projects
							</Grid>
						</Grid>
					</Paper>
					<Paper elevation={0} className={classes.greenbgPaper} />
					<Paper elevation={0} className={classes.greenPaper}>
						<Grid
							className={classes.grid}
							container
							direction="row"
							alignContent="center"
							alignItems="center"
							justifyContent="center"
							wrap="wrap"
							spacing={1}
						>
							<Grid xs={4}>
								<b>210+</b>
								<br /> members
							</Grid>
						</Grid>
					</Paper>

					<Paper elevation={0} className={classes.greensmallPaper}>
						<Grid
							className={classes.grid}
							container
							direction="row"
							alignContent="center"
							alignItems="center"
							justifyContent="center"
							wrap="wrap"
							spacing={1}
						>
							<Grid xs={4}>
								<b>550+</b>
								<br /> pull requests
							</Grid>
						</Grid>
					</Paper>

					<img src={img2} alt="logo" className={classes.image} />
					<img src={img2} alt="logo" className={classes.image2} />
				</div>
			) : null}
		</div>
	);
}
