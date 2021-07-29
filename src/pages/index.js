import * as React from "react";

import Layout from "../components/Layout";
import MainText from "../components/MainText";
import SEO from "../components/SEO";
import ProjectDetails from "../templates/ProjectDetails";

const IndexPage = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<MainText />
			<ProjectDetails />
		</Layout>
	);
};

export default IndexPage;
