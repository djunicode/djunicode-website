import { Grid } from "@material-ui/core";
import React from "react";
import * as styles from "../styles/components/quotecard.module.scss";
import defaultAvatar from "../images/avatar.png";
import { GatsbyImage } from "gatsby-plugin-image";

function QuoteCard({ quote, name, dynamicImage, avatar }) {
	return (
		<Grid item xs={12} sm={6} lg={4}>
			<div className={styles.card} data-aos="fade-up" data-aos-duration="1000">
				<div className={styles.cardLayer}>
					<div className={styles.imgContainer}>
						{dynamicImage ? (
							<GatsbyImage image={avatar} alt="Avatar" />
						) : (
							<img src={avatar || defaultAvatar} alt="Avatar" />
						)}
					</div>
					<h3 className={styles.header}>{name}</h3>
					<div className={styles.content}>
						<p className={styles.description}>{quote}</p>
					</div>
				</div>
			</div>
		</Grid>
	);
}

export default QuoteCard;
