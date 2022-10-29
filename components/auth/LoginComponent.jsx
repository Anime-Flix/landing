import React from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

// Components
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

import Container from "@mui/system/Container";
import Alert from "@mui/material/Alert";
import HCaptcha from "@hcaptcha/react-hcaptcha";

function LoginComponent() {
  const captcha = React.useRef()
  const supabase = useSupabaseClient();
  const [loginError, setLoginError] = React.useState("");

  const [userEmail, setUserEmail] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [captchaToken, setCaptchaToken] = React.useState(null);

  // Discord 0Auth
  const handleDiscordAuth = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "discord",
    });

    if (error) return setLoginError(error.message);

    return;
  };

  // Sign in with email and password
  const handleEmailAuth = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: 'example@email.com',
      password: 'example-password',
      options: { captchaToken },
    })
    captcha.current.resetCaptcha()
    
    if (error) return setLoginError(error.message);

    return;
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: "20%" }}>
      <Paper elevation={3}>
        <div style={{ padding: 20 }}>
          <Typography variant="h4" fontWeight={600}>
            Sign In
          </Typography>
          {loginError != "" ? (
            <div style={{ marginTop: 5, marginBottom: 5 }}>
              <Alert variant="filled" severity="error">
                Demo Alert
              </Alert>
            </div>
          ) : (
            <div></div>
          )}

          <div style={{ marginTop: 20 }}>
            <TextField
              sx={{ width: "100%" }}
              required
              label="Email"
              type={"email"}
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <TextField
              sx={{ width: "100%", marginTop: 4 }}
              required
              label="Password"
              type={"password"}
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>
          <div style={{ marginTop: 8, marginBottom: 8 }}>
            <HCaptcha
              size="normal"
              ref={captcha}
              sitekey="7128bc3d-72cd-4daa-86bb-523ab1a4e821"
              onVerify={(token) => {
                setCaptchaToken(token);
              }}
            />
          </div>
          {captchaToken == null ? (
            <div></div>
          ) : (
            <Button sx={{ marginTop: 0.5, width: "100%" }} onClick={handleEmailAuth} variant="contained">
              Sign in!
            </Button>
          )}
        </div>
        <Divider />
        <div style={{ padding: 20 }}>
          <div style={{ marginTop: 10 }}>
            <Button
              sx={{ marginTop: 2.5, width: "100%" }}
              color="secondary"
              variant="contained"
              onClick={handleDiscordAuth}
            >
              Sign in with Discord
            </Button>
          </div>
        </div>
      </Paper>
    </Container>
  );
}

export default LoginComponent;
