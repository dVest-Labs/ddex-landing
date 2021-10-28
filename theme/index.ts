import { createTheme } from "@material-ui/core/styles";
import cyan from "@material-ui/core/colors/cyan";
import blue from "@material-ui/core/colors/blue";

const theme = createTheme({
  palette: {
    primary: {
      main: cyan[500],
    },
    secondary: {
      main: blue[500],
    },
  },
  typography: {
    fontFamily: "Comfortaa",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },
});

export default theme;
