import { Grid, makeStyles, Paper } from '@material-ui/core'
import React from 'react'
import Carousel from '../components/Carousel'
import TechStack from '../components/TechStack'
import img1 from '../images/avatar.png'
import img2 from '../images/django.svg'
import * as styles from '../styles/templates/itemDetail.module.scss'
import p1 from '../images/p1i1.png'
import p2 from '../images/p1i2.png'

const useStyles = makeStyles(theme => ({
        "container": {
        }
    })
)
function ItemDetails() {
    const classes = useStyles()
    return (
        <Grid container className={styles.rootContainer}  component={Paper}>
            <Grid item xs={12} className={styles.header}><h2>Project/Event Name</h2></Grid>
            {/* Carousel */}
            <Grid item container className={styles.content}>
                <Grid item xs={12} className={styles.mb}>
                    <Carousel>
                        <div className={styles.imgContainer}>
                            <img src={p1} className={styles.img}/>
                        </div>
                        <div className={styles.imgContainer}>
                            <img src={p2} className={styles.img}/>
                        </div>
                    </Carousel>
                </Grid>
                <Grid item container xs={12} className={`${classes.container} ${styles.pt}`}>
                    <Grid item xs={12}>
                        <h3>About the project</h3>
                        <p>Description</p>
                    </Grid>
                    {/* Stacks */}
                    <Grid item xs={12}><h3>Tech stacks used</h3></Grid>
                    <Grid item container xs={8} sm={5} className={classes.container}>
                        <TechStack imgUrl={img2} title="Django"/>
                        <TechStack imgUrl={img2} title="React"/>    
                    </Grid>
                    {/* Avatars */}
                    <Grid item xs={12}><h3>Externals</h3></Grid>
                    <Grid item container xs={8} sm={5} className={classes.container}>
                        <TechStack imgUrl={img1} title="abc"/>
                    </Grid>
                    <Grid item xs={12}><h3>Mentors</h3></Grid>
                    <Grid item container xs={8} sm={5} className={classes.container}>
                        <TechStack imgUrl={img1} title="abc"/>
                    </Grid>
                    <Grid item xs={12}><h3>Mentees</h3></Grid>
                    <Grid item container xs={8} sm={5} className={classes.container}>
                        <TechStack imgUrl={img1} title="abc"/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ItemDetails
