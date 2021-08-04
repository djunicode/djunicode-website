import React from "react";

import { graphql } from "gatsby";

import GridItem from "../../components/GridItem";
import Layout from "../../components/Layout";
import Seo from "../../components/SEO";

export default function Project({ data }) {
	return (
		<Layout>
			<Seo title="Events" />
			<GridItem data={data.allEventsJson.nodes} />
		</Layout>
	);
}

export const query = graphql`
	query EventDetails {
		allEventsJson {
			nodes {
				description
				slug
				title
				images {
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
