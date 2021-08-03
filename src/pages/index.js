import * as React from "react";

import { graphql } from "gatsby";

import Layout from "../components/Layout";
import MainText from "../components/MainText";
import Seo from "../components/SEO";
import QuoteCard from "../components/QuoteCard";
import StandardGrid from "../components/StandardGrid";
import Carousel from "../components/Carousel";

const IndexPage = ({ data }) => {
	return (
		<Layout>
			<Seo title="Home" />
			<MainText />

			{/* Alumni Section */}
			<StandardGrid>
				{data.allAlumniJson.nodes.map((alumni, index) => (
					<QuoteCard key={index} name={alumni.name} quote={alumni.text} />
				))}
			</StandardGrid>
			<br />
			<br />

			{/* Featured Projects Carousel */}
			{/* <Carousel>
				{data.allProjectsJson.nodes.map((project, index) => {
					if (data.featuredProjectsJson.index?.includes(project.title)) {
						return (
							<div key={index}>
								<img key={index} src={project.images[0]} />
							</div>
						);
					} else {
						return null;
					}
				})}
			</Carousel> */}
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
				pic
				text
			}
		}

		featuredProjectsJson {
			index
		}

		allProjectsJson {
			nodes {
				img
				title
			}
		}
	}
`;
