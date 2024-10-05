import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  styled,
} from "@mui/material";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import {
  SiVisa,
  SiMastercard,
  SiPaypal,
  SiAmericanexpress,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { useState } from "react";

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: "#1a1a1a",
  color: "#ffffff",
  padding: theme.spacing(6, 0),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(4, 0),
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: "#ffffff",
  textDecoration: "none",
  "&:hover": {
    color: theme.palette.primary.main,
    textDecoration: "underline",
  },
}));

const SocialIcon = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(2),
  fontSize: "1.5rem",
  cursor: "pointer",
  transition: "color 0.3s ease",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const PaymentIcon = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(2),
  fontSize: "2rem",
  color: "#ffffff",
}));

const Footer = () => {
  const [email, setEmail] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSubscribe = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <StyledFooter >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <List>
              <ListItem disablePadding>
                <ListItemText>
                  <StyledLink href="#" onClick={scrollToTop}>
                    Our Story
                  </StyledLink>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText>
                  <StyledLink href="#" onClick={scrollToTop}>
                    Careers
                  </StyledLink>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText>
                  <StyledLink href="#" onClick={scrollToTop}>
                    Press
                  </StyledLink>
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Customer Service
            </Typography>
            <List>
              <ListItem disablePadding>
                <ListItemText>
                  <StyledLink href="#" onClick={scrollToTop}>
                    Contact Us
                  </StyledLink>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText>
                  <StyledLink href="#" onClick={scrollToTop}>
                    FAQ
                  </StyledLink>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText>
                  <StyledLink href="#" onClick={scrollToTop}>
                    Shipping & Returns
                  </StyledLink>
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Legal
            </Typography>
            <List>
              <ListItem disablePadding>
                <ListItemText>
                  <StyledLink href="#" onClick={scrollToTop}>
                    Privacy Policy
                  </StyledLink>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText>
                  <StyledLink href="#" onClick={scrollToTop}>
                    Terms of Service
                  </StyledLink>
                </ListItemText>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText>
                  <StyledLink href="#" onClick={scrollToTop}>
                    Cookie Policy
                  </StyledLink>
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Stay Connected
            </Typography>
            <Box display="flex" mb={2}>
              <a href="https://www.facebook.com/profile.php?id=100008488000660">
                <SocialIcon as={FaFacebook} aria-label="Facebook" />
              </a>
              <a href="https://www.linkedin.com/in/nsakib27/">
                <SocialIcon as={FaLinkedin} aria-label="LinkedIn" />
              </a>
              <a href="https://x.com">
                <SocialIcon as={FaTwitter} aria-label="Twitter" />
              </a>
              <a href="https://github.com/Nazmos27">
                <SocialIcon as={FaGithub} aria-label="Github" />
              </a>
            </Box>
            <Typography variant="subtitle1" gutterBottom>
              Subscribe to our newsletter
            </Typography>
            <form onSubmit={handleSubscribe}>
              <Box display="flex" flexDirection={isMobile ? "column" : "row"}>
                <TextField
                  variant="outlined"
                  size="small"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  margin="dense"
                  required
                  type="email"
                  InputProps={{
                    style: { backgroundColor: "#ffffff" },
                  }}
                  aria-label="Email subscription input"
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="medium"
                  sx={{
                    ml: isMobile ? 0 : 1,
                    mt: isMobile ? 1 : 0,
                    minWidth: isMobile ? "100%" : "auto",
                  }}
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                </Button>
              </Box>
            </form>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="subtitle1" gutterBottom>
            Accepted Payment Methods
          </Typography>
          <Box display="flex" justifyContent="center">
            <PaymentIcon as={SiVisa} aria-label="Visa" />
            <PaymentIcon as={SiMastercard} aria-label="Mastercard" />
            <PaymentIcon as={SiPaypal} aria-label="PayPal" />
            <PaymentIcon as={SiAmericanexpress} aria-label="American Express" />
          </Box>
        </Box>
        <Box mt={4} textAlign="center">
          <Typography variant="body2">
            © {new Date().getFullYear()} Mecha Freak. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
