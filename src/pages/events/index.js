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

// export const query = graphql`
// 	query EventDetails {
// 		allEventsJson {
// 			nodes {
// 				description
// 				images
// 				links
// 				title
// 				contributors {
// 					Externals {
// 						name
// 						profile_img
// 					}
// 					SEmentees {
// 						name
// 						profile_img
// 					}
// 					TEmentors {
// 						name
// 						profile_img
// 					}
// 				}
// 			}
// 		}
// 	}
// `;
