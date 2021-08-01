import React from "react";
import GridItem from "../../components/GridItem";
import Layout from "../../components/Layout";
import Seo from "../../components/SEO";
import data from "../../data/projects/projects.json";

export default function Project() {
	return (
		<Layout>
			<Seo title="Projects" />
			<GridItem data={data} />
		</Layout>
	);
}
