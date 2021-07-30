import React from "react";
import GridItem from "../../components/GridItem";
import Layout from "../../components/Layout";
import Seo from "../../components/SEO";

const data = [
	{
		key: "1",
		title: "Project 1",
		description:
			"Voluptate nisi ut pariatur proident qui quis ipsum cillum exercitation consequat occaecat officia deserunt minim.",
	},
	{
		key: "2",
		title: "Project 2",
		description:
			"Voluptate nisi ut pariatur proident qui quis ipsum cillum exercitation consequat occaecat officia deserunt minim.",
	},
	{
		key: "3",
		title: "Project 3",
		description:
			"Voluptate nisi ut pariatur proident qui quis ipsum cillum exercitation consequat occaecat officia deserunt minim.",
	},
	{
		key: "4",
		title: "Project 4",
		description:
			"Voluptate nisi ut pariatur proident qui quis ipsum cillum exercitation consequat occaecat officia deserunt minim.",
	},
	{
		key: "5",
		title: "Project 5",
		description:
			"Voluptate nisi ut pariatur proident qui quis ipsum cillum exercitation consequat occaecat officia deserunt minim.",
	},
	{
		key: "6",
		title: "Project 6",
		description:
			"Voluptate nisi ut pariatur proident qui quis ipsum cillum exercitation consequat occaecat officia deserunt minim.",
	},
];

export default function Project() {
	return (
		<Layout>
			<Seo title="Projects" />
			<GridItem data={data} />
		</Layout>
	);
}
