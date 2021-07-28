import React, { useState } from "react";
import { Link } from "gatsby";

// Material UI components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// Material UI Icons
import MenuIcon from "@material-ui/icons/Menu";

// Material UI Hooks
import useMediaQuery from "@material-ui/core/useMediaQuery";

// Static Assets
import logoDataUri from "../images/unicode-logo.svg";

// Custom Sass
import * as styles from "../styles/components/navbar.module.scss";

// Constants
import { navbarNavigations } from "../constants";

function NavBar() {
	const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
	const navbarBreakpoint = useMediaQuery("(min-width:657px)");

	const [openDrawer, setOpenDrawer] = useState(false);

	const toggleDrawer = () => {
		setOpenDrawer(!openDrawer);
	};

	return (
		<AppBar color="inherit" position="sticky" className={styles?.navbar}>
			<Toolbar className={styles?.navbarContainer}>
				<img className={styles?.navbarLogo} src={logoDataUri} alt="Unicode" />
				<div className={styles?.navbarNavigations}>
					{navbarBreakpoint ? (
						<React.Fragment>
							{navbarNavigations.map((page, index) => (
								<Link
									to={page.url}
									key={index}
									className={styles?.navbarButtons}
								>
									<Button size="large" color="inherit">
										{page.name}
									</Button>
								</Link>
							))}
						</React.Fragment>
					) : (
						<IconButton onClick={toggleDrawer}>
							<MenuIcon />
						</IconButton>
					)}
				</div>
			</Toolbar>

			<SwipeableDrawer
				anchor="top"
				open={!navbarBreakpoint && openDrawer}
				onClose={toggleDrawer}
				onOpen={toggleDrawer}
				disableBackdropTransition={!iOS}
				disableDiscovery={iOS}
			>
				<List className={styles?.navbarNavigations}>
					{navbarNavigations.map((page, index) => (
						<Link to={page.url} key={index}>
							<ListItem button className={styles?.navbarListItem}>
								{page.name}
							</ListItem>
						</Link>
					))}
				</List>
			</SwipeableDrawer>
		</AppBar>
	);
}

export default NavBar;
