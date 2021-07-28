import React from "react";

// Components
import NavBar from "./NavBar";

// Global Styles
import "../styles/global.scss";

function Layout({ children }) {
	return (
		<React.Fragment>
			<NavBar />
			{children}
		</React.Fragment>
	);
}

export default Layout;
