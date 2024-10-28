import * as React from "react";

import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Divider from "@material-ui/core/Divider";

import Layout from "../components/Layout";
import MainText from "../components/MainText";
import Seo from "../components/SEO";
import QuoteCard from "../components/QuoteCard";
import TechStack from "../components/TechStack";
import StandardGrid from "../components/StandardGrid";
import Carousel from "../components/Carousel";

import * as styles from "../styles/pages/home.module.scss";
import * as itemDetailsStyles from "../styles/templates/itemDetail.module.scss";
import logoDataUri from "../images/unicode-logo.svg";
import UpcomingEventsCard from "../components/UpcomingEventsCard";

const IndexPage = ({ data }) => {
	const featureProjectImages = data.featuredProjectsJson.index
	.map((featuredTitle, featuredIndex) => {
		const project = data.allProjectsJson.nodes.find(
			(proj) => proj.title === featuredTitle
		);

		if (project) {
			return (
				<Link to={`/projects/${project.slug}`} key={featuredIndex}>
					<div className={styles.overlay}>
						<h3>{project?.title}</h3>
						<p className={styles.overlayText}>{project.stack.join(", ")}</p>
					</div>
					<GatsbyImage
						image={project.img_cover?.childImageSharp?.gatsbyImageData}
						className={itemDetailsStyles.imgContainer}
						imgClassName={itemDetailsStyles.img}
					/>
				</Link>
			);
		}
		return null;
	})
	.filter((value) => !!value);

	return (
		<Layout fullWidth>
			<Seo title="Home" />

			<MainText />

			{/* Alumni Section */}
			<Divider />
			<h2 className={styles.homeTitle + " " + styles.alt}>Upcoming Events</h2>
			<StandardGrid>
				{/* <Hackprep3
				name="Hackprep 3.0"
				// 	avatar={logoDataUri}
				quote={logoDataUri}
			/> */}
				<UpcomingEventsCard />
			</StandardGrid>
			<br />
			<br />
			<br />

			<Divider />
			<h2 className={styles.homeTitle}>Our Founders</h2>
			<StandardGrid>
				{data.allAlumniJson.nodes.map((alumni, index) => (
					<QuoteCard
						key={index}
						dynamicImage
						name={alumni.name}
						quote={alumni.text}
						avatar={alumni.pic.childImageSharp.gatsbyImageData}
					/>
				))}
			</StandardGrid>

			<br />
			<br />
			<br />

			{/* Faculty Section */}
			<Divider />
			<h2 className={styles.homeTitle + " " + styles.alt}>Our Faculty</h2>
			<StandardGrid>
				{data.allFacultyJson.nodes.map((faculty, index) => (
					<QuoteCard
						key={index}
						dynamicImage
						name={faculty.name}
						quote={faculty.text}
						avatar={faculty.pic.childImageSharp.gatsbyImageData}
					/>
				))}
			</StandardGrid>
			<br />
			<br />
			<br />

			{/* Featured Projects Carousel */}
			<Divider />
			<h2 className={styles.homeTitle}>Featured Projects</h2>
			<div className={styles.projects}>
				{typeof window !== "undefined" && window && (
					<Carousel>{featureProjectImages}</Carousel>
				)}
			</div>
			<br />
			<br />
			<br />

			{/* Tech Stacks Sections */}
			<Divider />
			<h2 className={styles.homeTitle + " " + styles.alt}>Tech Stacks</h2>
			<StandardGrid>
				{data.allAboutJson.nodes.map((about, index) => (
					<TechStack
						key={index}
						staticImage
						techStack
						title={about.title}
						img={about.image.publicURL}
					/>
				))}
			</StandardGrid>
			<br />
			<br />
			<br />
		</Layout>
	);
};

export default IndexPage;

export const query = graphql`
	query LandingPageDetail {
		allAboutJson {
			nodes {
				title
				image {
					publicURL
				}
			}
		}

		allAlumniJson {
			nodes {
				name
				text
				pic {
					childImageSharp {
						gatsbyImageData
					}
				}
			}
		}

		allFacultyJson {
			nodes {
				name
				text
				pic {
					childImageSharp {
						gatsbyImageData
					}
				}
			}
		}

		featuredProjectsJson {
			index
		}

		allProjectsJson {
			nodes {
				title
				img_cover {
					childImageSharp {
						gatsbyImageData
					}
				}
				slug
				stack
			}
		}
	}
`;
