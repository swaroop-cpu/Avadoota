import React from "react";
import { Container, Grid, Typography, Link, Box, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#f8f9fa", color: "#666", py: 4, mt: 4 }}>
      <Container maxWidth="lg">
        {/* Logo and Social Icons */}
        <Box textAlign="center" mb={3}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", fontFamily: "'Pacifico', cursive", color: "#ccc" }}
          >
            Expence Tracker
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Link href="#" sx={{ mx: 1, color: "#3b5998" }}>
              <FacebookIcon fontSize="large" />
            </Link>
            <Link href="#" sx={{ mx: 1, color: "#1DA1F2" }}>
              <TwitterIcon fontSize="large" />
            </Link>
            <Link href="#" sx={{ mx: 1, color: "#0077b5" }}>
              <LinkedInIcon fontSize="large" />
            </Link>
            <Link href="#" sx={{ mx: 1, color: "#db4437" }}>
              <GoogleIcon fontSize="large" />
            </Link>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Footer Links */}
        {/* <Grid container spacing={3} justifyContent="center">
          
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6" color="primary" gutterBottom>
            Expence Tracker
            </Typography>
            <Link href="#" color="inherit" display="block">
              What
            </Link>
            <Link href="#" color="inherit" display="block">
              Who we are
            </Link>
            <Link href="#" color="inherit" display="block">
              Career
            </Link>
            <Link href="#" color="inherit" display="block">
              Featured Projects
            </Link>
          </Grid>

          
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6" color="primary" gutterBottom>
              Other
            </Typography>
            <Link href="#" color="inherit" display="block">
              FAQs
            </Link>
            <Link href="#" color="inherit" display="block">
              How it works
            </Link>
            <Link href="#" color="inherit" display="block">
              Trust & Safety
            </Link>
            <Link href="#" color="inherit" display="block">
              Support
            </Link>
          </Grid>

    
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6" color="primary" gutterBottom>
              Categories
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Link href="#" color="inherit" display="block">
                  Art
                </Link>
                <Link href="#" color="inherit" display="block">
                  Comics
                </Link>
                <Link href="#" color="inherit" display="block">
                  Crafts
                </Link>
                <Link href="#" color="inherit" display="block">
                  Dance
                </Link>
                <Link href="#" color="inherit" display="block">
                  Design
                </Link>
              </Grid>
              <Grid item xs={6}>
                <Link href="#" color="inherit" display="block">
                  Fashion
                </Link>
                <Link href="#" color="inherit" display="block">
                  Film & Video
                </Link>
                <Link href="#" color="inherit" display="block">
                  Food
                </Link>
                <Link href="#" color="inherit" display="block">
                  Games
                </Link>
                <Link href="#" color="inherit" display="block">
                  Journalism
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid> */}

        {/* Bottom Section */}
        <Divider sx={{ my: 3 }} />
        <Box textAlign="center">
          <Typography variant="body2" color="textSecondary">
            Terms & Conditions | Privacy Policy | Cookie Policy
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
            © 2018 Expence Tracker. All rights reserved | Crafted by Insta Solutions
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
