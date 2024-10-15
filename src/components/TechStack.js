import React from "react";
import { Grid } from "@material-ui/core";
import * as styles from "../styles/components/techstack.module.scss";
import { GatsbyImage } from "gatsby-plugin-image";
import { useEffect } from "react";

function TechStack({ img, title, staticImage, techStack, xs, sm, md, lg, xl, delay }) {
    useEffect(() => {
        const aos = require('aos');
        aos.init({ once: true }); // Ensure animation runs only once per load
    }, []);

    return (
        <Grid
            item
            container
            xs={xs || 12}
            sm={sm || 6}
            md={md || 3}
            lg={lg || 3}
            xl={xl || 3}
            className={techStack ? styles.container : styles.avatarContainer}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={delay}
        >
            <Grid item xs={12} className={styles.gridItem}>
                {staticImage ? (
                    <img
                        src={img}
                        alt={title + " logo"}
                        className={techStack ? styles.img2 : styles.img}
                    />
                ) : (
                    <GatsbyImage
                        image={img}
                        alt={title + " logo"}
                        imgClassName={techStack ? styles.img2 : styles.img}
                    />
                )}
                <h4 className={styles.textOverflow}> {title} </h4>
            </Grid>
        </Grid>
    );
}




export default TechStack;
