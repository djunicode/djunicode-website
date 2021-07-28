import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardItem from "./CardItem";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	heading: {
		textAlign: "center",
	},
}));

export default function GridItem({ data }) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container fixed>
				<Grid
					container
					spacing={5}
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
				</Grid>
			</Container>
		</div>
	);
}
