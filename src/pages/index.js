import * as React from "react";

import Layout from "../components/Layout";
import MainText from "../components/MainText";
import Seo from "../components/SEO";

const IndexPage = () => {
	return (
		<Layout>
			<Seo title="Home" />
			<MainText />
		</Layout>
	);
};

export default IndexPage;
