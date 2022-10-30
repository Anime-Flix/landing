import React from "react";
import IconButton from "@mui/material/IconButton";
import Alert from "@mui/material/Alert";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

import { auth } from "../../config/firebase";
import { useAuth } from "../../context/AuthContext";

export default function LinkAccountComponent() {
  const { user, AuthError, handleLinkProviders } = useAuth();

  return (
    <div style={{ marginTop: 15, marginBottom: 15 }}>
      {AuthError != null ? (
        <Alert severity="error">{AuthError}</Alert>
      ) : (
        <div></div>
      )}
      {user?.provider[0].providerId === "google.com" ? (
        <IconButton
          color="primary"
          aria-label="add to shopping cart"
          onClick={() => handleLinkProviders("github")}
        >
          <GitHubIcon />
        </IconButton>
      ) : (
        <IconButton
          color="primary"
          aria-label="add to shopping cart"
          onClick={() => handleLinkProviders("google")}
        >
          <GoogleIcon />
        </IconButton>
      )}
    </div>
  );
}
