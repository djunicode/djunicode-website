import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Carousel from "../components/Carousel";
import Layout from "../components/Layout";
import AvatarHelper from "../components/AvatarHelper";

import * as styles from "../styles/templates/itemDetail.module.scss";

function EventDetails({ data }) {
	const { title, description, links, images } = data.eventsJson;
	const TEmentors = data.TEmentors.nodes;
	const Externals = data.Externals.nodes;
	const SEmentees = data.SEmentees.nodes;
	// Avatars img fix
	return (
		<Layout>
			<Grid container className={styles.rootContainer} component={Paper}>
				<Grid item xs={12} className={styles.header}>
					<h2>{title}</h2>
				</Grid>
				{/* Carousel */}
				<Grid item container className={styles.content}>
					<Grid item xs={12}>
						{typeof window !== "undefined" && window && (
							<Carousel height="25rem" objectFit="contain">
							{images.map((item, idx) => (
							  <GatsbyImage
								key={idx}
								image={item?.childImageSharp?.gatsbyImageData}
								alt="Event Image"
							  />
							))}
						  </Carousel>
						)}
					</Grid>
					<Grid item container xs={12}>
						<Grid item xs={12}>
							<h3>About the event</h3>
							<p>{description}</p>
						</Grid>
						{/* Links */}
						{links.length ? (
							<>
								<Grid item xs={12}>
									<h3>Related Links</h3>
								</Grid>
								<Grid item container xs={12}>
									<ul className={styles.ul}>
										{links.map((item, idx) => (
											<li key={idx} className={styles.li}>
												<a
													href={item}
													target="_blank"
													rel="noreferrer"
													className={styles.textOverflow}
												>
													{item}
												</a>
											</li>
										))}
									</ul>
								</Grid>
							</>
						) : null}
						{/* Avatars */}
						{Externals.length ? (
							<AvatarHelper header="Guests" data={Externals} />
						) : null}
						{TEmentors.length ? (
							<AvatarHelper header="TE Mentors" data={TEmentors} />
						) : null}
						{SEmentees.length ? (
							<AvatarHelper header="SE Mentees" data={SEmentees} />
						) : null}
					</Grid>
				</Grid>
			</Grid>
		</Layout>
	);
}

export default EventDetails;
export const query = graphql`
	query EventDetail(
		$slug: String
		$Externals: [Int]
		$TEmentors: [Int]
		$SEmentees: [Int]
	) {
		eventsJson(slug: { eq: $slug }) {
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
		Externals: allProfileJson(filter: { key: { in: $Externals } }) {
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
		TEmentors: allProfileJson(filter: { key: { in: $TEmentors } }) {
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
		SEmentees: allProfileJson(filter: { key: { in: $SEmentees } }) {
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
`;
