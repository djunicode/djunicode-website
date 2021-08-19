import { createTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

export const theme = createTheme({
	palette: {
		primary: {
			main: "#09c1d7",
		},
		secondary: {
			main: "#77ce90",
		},
		error: {
			main: red.A200,
		},
		text: {
			primary: "#3d3d3f",
		},
	},
	typography: {
		fontFamily: ["Manrope", "sans-serif"].join(","),
	},
	overrides: {
		MuiOutlinedInput: {
			root: {
				borderRadius: "10px",
			},
		},
	},
});
