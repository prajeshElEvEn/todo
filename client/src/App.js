import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { router } from "./app";
import { theme } from "./styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
