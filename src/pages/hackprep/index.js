import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


import Carousel from "../../components/Carousel";
import Layout from "../../components/Layout";
import AvatarHelper from "../../components/AvatarHelper";
import unicode from "../../images/unicode-logo.svg"

import * as styles from "../../styles/templates/itemDetail.module.scss";

function createData(date, stack) {
    return { date, stack };
}

const rows = [
    createData('6th May', 'Frontend/Design & Node'),
    createData('8th May', 'Python/Django + Flutter'),
];

const useStyles = makeStyles((theme) => ({
    grid: {
        height: "100vh",
        backgroundColor: "#3d3d3d",
    },
    image: {
        height: "90%",
        width: "70%",
        margin: "5%",
        marginLeft: "15%"
    },

}));
function EventDetails() {
    // Avatars img fix
    const classes = useStyles()
    return (
        <Layout>
            <Grid container className={styles.rootContainer} component={Paper}>
                <Grid item xs={12} className={styles.header}>
                    <h2>HACKPREP 3.0</h2>
                </Grid>
                {/* Carousel */}
                <Grid item container className={styles.content}>
                    <Grid item xs={12} className={styles.unicodeGrid} container>
                        <Grid item xs={6}>
                            <img src={unicode} className={classes.image}></img>
                        </Grid>
                        <Grid item xs={6}>
                            <center><Button type="submit"
                                size="large"
                                variant="contained"
                                color="secondary"
                                className={styles.button}
                                style={{transform: "translateY(300px)", fontSize: "2rem"}}> Register Now! </Button></center>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12}>
                        <Grid item xs={12}>
                            <h3>About the event</h3>
                            <p>HackPrep is an annual series of events hosted by DJ Unicode in hopes to introduce the world of development to first-year coders. The aim of the event is to create a one-stop place to head-start their hackathon journeys, and cover important topics related to frontend, backend, and app development. Through HackPrep, we will be ensuring freshers get a clear idea of how to go about exploring the vast world of development, navigate through a plethora of resources, and eventually start building their own projects.</p>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Date</TableCell>
                                            <TableCell align="right">Stacks</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {row.date}
                                                </TableCell>
                                                <TableCell align="right">{row.stack}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                        {/* Links */}
                        <Grid item xs={12}>
                            <h3>Related Links: </h3>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Layout>
    );
}

export default EventDetails;