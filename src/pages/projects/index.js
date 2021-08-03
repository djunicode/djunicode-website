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
				img
				title
				stack
				links
				description
				contributors {
					SEmentees {
						GitHub
						LinkedIn
						desc
						name
						profile_img
					}
					TEmentors {
						GitHub
						LinkedIn
						desc
						name
						profile_img
					}
				}
			}
		}
	}
`;
