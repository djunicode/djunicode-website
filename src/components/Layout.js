import React from "react";

// Material UI
import { ThemeProvider } from "@material-ui/core/styles";

// Components
import NavBar from "./NavBar";

// Global Styles
import "../styles/global.scss";
import { theme } from "../theme";
import Footer from "./Footer";

function Layout({ children }) {
	return (
		<ThemeProvider theme={theme}>
			<NavBar />
			<div className="fixedcontainer">{children}</div>
			<Footer />
		</ThemeProvider>
	);
}

export default Layout;
