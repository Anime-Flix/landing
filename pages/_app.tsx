import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AuthContextProvider } from "../context/AuthContext";
import NavbarComponent from "../components/core/Navbar";
import { useEffect } from 'react';
import { analytics } from '../config/firebase';

// Site theme
const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      analytics();
    }
  }, [])
  
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <CssBaseline enableColorScheme />

        {/* Navbar */}
        <NavbarComponent />

        {/* Main content */}
        <main className="application">
          <Component {...pageProps} />
        </main>

        {/* Footer */}
      </AuthContextProvider>
    </ThemeProvider>
  );
}
