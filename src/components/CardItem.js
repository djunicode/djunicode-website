import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { theme } from "../theme";

const useStyles = makeStyles({
	root: {
		width: theme.spacing(38),
		height: theme.spacing(30),
		boxShadow: " -1px 3px 6px 1px rgba(61,61,63,0.09);",
	},
	media: {
		height: 100,
	},
	content: {
		height: 130,
	},

	description: {
		whiteSpace: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis",
	},
});

export default function CardItem({ data }) {
	const { title, description } = data;

	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image="#"
					title="Contemplative Reptile"
				/>
				<CardContent className={classes.content}>
					<Typography gutterBottom variant="h5" component="h3">
						{title}
					</Typography>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p"
						className={classes.description}
					>
						{description}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
