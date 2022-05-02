import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Grid } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HackprepPoster from "../images/hackprep-poster.png";
import * as styles from "../styles/components/quotecard.module.scss";
import { Button } from "@mui/material";
import { Link } from "@material-ui/core";

// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function UpcomingEventsCard() {
	const theme = useTheme();

	const content =
		"HackPrep is an annual series of events hosted by DJ Unicode in hopes to introduce the world of development to first-year coders. The aim of the event is to create a one-stop place to head-start their hackathon journeys, and cover important topics related to frontend, backend, and app development. Through HackPrep, we will be ensuring freshers get a clear idea of how to go about exploring the vast world of development, navigate through a plethora of resources, and eventually start building their own projects. ";

	return (
		<Grid item xs={10} sm={10} lg={6} sx={{ padding: "0 2rem" }}>
			<Card
				sx={{
					display: "flex",
					boxShadow: "-1px 3px 8px 4px rgba(61, 61, 63, 0.05)",
				}}
				data-aos="fade-up"
				data-aos-duration="1000"
			>
				<Grid>
					<Card sx={{ display: "flex", maxWidth: "100%" }}>
						<Grid container>
							<Grid item xs={12} md={6} lg={6}>
								<CardMedia
									component="img"
									sx={{ width: "100%" }}
									image={HackprepPoster}
									alt="Live from space album cover"
								/>
							</Grid>
							<Grid item xs={12} md={6} lg={6}>
								<Box
									sx={{
										height: "100%",
										display: "flex",
										flexDirection: "column",
									}}
								>
									<CardContent sx={{ flex: "1 0 auto" }}>
										<Typography
											component="div"
											variant="h4"
											paddingBottom={2}
											display="block"
											textAlign="center"
										>
											HackPrep 3.0
										</Typography>
										<div className={styles.upcomingEventsContent}>
											<Typography
												variant="subtitle1"
												color="text.secondary"
												component="div"
												className={styles.upcomingEventsDescription}
											>
												{content.slice(0, 478)}...
												{/* {content} */}
											</Typography>
										</div>
									</CardContent>
									<Box textAlign="center" marginTop={3} marginBottom={3}>
										<a
											href="https://forms.gle/e1jaCAUbTerh2Eyp9"
											style={{ color: "#09c1d7", textDecoration: "none" }}
										>
											<Button variant="filled">Register</Button>
										</a>
										{/* <a href="/" style={{ color: "#09c1d7", textDecoration: "none" }}>
                <Button variant="filled" >Details</Button>
                </a> */}
									</Box>
								</Box>
							</Grid>
						</Grid>
					</Card>
				</Grid>
			</Card>
		</Grid>
	);
}
