import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { theme } from "../theme";
import * as styles from "../styles/components/carditem.module.scss";
import { Link } from "gatsby";

const useStyles = makeStyles({
	root: {
		width: theme.spacing(38),
		minHeight: theme.spacing(30),
		boxShadow: " -1px 3px 6px 1px rgba(61,61,63,0.09);",
	},
	media: {
		height: 150,
	},
	content: {
		minHeight: 160,
	},
});
export default function CardItem({ data }) {
	const { title, desc, description, img_cover, images, slug } = data;

	const classes = useStyles();
	return (
		<Card className={classes.root} data-aos="fade-up" data-aos-duration="1000">
			<Link
				to={(desc ? "/projects" : "/events") + `/${slug}`}
				className={styles.link}
			>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image={
							desc
								? img_cover?.childImageSharp?.fluid?.src
								: images[0]?.childImageSharp?.fluid?.src
						}
					/>
					<CardContent className={classes.content}>
						<Typography noWrap gutterBottom variant="h5" component="h3">
							{title}
						</Typography>
						<Typography
							variant="body2"
							color="textSecondary"
							component="p"
							className={styles.description}
						>
							{desc || description}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Link>
		</Card>
	);
}
