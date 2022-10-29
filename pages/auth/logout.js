import Head from "next/head";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useSupabaseClient } from "@supabase/auth-helpers-react";


export default function LogoutPage() {
    const supabase = useSupabaseClient();

    supabase.auth.signOut()
  return (
    <div>
      <Head>
        <title>You have been signed out! - AniFlix</title>
      </Head>
      <Container maxWidth="sm" sx={{ marginTop: "20%" }}>
        <Typography variant="h2" fontWeight={600}>
          You have been signed out!
        </Typography>

        <Button
          sx={{ marginTop: 15 }}
          href="/"
          variant="contained"
          color="success"
        >
          Go to Home
        </Button>
      </Container>
    </div>
  );
}
