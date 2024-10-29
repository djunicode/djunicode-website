import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Button, Typography } from "@material-ui/core";

import CardItem from "./CardItem";
import * as styles from "../styles/components/grid.module.scss";
import { Link } from "gatsby";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
	},
	gridHead: {
		paddingBottom: theme.spacing(2),
	},
	heading: {
		marginTop: theme.spacing(3),
		textAlign: "center",
		color: "#09c1d7",
		fontWeight: 700,
		letterSpacing: "1px",
	},
	cardContainer: {
		animation: `$fadeIn 0.7s ease-out`,
	},
	"@keyframes fadeIn": {
		"0%": { opacity: 0, transform: "translateY(20px)" },
		"100%": { opacity: 1, transform: "translateY(0)" },
	},
}));

export default function GridItem({ data }) {
	const classes = useStyles();

	const location =
		typeof window !== `undefined` && window ? window.location.href : "";

	// Sort data by year in descending order
	const sortedData = data
		.slice()
		.sort((a, b) => new Date(b.year) - new Date(a.year));

	return (
		<div className={classes.root}>
			<Container fixed>
				<Grid
					container
					spacing={3}
					direction="row"
					justifyContent="center"
					alignItems="center"
				>
					<Grid item xs={12} sm={12} className={classes.gridHead}>
						<Typography variant="h4" className={classes.heading}>
							{location.includes("projects") ? "Projects" : "Events"}
						</Typography>
					</Grid>
					{sortedData.map((item, index) => (
						<Grid
							item
							key={index}
							className={classes.cardContainer}
							justifyContent="center"
							alignItems="center"
						>
							<CardItem data={item} />
						</Grid>
					))}
					{location.includes("projects") || location.includes("events") ? null : (
						<Grid item xs={12} sm={12} justifyContent="flex-end">
							<Link className={styles.gridButton}>
								<Button color="inherit" className={styles.gridButton}>
									View all
								</Button>
							</Link>
						</Grid>
					)}
				</Grid>
			</Container>
		</div>
	);
}
