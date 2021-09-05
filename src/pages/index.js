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

const IndexPage = ({ data }) => {
	const featureProjectImages = data.allProjectsJson.nodes
		.map((project, index) => {
			if (data.featuredProjectsJson.index?.includes(project.title)) {
				return (
					<Link to={`/projects/${project.slug}`}>
						<GatsbyImage
							key={index}
							image={project.img_cover?.childImageSharp?.gatsbyImageData}
							imgClassName={itemDetailsStyles.img}
						/>
					</Link>
				);
			} else return null;
		})
		.filter((value) => !!value);

	return (
		<Layout fullWidth>
			<Seo title="Home" />

			<MainText />

			{/* Alumni Section */}
			<Divider />
			<h2 className={styles.homeTitle}>Word from our Founders</h2>
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
			<h2 className={styles.homeTitle + " " + styles.alt}>Word from Faculty</h2>
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
			{typeof window !== "undefined" && window && (
				<Carousel>{featureProjectImages}</Carousel>
			)}
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
			}
		}
	}
`;
