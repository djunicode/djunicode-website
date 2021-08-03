import { Grid, Paper } from '@material-ui/core'
import React from 'react'
import Carousel from '../components/Carousel'
import TechStack from '../components/TechStack'
import * as styles from '../styles/templates/itemDetail.module.scss'
import Layout from "../components/Layout";
import { graphql } from 'gatsby'
import AvatarHelper from '../components/AvatarHelper'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function ProjectDetails({data}) {
    console.log(data)
    const {title, desc, links, stack, tech, year, img, img_cover } = data.projectsJson
    const TEmentors = data.TEmentors.nodes
    const BEmentors = data.BEmentors.nodes
    const SEmentees = data.SEmentees.nodes

    const images = [img_cover, ...img]
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
                                <GatsbyImage key={idx} image={item.childImageSharp.gatsbyImageData} alt="Project Image" className={styles.imgContainer} imgClassName={styles.img}/>
                            )
                        }
                    </Carousel>
                </Grid>
                <Grid item container xs={12} className={styles.pt}>
                    <Grid item xs={12}>
                        <h3>About the project</h3>
                        <p>{desc}</p>
                    </Grid>
                    {/* Stacks and links */}
                    <Grid item xs={12}><h3>Tech stacks used</h3></Grid>
                    <Grid item container xs={12}>
                        <ul>
                            {stack.map((item, idx) => <li key={idx}>{item}</li>)}
                        </ul>
                        {/* {stack.map((item, idx)=> <TechStack key={idx} xs={4} sm={3} md={2} imgUrl={item[1]} title={item[0]}/>)} */}
                    </Grid>
                    <Grid item xs={12}><h3>Related Links</h3></Grid>
                    <Grid item container xs={8} sm={5}>
                        <ul>
                            {links.map((item, idx) => <li key={idx}><a href={item} target="_blank">{item}</a></li>)}
                        </ul>
                    </Grid>
                    {/* Avatars */}
                    {BEmentors.length?<AvatarHelper header="BE Mentors" data={BEmentors} />:null}
                    {TEmentors.length?<AvatarHelper header="TE Mentors" data={TEmentors} />:null}
                    {SEmentees.length?<AvatarHelper header="SE Mentees" data={SEmentees} />:null}
                </Grid>
            </Grid>
        </Grid>
        </Layout>
    )
}

export default ProjectDetails

export const query = graphql`
query ProjectDetail($slug: String, $TEmentors: [Int], $BEmentors: [Int], $SEmentees: [Int]) {
    projectsJson(slug: {eq: $slug}) {
      title
      desc
      links
      stack
      tech
      year
      img {
        childImageSharp {
          gatsbyImageData
        }
      }
      img_cover {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    BEmentors: allProfileJson(filter: {key: {in: $BEmentors}}) {
        nodes {
          key
          name
          profile_pic
          email
          desc
          LinkedIn
          GitHub
        }
      }
    TEmentors:allProfileJson(filter: {key: {in: $TEmentors}}) {
        nodes {
          key
          name
          profile_pic
          email
          desc
          LinkedIn
          GitHub
        }
      }
      SEmentees: allProfileJson(filter: {key: {in: $SEmentees}}) {
        nodes {
          key
          name
          profile_pic
          email
          desc
          LinkedIn
          GitHub
        }
      }
  }  
`
