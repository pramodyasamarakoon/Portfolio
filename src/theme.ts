import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#8a4af3", // Purple
    },
    secondary: {
      main: "#494949", // Grey
    },
    background: {
      default: "#f8f9fa", // Light background color
    },
    text: {
      primary: "#1C1C1C", // Black text color
      secondary: "#e0e0e0", // Light Grey
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2rem",
    },
    body1: {
      fontSize: "1rem",
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          marginX: "auto", 
          paddingLeft: "16px", 
          paddingRight: "16px",
        },
      },
    },
  },
});
