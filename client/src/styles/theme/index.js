import { createTheme } from "@mui/material/styles";

const font = " 'Poppins', sans-serif";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2a2a2a",
    },
    secondary: {
      main: "#585858",
    },
  },
  typography: {
    fontFamily: font,
    subtitle2: {
      color: "#2a7fec",
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 8,
  },
});
