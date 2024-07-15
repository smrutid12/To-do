import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#9B82F5",
    },
    secondary: {
      main: "#FAE7A3",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
