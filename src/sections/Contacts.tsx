import React from "react";
import { Box, Typography, Link, Divider, Grid } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";

export const Contacts: React.FC = () => {
  return (
    <Box
      id="contacts"
      sx={{
        p: 3,
        px: 8,
        color: "black",
      }}
    >
      {/* Contact Links */}
      <Grid
        container
        spacing={1}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Grid size={{ xs: 11, md: 4 }}>
          {/* Email */}
          <Link
            href="mailto:pramodyamsamarakoon@gmail.com"
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "black",
            }}
          >
            <EmailIcon
              sx={{ color: "black", fontsize: { xs: "8px", md: "12px" } }}
            />
            <Typography
              variant="body1"
              sx={{ color: "black", fontsize: { xs: "8px", md: "12px" } }}
            >
              pramodyamsamarakoon@gmail.com
            </Typography>
          </Link>
        </Grid>

        <Grid size={{ xs: 6, md: 2 }}>
          {/* Phone */}
          <Link
            href="tel:+94701191998"
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "black",
            }}
          >
            <PhoneIcon
              sx={{ color: "black", fontsize: { xs: "8px", md: "12px" } }}
            />
            <Typography
              variant="body1"
              sx={{ color: "black", fontsize: { xs: "8px", md: "12px" } }}
            >
              +94 70 119 1998
            </Typography>
          </Link>
        </Grid>

        <Grid size={{ xs: 6, md: 2 }}>
          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/pramodyasamarakoon/"
            target="_blank"
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "black",
            }}
          >
            <LinkedInIcon
              sx={{ color: "black", fontsize: { xs: "8px", md: "12px" } }}
            />
            <Typography
              variant="body1"
              sx={{ color: "black", fontsize: { xs: "8px", md: "12px" } }}
            >
              LinkedIn
            </Typography>
          </Link>
        </Grid>

        <Grid size={{ xs: 6, md: 2 }}>
          {/* GitHub */}
          <Link
            href="https://github.com/pramodyasamarakoon"
            target="_blank"
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "black",
            }}
          >
            <GitHubIcon
              sx={{ color: "black", fontsize: { xs: "8px", md: "12px" } }}
            />
            <Typography
              variant="body1"
              sx={{ color: "black", fontsize: { xs: "8px", md: "12px" } }}
            >
              GitHub
            </Typography>
          </Link>
        </Grid>

        <Grid size={{ xs: 6, md: 2 }}>
          {/* Facebook */}
          <Link
            href="https://web.facebook.com/pramodya.samarakoon.99"
            target="_blank"
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "black",
            }}
          >
            <FacebookIcon
              sx={{ color: "black", fontsize: { xs: "8px", md: "12px" } }}
            />
            <Typography
              variant="body1"
              sx={{ color: "black", fontsize: { xs: "8px", md: "12px" } }}
            >
              Facebook
            </Typography>
          </Link>
        </Grid>
      </Grid>

      {/* Divider */}
      <Divider sx={{ my: 3, bgcolor: "black" }} />

      {/* Footer Text */}
      <Typography
        variant="body2"
        align="center"
        sx={{ color: "black", fontSize: { xs: "10px", md: "12px" } }}
      >
        © {new Date().getFullYear()} | Developed by Pramodya Samarakoon
      </Typography>
    </Box>
  );
};
