import React from 'react'
import { Grid } from "@material-ui/core";

/*
    This is just a simple placeholder so that we know what type of grid we're using
    for the tech stack grid. 
    This component will most likely be deleted and directly incorporated in the page. 
    
    It can also be reimplemented to simply recieve an array of tech stacks and their 
    logos and render TechStack component for each item in the array
    which will make imports on the index page cleaner.
*/

function TechStackGrid({children}) {
    return (
        <Grid container justifyContent="space-evenly">
            {children}
            {/* <TechStack imgUrl={logo} title="Django"/> */}
        </Grid>
    )
}

export default TechStackGrid
