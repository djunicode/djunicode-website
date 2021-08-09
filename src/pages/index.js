import * as React from "react";

import { graphql } from "gatsby";

import Layout from "../components/Layout";
import MainText from "../components/MainText";
import Seo from "../components/SEO";
import QuoteCard from "../components/QuoteCard";
import StandardGrid from "../components/StandardGrid";
import Carousel from "../components/Carousel";
import { GatsbyImage } from "gatsby-plugin-image";

const IndexPage = ({ data }) => {
	const featureProjectImages = data.allProjectsJson.nodes
		.map((project, index) => {
			if (data.featuredProjectsJson.index?.includes(project.title)) {
				return (
					<GatsbyImage
						key={index}
						image={project.img_cover?.childImageSharp?.gatsbyImageData}
					/>
				);
			}
		})
		.filter((value) => !!value);

	return (
		<Layout>
			<Seo title="Home" />

			<MainText />

			{/* Alumni Section */}
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

			{/* Featured Projects Carousel */}
			<Carousel>{featureProjectImages}</Carousel>
			<br />
		</Layout>
	);
};

export default IndexPage;

export const query = graphql`
	query LandingPageDetail {
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
			}
		}
	}
`;
