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
    const TEmentors = data.TEmentors.nodes
    const Externals = data.Externals.nodes
    const SEmentees = data.SEmentees.nodes
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
					{
						links.length? 
						<>
							<Grid item xs={12}><h3>Related Links</h3></Grid>
							<Grid item container xs={8} sm={5}>
								<ul>
									{links.map((item, idx) => <li key={idx}><a href={item} target="_blank">{item}</a></li>)}
								</ul>
							</Grid>
						</>
						: null
					}
                    {/* Avatars */}
                    {Externals.length?<AvatarHelper header="Guests" data={Externals} />:null}
                    {TEmentors.length?<AvatarHelper header="TE Mentors" data={TEmentors} />:null}
                    {SEmentees.length?<AvatarHelper header="SE Mentees" data={SEmentees} />:null}
                </Grid>
            </Grid>
        </Grid>
        </Layout>
    )
}

export default EventDetails
export const query = graphql`
query EventDetail($slug: String, $Externals: [Int], $TEmentors: [Int], $SEmentees: [Int]) {
    eventsJson(slug: {eq: $slug}) {
      title
      links
      description
      images {
        childImageSharp {
            gatsbyImageData
        }
      }
      contributors {
        Externals
        SEmentees
        TEmentors
      }
    }
  	Externals: allProfileJson(filter: {key: {in: $Externals}}) {
        nodes {
          key
          name
          profile_pic {
            childImageSharp {
              gatsbyImageData
            }
          }
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
          profile_pic {
            childImageSharp {
              gatsbyImageData
            }
          }
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
          profile_pic {
            childImageSharp {
              gatsbyImageData
            }
          }
          email
          desc
          LinkedIn
          GitHub
        }
      }
  }  
`
