import React, { useEffect } from "react";

// Material UI
import { ThemeProvider } from "@material-ui/core/styles";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import NavBar from "./NavBar";
import Footer from "./Footer";

// Global Styles
import "../styles/global.scss";
import { theme } from "../theme";

function Layout({ children }) {
	useEffect(() => {
		AOS.init({
			once: true,
		});
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<NavBar />
			<div className="fixedcontainer">{children}</div>
			<Footer />
		</ThemeProvider>
	);
}

export default Layout;
