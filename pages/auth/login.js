import React from "react";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

import { useRouter } from "next/router";
import LoginComponent from "../../components/auth/LoginComponent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function LoginPage() {
  const router = useRouter();
  const { error } = router.query;
  const session = useSession()
  const supabase = useSupabaseClient()

  // Check if the user is already signed in
  if (session)
    return (
      <Container maxWidth="sm" sx={{ marginTop: "20%" }}>
        <Typography variant="h2" fontWeight={600}>
          You are already signed in!
        </Typography>
        <Button
          sx={{ marginTop: "20%" }}
          href="/"
          variant="contained"
          color="success"
        >
          Go to Home
        </Button>
      </Container>
    );

  return (
    <Container maxWidth="lg">
      {/* Checks if a user is trying to access a page that is restricted */}
      {error != undefined ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <div></div>
      )}
      <LoginComponent />
    </Container>
  );
}
