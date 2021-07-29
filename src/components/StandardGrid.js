import React from 'react'
import { Grid } from "@material-ui/core";

/*
    This is just a simple placeholder so that we know what type of grid we're using
    for the tech stack grid and Quote Card grid. 
    This component will most likely be deleted and directly incorporated in the page. 
*/

function StandardGrid({children}) {
    return (
        <Grid container item justifyContent="space-evenly">
            {children}
            {/* <TechStack imgUrl={logo} title="Django"/> */}
            {/* <QuoteCard quote="Lorem Ipsum..." name="Joe" avatar={url} */}
        </Grid>
    )
}

export default StandardGrid
