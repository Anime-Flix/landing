import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/router";

import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Container from "@mui/system/Container";

export default function LoginPage() {
  const router = useRouter();
  const {
    user,
    AuthError,
    handleSignInGitHub,
    handleSignInGoogle,
  } = useAuth();

  if (user != null) router.push('/');

  return (
    <Container>
        <div>
          {AuthError != null ? (
            <Alert severity="error">{AuthError}</Alert>
          ) : (
            <div></div>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={handleSignInGoogle}
          >
            Sign in with Google
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleSignInGitHub}
          >
            Sign in with Github
          </Button>
        </div>
    </Container>
  );
}
