import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function Copyright() {
  const HomePageAddress = "https://shoot649854.github.io/portfolio/";

  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href={HomePageAddress}>
        Shoto Morisaki
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer() {
  return (
    <Box marginTop="20px" component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
          Visit me on any platform
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

export default Footer;
