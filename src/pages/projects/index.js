import React from "react";

import { graphql } from "gatsby";

import GridItem from "../../components/GridItem";
import Layout from "../../components/Layout";
import Seo from "../../components/SEO";

export default function Project({ data }) {
	return (
		<Layout>
			<Seo title="Projects" />
			<GridItem data={data.allProjectsJson.nodes} />
		</Layout>
	);
}

export const query = graphql`
	query ProjectDetails {
		allProjectsJson {
			nodes {
				desc
				slug
				title
				year
				img_cover {
					childImageSharp {
						fluid {
							src
						}
					}
				}
			}
		}
	}
`;
