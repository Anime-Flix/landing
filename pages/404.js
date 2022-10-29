import Head from "next/head";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function FourOhFour() {
  return (
    <div>
      <Head>
        <title>Oh no... not again! - AniFlix</title>
      </Head>
      <Container maxWidth="sm" sx={{ marginTop: "20%" }}>
        <Typography variant="h2" fontWeight={600}>
          We do not seem to know what page you need, why not go home! (404)
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
