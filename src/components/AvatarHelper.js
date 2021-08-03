import { Grid } from '@material-ui/core'
import React from 'react'
import TechStack from './TechStack'

function AvatarHelper({header, data}) {
    //data = [{profile_img, name}, {profile_img, name}]
    return (<>
        <Grid item xs={12}><h3>{header}</h3></Grid>
        <Grid item container xs={12} justifyContent="space-around">
            {
                data.map((item, idx) => <TechStack key={idx} xs={4} sm={3} md={2} imgUrl={item.profile_img} title={item.name}/>)
            }
        </Grid>
    </>)
}

export default AvatarHelper
