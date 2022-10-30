import React from "react";
import { useAuth } from "../../context/AuthContext";
import Button from "@mui/material/Button";
import Image from "next/image";
import Container from "@mui/material/Container";
import { Alert } from "@mui/material";
import LinkAccountComponent from '../../components/auth/LinkAccount'

export default function LoginPage() {
  const { user, AuthError, handleSignInGitHub, handleSignInGoogle, handleLogout } = useAuth();

  // Set the login data
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });

  // Handle Login Logic
  const handleLogin = async (e: Event) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <Container maxWidth="lg">
      {
        user === null ? (
          <div>
            { AuthError != null ? <Alert severity="error">{AuthError}</Alert> : <div></div> }
            <Button variant="contained" color="primary" onClick={handleSignInGoogle}>Sign in with Google</Button>
            <Button variant="contained" color="secondary" onClick={handleSignInGitHub}>Sign in with Github</Button>
          </div>
        ) : (
          <div>
            <Image
              width={100}
              height={100}
              src={user.profilePicture}
              alt={user.displayName}
            />
            <p>
              <strong>Name:</strong> &nbsp; {user.displayName} <br/>
              <strong>UID:</strong> &nbsp; {user.uid} <br/>
              <strong>Email:</strong> &nbsp; {user.email} <br/>
              <strong>Providers:</strong> &nbsp; {user.provider.map(function(pro: any, index: number) {return <span key={index}>{pro.providerId}, </span>})} <br/>
            </p>
            <LinkAccountComponent />
            <Button variant="contained" color="error" onClick={handleLogout}>Logout</Button>
          </div>
        )
      }
    </Container>
  );
}
