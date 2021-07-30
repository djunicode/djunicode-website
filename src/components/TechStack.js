import React from "react";
import { Grid } from "@material-ui/core";
import * as styles from "../styles/components/techstack.module.scss";

/*
____________________
|   ___________    |
|   |Grid Item|    |
|   | (Image) |    |
|   |_________|    |
|   |Grid Item|    |
|   | (Title) |    |
|   |_________|    |
|__________________|

*/

function TechStack({ imgUrl, title, xs, sm, md, lg, xl }) {
	return (
		<Grid item container xs={xs || 5} sm={sm || 3} md={md || 3} lg={lg || 2} className={styles.container}>
			<Grid item xs={12}>
				<img src={imgUrl} alt={title + " logo"} className={styles.img} />
				<h4> {title} </h4>
			</Grid>
		</Grid>
	);
}

export default TechStack;
