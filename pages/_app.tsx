import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AuthContextProvider } from "../context/AuthContext";

// Site theme
const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <CssBaseline enableColorScheme />
        <Component {...pageProps} />
      </AuthContextProvider>
    </ThemeProvider>
  );
}
