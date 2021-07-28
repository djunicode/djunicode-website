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
	},
}));

export default function GridItem({ data }) {
	const classes = useStyles();

	//const location = window.location.href;
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
							Projects
						</Typography>
					</Grid>
					{data.map((item) => (
						<Grid
							item
							spacing={5}
							key={item.key}
							justifyContent="center"
							alignItems="center"
						>
							<CardItem data={item} key={item.key} />
						</Grid>
					))}

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
				</Grid>
			</Container>
		</div>
	);
}
