import { createTheme } from "@mui/material";
import { cyan} from "@mui/material/colors";


export const theme = createTheme({
  palette: {
    primary: {
        main: "#1976d2",
        dark: "#01579b",
        light:"#03a9f4",
        contrastText: "#ffff",
    },
    secondary: {
        main: cyan[500],
        dark: cyan[400],
        light: cyan[300],
        contrastText: "#ffff",
    },
    otherColor: {
      main: "#999",
    },
  },
});
