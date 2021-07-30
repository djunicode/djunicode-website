import { Grid, Paper } from '@material-ui/core'
import React from 'react'
import Carousel from '../components/Carousel'
import TechStack from '../components/TechStack'
import * as styles from '../styles/templates/itemDetail.module.scss'
import Layout from "../components/Layout";
import { graphql } from 'gatsby'
import AvatarHelper from '../components/AvatarHelper'

function ProjectDetails({data}) {
    const {title, description, stack, images, links} = data.projectsJson
    const {TEmentors, SEmentees} = data.projectsJson.contributors
    return (
        <Layout>
        <Grid container className={styles.rootContainer}  component={Paper}>
            <Grid item xs={12} className={styles.header}><h2>{title}</h2></Grid>
            {/* Carousel */}
            <Grid item container className={styles.content}>
                <Grid item xs={12} className={styles.mb}>
                    <Carousel>
                        {
                            images.map((item, idx) => 
                                <div key={idx} className={styles.imgContainer}>
                                    <img src={item} className={styles.img}/>
                                </div>
                            )
                        }
                    </Carousel>
                </Grid>
                <Grid item container xs={12} className={styles.pt}>
                    <Grid item xs={12}>
                        <h3>About the project</h3>
                        <p>{description}</p>
                    </Grid>
                    {/* Stacks and links */}
                    <Grid item xs={12}><h3>Tech stacks used</h3></Grid>
                    <Grid item container xs={12}>
                        {stack.map((item, idx)=> <TechStack key={idx} xs={4} sm={3} md={2} imgUrl={item[1]} title={item[0]}/>)}
                    </Grid>
                    <Grid item xs={12}><h3>Related Links</h3></Grid>
                    <Grid item container xs={8} sm={5}>
                        <ul>
                            {links.map((item, idx) => <li key={idx}><a href={item} target="_blank">{item}</a></li>)}
                        </ul>
                    </Grid>
                    {/* Avatars */}
                    <AvatarHelper header="TE Mentors" data={TEmentors} />
                    <AvatarHelper header="SE Mentees" data={SEmentees} />
                </Grid>
            </Grid>
        </Grid>
        </Layout>
    )
}

export default ProjectDetails

export const query = graphql`
query ProjectDetail($title:String) {
    projectsJson(title: {eq: $title}) {
      title
      stack
      images
      links
      description
      contributors {
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
