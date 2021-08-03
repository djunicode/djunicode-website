import { Grid, Paper } from '@material-ui/core'
import React from 'react'
import Carousel from '../components/Carousel'
import * as styles from '../styles/templates/itemDetail.module.scss'
import Layout from "../components/Layout";
import { graphql } from 'gatsby'
import AvatarHelper from '../components/AvatarHelper'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function EventDetails({data}) {
    console.log(data)
    const { title, description, links, images } = data.eventsJson
    const {Externals, SEmentees, TEmentors} = data.eventsJson.contributors
    // Avatars img fix
    return (
        <Layout>
        <Grid container className={styles.rootContainer}  component={Paper}>
            <Grid item xs={12} className={styles.header}><h2>{title}</h2></Grid>
            {/* Carousel */}
            <Grid item container className={styles.content}>
                <Grid item xs={12} className={styles.mb}>
                    <Carousel>
                        {/* load event images */}
                        {
                            images.map((item, idx) => 
                                <GatsbyImage key={idx} image={item.childImageSharp.gatsbyImageData} alt="Event Image" className={styles.imgContainer} imgClassName={styles.img}/>
                            )
                        }
                    </Carousel>
                </Grid>
                <Grid item container xs={12} className={styles.pt}>
                    <Grid item xs={12}>
                        <h3>About the event</h3>
                        <p>{description}</p>
                    </Grid>
                    {/* Links */}
                    <Grid item xs={12}><h3>Related Links</h3></Grid>
                    <Grid item container xs={8} sm={5}>
                        <ul>
                            {links.map((item, idx) => <li key={idx}><a href={item} target="_blank">{item}</a></li>)}
                        </ul>
                    </Grid>
                    {/* Avatars */}
                    <AvatarHelper header="Guests" data={Externals} />
                    <AvatarHelper header="TE Mentors" data={TEmentors} />
                    <AvatarHelper header="SE Mentees" data={SEmentees} />
                </Grid>
            </Grid>
        </Grid>
        </Layout>
    )
}

export default EventDetails
export const query = graphql`
query EventDetail($title: String) {
    eventsJson(title: {eq: $title}) {
      title
      links
      description
      images {
        childImageSharp {
            gatsbyImageData
        }
      }
      contributors {
        Externals {
          name
          profile_img
        }
        SEmentees {
          name
          profile_img
        }
        TEmentors {
          name
          profile_img
        }
      }
    }
  }  
`
