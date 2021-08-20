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
	},
	gridHead: {
		paddingBottom: "10px",
	},
	heading: {
		marginTop: 24,
		textAlign: "center",
		color: "#09c1d7",
	},
}));

export default function GridItem({ data }) {
	const classes = useStyles();

	const location =
		typeof window !== `undefined` && window ? window.location.href : "";
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
					<Grid
						item
						justifyContent="center"
						alignItems="center"
						xs={12}
						sm={12}
						className={classes.gridHead}
					>
						<Typography variant="h4" className={classes.heading}>
							{location.includes("projects") ? "Projects" : "Events"}
						</Typography>
					</Grid>
					{data.map((item, index) => (
						<Grid
							item
							spacing={15}
							key={index}
							justifyContent="center"
							alignItems="center"
						>
							<CardItem data={item} key={index} />
						</Grid>
					))}

					{location.includes("projects") ||
					location.includes("events") ? null : (
						<Grid
							item
							spacing={2}
							direction="row"
							justifyContent="flex-end"
							xs={12}
							sm={12}
						>
							<Link className={styles?.gridButton}>
								<Button color="inherit">View all</Button>
							</Link>
						</Grid>
					)}
				</Grid>
			</Container>
		</div>
	);
}
