import "../public/css/global.css";
import { useState, Suspense } from "react";
import dynamic from "next/dynamic";

import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const Navbar = dynamic(() => import("../components/navbar"), {
  suspense: true,
});

const theme = createTheme({ palette: { mode: "dark" } });

function MyApp({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <Suspense fallback={"Loading..."}>
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionContextProvider>
    </Suspense>
  );
}

export default MyApp;
