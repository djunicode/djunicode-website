import React from "react";

import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

function Toasts({ open, toggler, severity, message }) {
	return (
		<Snackbar open={open} autoHideDuration={3000} onClose={toggler}>
			<Alert onClose={toggler} severity={severity || "success"}>
				{message}
			</Alert>
		</Snackbar>
	);
}

export default Toasts;
