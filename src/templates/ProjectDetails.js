import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import Carousel from '../components/Carousel'
import TechStack from '../components/TechStack'
import img1 from '../images/avatar.png'
import img2 from '../images/django.svg'
import * as styles from '../styles/templates/project.module.scss'
import p1 from '../images/p1i1.png'
import p2 from '../images/p1i2.png'

const useStyles = makeStyles(theme => ({
        "responsiveContainer": {
            [theme.breakpoints.down('sm')]:{
                textAlign:'center',
                justifyContent:"center"
            }
        }
    })
)
function ProjectDetails() {
    const classes = useStyles()
    return (
        <Grid container className={`${styles.pt}`}>
            <Grid container item xs={12} md={5} alignItems="center">
                <Grid item xs={12}>
                    <Carousel>
                        <div className={styles.imgContainer}>
                            <img src={p1} width="100%" className={styles.img}/>
                        </div>
                        <div className={styles.imgContainer}>
                            <img src={p2} width="100%" className={styles.img}/>
                        </div>
                    </Carousel>
                </Grid>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={12} md={6} container spacing={1} className={classes.responsiveContainer}>
                <Grid item xs={12}>
                    <h1>Title</h1>
                    <p>Description</p>
                </Grid>
                <Grid item container xs={12} className={classes.responsiveContainer}>
                    <h3>Tech stacks used</h3>
                    <Grid item container xs={12} className={classes.responsiveContainer}>
                        <TechStack imgUrl={img2} title="Django"/>
                        <TechStack imgUrl={img2} title="React"/>    
                    </Grid>
                </Grid>
                {/* Avatars */}
                <Grid item container xs={12} className={classes.responsiveContainer}>
                    <h3>TE Mentors</h3>
                    <Grid item container xs={12} className={classes.responsiveContainer}>
                        <TechStack imgUrl={img1} title="abc"/>
                        <TechStack imgUrl={img1} title="xuz"/>    
                    </Grid>
                    <h3>SE Mentees</h3>
                    <Grid item container xs={12} className={classes.responsiveContainer}>
                        <TechStack imgUrl={img1} title="abc"/>
                        <TechStack imgUrl={img1} title="xuz"/> 
                        <TechStack imgUrl={img1} title="user"/>    
                        <TechStack imgUrl={img1} title="test"/> 
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ProjectDetails
