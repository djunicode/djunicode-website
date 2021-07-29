import { Grid } from '@material-ui/core'
import React from 'react'
import Carousel from '../components/Carousel'
import StandardGrid from '../components/StandardGrid'
import TechStack from '../components/TechStack'
import img1 from '../images/avatar.png'
import img2 from '../images/django.svg'
import * as styles from '../styles/templates/project.module.scss'

function ProjectDetails() {
    return (
        <Grid container className={styles.pt}>
            <Grid item xs={12} md={5}>
                <Carousel>
                    <img src={img1} className={styles.img}/>
                    <img src={img2} className={styles.img}/>
                </Carousel>
            </Grid>
            <Grid item xs={12} md={1} /> {/* Padding */}
            <Grid item xs={12} md={6}>
                <Grid item xs={12}>
                    <h1>Title</h1>
                    <p>Description</p>
                </Grid>
                <StandardGrid>
                    <TechStack imgUrl={img2} title="Django"/>
                </StandardGrid>
            </Grid>
        </Grid>
    )
}

export default ProjectDetails
