import React from "react";

import Typewriter from "typewriter-effect";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import UserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import ComputerIcon from "@material-ui/icons/Computer";
import GitHubIcon from "@material-ui/icons/GitHub";

// Styling
import * as styles from "../styles/components/text.module.scss";

// Static Assests
import djangoImage from "../images/techStacks/django.svg";
import nodeJsImage from "../images/techStacks/nodejs.svg";
import reactImage from "../images/techStacks/react.svg";
import flutterImage from "../images/about/Flutter.svg";
import gitImage from "../images/techStacks/git.svg";
import blockchainImage from "../images/techStacks/blockchain.svg";
import figmaImage from "../images/techStacks/figma.svg";
import { Hidden } from "@material-ui/core";

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
		zIndex: "-1",
		fontSize: "1.8rem",
		backgroundImage:
			"linear-gradient(to right top, #77ce90, #57cda4, #35cab8, #0ec6c9, #09c1d7)",
		width: theme.spacing(36),
		height: theme.spacing(26),
		color: "#ffffff",
		position: "absolute",
		top: "30%",
		right: "10%",
		transform: "rotate(7deg)",
		boxShadow: "-1px 3px 24px 16px rgba(75, 75, 75, 0.16)",
		[theme.breakpoints.down("sm")]: {
			right: "1%",
			height: theme.spacing(15),
			width: theme.spacing(25),
		},
	},
	bluePaperSM: {
		zIndex: "-1",
		fontSize: "1.8rem",
		backgroundImage:
			"linear-gradient(to right top, #77ce90, #57cda4, #35cab8, #0ec6c9, #09c1d7)",
		width: "100%",
		height: theme.spacing(20),
		color: "#ffffff",
		boxShadow: "-1px 3px 24px 16px rgba(75, 75, 75, 0.16)",
		borderRadius: "6px",
	},
	greensmallPaperSM: {
		zIndex: "-1",
		fontSize: "1.5rem",
		backgroundColor: "#09c1d7",
		width: "100%",
		height: theme.spacing(20),
		color: "#ffffff",
		borderRadius: "6px",
		margin: "auto",
	},
	greensmallPaper: {
		zIndex: "-1",
		fontSize: "1.5rem",
		backgroundColor: "#09c1d7",
		width: theme.spacing(28),
		height: theme.spacing(22),
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
		zIndex: "-1",
		fontSize: "1.2rem",
		backgroundColor: "#77ce90",
		width: theme.spacing(42),
		height: theme.spacing(12),
		color: "#ffffff",
		borderRadius: "8px",
		position: "absolute",
		top: "13%",
		right: "40%",
		transform: "rotate(-6deg)",
		boxShadow: "-1px 3px 24px 16px rgba(75, 75, 75, 0.16)",
	},

	greenbgPaper: {
		zIndex: "-1",
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

	greenPaperSM: {
		zIndex: "-1",
		fontSize: "1.2rem",
		backgroundColor: "#77ce90",
		width: theme.spacing(42),
		height: theme.spacing(12),
		color: "#ffffff",
		borderRadius: "8px",
		// position: "absolute",
		// top: "13%",
		// right: "40%",
		margin: "auto",
		transform: "rotate(-6deg)",
		boxShadow: "-1px 3px 24px 16px rgba(75, 75, 75, 0.16)",
	},

	greenbgPaperSM: {
		zIndex: "-1",
		backgroundColor: "#77ce90",
		width: theme.spacing(42),
		height: theme.spacing(8),
		color: "#ffffff",
		borderRadius: "8px",
		margin: "auto",
		// position: "absolute",
		// top: "18%",
		// right: "42%",
		opacity: "20%",
		transform: `translateY(${1.3 * theme.spacing(12)}px)`,
	},

	image: {
		position: "absolute",
		top: "70%",
		right: "9%",
		width: "8%",
		minWidth: "100px",
		transform: "rotate(-3deg)",
		animation: styles.mover2 + " 12s infinite",
	},

	image2: {
		position: "absolute",
		top: "39%",
		left: "9%",
		width: "8%",
		minWidth: "100px",
		transform: "rotate(3deg)",
		animation: styles.mover + " 15s infinite",
	},

	grid: {
		height: "inherit",
	},
}));

export default function MainText() {
	const classes = useStyles();
	return (
		<div className={styles?.textContainer}>
			<Hidden smUp>
				{/* 210+ Members on small screen */}
				<Grid container>
				<Grid item xs={12} sm={4}>
						<Paper elevation={0} className={classes.greenbgPaperSM} />
						<Paper elevation={0} className={classes.greenPaperSM}>
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
									<div className={styles.textAnimated}>
										<UserCircleIcon />
										&nbsp;
										<b>210+</b>
									</div>
									members
								</Grid>
							</Grid>
						</Paper>
					</Grid>
					{/* <Grid item xs={4}>
						Test
					</Grid>
					<Grid item xs={4}>
						Test
					</Grid>
					<Grid item xs={4}>
						Test
					</Grid> */}
				</Grid>
			</Hidden>
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
			<div>
				{/* <p className={styles?.textSub}>
					Unicode is not just a student chapter it's a student community.
				</p> */}
			</div>
			{/* Floating Cards */}
			<Hidden xsDown>
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
							<Grid xs={4} style={{ textAlign: "center" }}>
								<div className={styles.textAnimated}>
									<ComputerIcon />
									&nbsp;
									<b>20+</b>
								</div>
								Projects
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
							<Grid xs={4} >
								<div className={styles.textAnimated}>
									<UserCircleIcon />
									&nbsp;
									<b>300+</b>
								</div>
								members
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
								<div className={styles.textAnimated}>
									<GitHubIcon />
									&nbsp;
									<b>1k+</b>
								</div>
								pull requests
							</Grid>
						</Grid>
					</Paper>

					<img src={djangoImage} alt="logo" className={classes.image} />
                    <img src={nodeJsImage} alt="logo" className={classes.image2} />
                    <img src={blockchainImage} alt="logo" className={classes.image2} style={{marginTop:'40vh',marginLeft:'15vw'}}/>
                    <div className={styles.textImage}>
                        <img src={gitImage} alt="logo" className={styles.textImage3} />
                    </div>
                    <div className={styles.textImage}>
                        <img src={flutterImage} alt="logo" className={styles.textImage4} />
                    </div>
                    <img src={reactImage} alt="logo" className={styles.textImage5} />
                    <img src={figmaImage} alt="logo" className={styles.textImage6} />
				</div>
			</Hidden>
			<Hidden smUp>
				<Grid
					container
					style={{ position: "absolute", bottom: "3%" }}
					alignItems="center"
				>
					<Grid item xs={12} sm={4}>
						<Paper elevation={0} className={classes.greensmallPaperSM}>
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
									<div className={styles.textAnimated}>
										<GitHubIcon />
										&nbsp;
										<b>1k+</b>
									</div>
									pull requests
								</Grid>
							</Grid>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Paper elevation={0} className={classes.bluePaperSM}>
							<Grid
								className={classes.grid}
								id="projects"
								container
								direction="row"
								alignContent="center"
								alignItems="center"
								justifyContent="center"
								wrap="wrap"
								spacing={1}
							>
								<Grid xs={4} style={{ textAlign: "center" }}>
									<div className={styles.textAnimated}>
										<ComputerIcon />
										&nbsp;
										<b>50+</b>
									</div>
									Projects
								</Grid>
							</Grid>
						</Paper>
					</Grid>
				</Grid>
			</Hidden>
		</div>
	);
}
