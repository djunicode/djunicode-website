import React from "react";
import GridItem from "../../components/GridItem";

const data = [
	{
		key: "1",
		title: "Project 1",
		description:
			"Voluptate nisi ut pariatur proident qui quis ipsum cillum exercitation consequat occaecat officia deserunt minim.",
	},
	{
		key: "2",
		title: "Project 2",
		description:
			"Voluptate nisi ut pariatur proident qui quis ipsum cillum exercitation consequat occaecat officia deserunt minim.",
	},
	{
		key: "3",
		title: "Project 3",
		description:
			"Voluptate nisi ut pariatur proident qui quis ipsum cillum exercitation consequat occaecat officia deserunt minim.",
	},
	{
		key: "4",
		title: "Project 4",
		description:
			"Voluptate nisi ut pariatur proident qui quis ipsum cillum exercitation consequat occaecat officia deserunt minim.",
	},
	{
		key: "5",
		title: "Project 5",
		description:
			"Voluptate nisi ut pariatur proident qui quis ipsum cillum exercitation consequat occaecat officia deserunt minim.",
	},
	{
		key: "6",
		title: "Project 6",
		description:
			"Voluptate nisi ut pariatur proident qui quis ipsum cillum exercitation consequat occaecat officia deserunt minim.",
	},
];

export default function Project() {
	return (
		<GridItem data={data} />
		// <div className={classes.root}>
		// 	<Container fixed>
		// 		<Grid
		// 			container
		// 			spacing={5}
		// 			direction="row"
		// 			justifyContent="center"
		// 			alignItems="center"
		// 		>
		// 			<Grid
		// 				item
		// 				justifyContent="center"
		// 				alignItems="center"
		// 				xs={12}
		// 				sm={12}
		// 			>
		// 				<Typography variant="h4" className={classes.heading}>
		// 					Projects
		// 				</Typography>
		// 			</Grid>
		// 			{data.map((item) => (
		// 				<Grid
		// 					item
		// 					spacing={5}
		// 					key={item.key}
		// 					justifyContent="center"
		// 					alignItems="center"
		// 				>
		// 					<CardItem data={item} key={item.key} />
		// 				</Grid>
		// 			))}
		// 		</Grid>
		// 	</Container>
		// </div>
	);
}
