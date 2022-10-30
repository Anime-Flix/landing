import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/router";

// Material CSS
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Container from "@mui/system/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";

// Material Icons
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import LoginIcon from "@mui/icons-material/Login";
import TextField from "@mui/material/TextField";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const {
    user,
    AuthError,
    handleSignInGitHub,
    handleSignInGoogle,
    handleSignIn,
  } = useAuth();

  // Email and Password State
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  if (user != null) router.push('/');

  const handleLoginWithEmail = (email: string, password: string) => {
    handleSignIn(email, password);
  };

  return (
    <Container sx={{ padding: 5, display: "flex", justifyContent: "center" }}>
      <Paper elevation={3} sx={{ padding: 2.5, width: 350 }}>
        <Typography
          variant="h4"
          fontWeight={600}
          sx={{ marginTop: 2.5, marginBottom: 1.5 }}
        >
          Log in!
        </Typography>

        {AuthError != null ? (
          <Alert severity="error">{AuthError}</Alert>
        ) : (
          <div></div>
        )}

        {/* Email & Password */}
        <div style={{ marginTop: 20, marginBottom: 20 }}>
          {AuthError != null ? (
            <TextField
              id="email-input"
              label="Email"
              type={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ width: "100%" }}
              required
              error
            />
          ) : (
            <TextField
              id="email-input"
              label="Email"
              type={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ width: "100%" }}
              required
            />
          )}
        </div>

        <div style={{ marginTop: 20, marginBottom: 20 }}>
          {AuthError != null ? (
            <TextField
              id="password-input"
              label="Password"
              type={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ width: "100%" }}
              required
              error
            />
          ) : (
            <TextField
              id="password-input"
              label="Password"
              type={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ width: "100%" }}
              required
            />
          )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
          <Button
            style={{marginBottom: 15}}
            variant="contained"
            color="primary"
            onClick={() => handleLoginWithEmail(email, password)}
            startIcon={<LoginIcon />}
          >
            Sign in
          </Button>

          <Link href={'/auth/forgot'}>Forgot Password?</Link>
          <Link href={'/auth/register'}>Need an account?</Link>
        </div>

        {/* Divider */}
        <Divider sx={{ marginBottom: 5 }} />

        {/* Social Providers */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 15,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Sign in with Google */}
          <Tooltip title="Sign in with Google">
            <Button
              variant="contained"
              color="primary"
              onClick={handleSignInGoogle}
            >
              <GoogleIcon />
            </Button>
          </Tooltip>

          {/* Sign in with Github */}
          <Tooltip title="Sign in with Github">
            <Button
              variant="contained"
              color="secondary"
              onClick={handleSignInGitHub}
            >
              <GitHubIcon />
            </Button>
          </Tooltip>
        </div>
      </Paper>
    </Container>
  );
}
