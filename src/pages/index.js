import * as React from "react";

import Layout from "../components/Layout";
import MainText from "../components/MainText";
import Seo from "../components/SEO";
import ProjectDetails from "../templates/ProjectDetails";

const IndexPage = () => {
	return (
		<Layout>
			<Seo title="Home" />
			<MainText />
			<ProjectDetails />
		</Layout>
	);
};

export default IndexPage;
