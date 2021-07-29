import * as React from "react";

import Layout from "../components/Layout";
import MainText from "../components/MainText";
import SEO from "../components/SEO";

const IndexPage = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<MainText />
		</Layout>
	);
};

export default IndexPage;
