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
import celestiaPoster from "../images/events/CelestiaPoster.jpg";

// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function UpcomingEventsCard() {
	const theme = useTheme();

	const content =
		"Celestia is an annual themed event hosted by DJ Unicode as a means for networking and socializing with other tech enthusiasts. It is a platform for juniors to interact with seniors in a fun environment, with different tech and non-tech games, and a chance to win exciting prizes. Celestia is a great opportunity to meet new people and make friends, and to learn about the tech community at DJSCE.";

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
									image={celestiaPoster}
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
									sx={{ 
									  paddingBottom: 2, 
									  display: "block", 
									  textAlign: "center", 
									  fontWeight: "bold",
									  background: "linear-gradient(to right, orange,red)",
									  WebkitBackgroundClip: "text",
									  color: "transparent"
									}}
								  >
									Celestia 2.0
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
											href="https://forms.gle/nKyYBcViGXDiuS7F8"
											style={{ color: "#09c1d7", textDecoration: "none" }}
										>
										<Button 
										variant="contained" 
										sx={{ 
										  backgroundColor: "#FF5733 ", 
										  color: "#fff", 
										  '&:hover': {
											backgroundColor: "#07a1b8"
										  } 
										}}
									  >
										Register
									  </Button>
									  
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
