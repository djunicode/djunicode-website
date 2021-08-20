import { Grid } from '@material-ui/core'
import React from 'react'
import TechStack from './TechStack'

function AvatarHelper({header, data}) {
    return (<>
        <Grid item xs={12}><h3>{header}</h3></Grid>
        <Grid item container xs={12} justifyContent="flex-start">
            {
                data.map((item, idx) => <TechStack key={idx} xs={4} sm={3} md={2} img={item.profile_pic.childImageSharp.gatsbyImageData} title={item.name}/>)
            }
        </Grid>
    </>)
}

export default AvatarHelper
