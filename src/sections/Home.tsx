import React from "react";
import { Box, Button, Grid, Link, Typography, useTheme } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Home: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        minHeight: { xs: "300px", md: "100vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingX: 8,
        paddingY: 6,
      }}
    >
      {/* Background Image Box */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url('${process.env.PUBLIC_URL}/assets/developer_back.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
          zIndex: -1,
        }}
      />

      {/* Content Box */}
      <Box sx={{ width: "100%", maxWidth: "1200px" }}>
        <Grid container spacing={4}>
          {/* Text Column */}
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ marginTop: { xs: "40px", md: 0 } }}
          >
            <Typography
              variant="h5"
              sx={{
                color: theme.palette.text.primary,
                fontSize: { xs: "10px", md: "14px" },
              }}
            >
              Hey, I'm Pramodya Samarakoon.
            </Typography>
            <Typography
              variant="h1"
              sx={{
                color: theme.palette.text.primary,
                fontSize: { xs: "40px", md: "50px" },
                fontWeight: "800px",
                lineHeight: 0.9,
              }}
            >
              <span
                style={{
                  fontWeight: "bold",
                  color: theme.palette.primary.main,
                }}
              >
                Full
              </span>
              <span
                style={{
                  color: theme.palette.text.primary,
                  fontWeight: "bold",
                }}
              >
                Stack Developer
              </span>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.primary,
                fontSize: { xs: "10px", md: "14px" },
                lineHeight: 1,
                marginTop: 2,
                fontWeight: "100",
                textAlign: { xs: "justify", md: "left" },
              }}
            >
              A Software Engineer with 2+ years of experience in full-stack
              development. Skilled in React.js, .NET Core, Spring Boot, and
              Flutter, I specialize in creating scalable apps and responsive
              interfaces. Passionate about delivering high-quality, efficient
              software solutions while ensuring innovation and security. I
              thrive in collaborative environments, continuously learning and
              adapting to new technologies. Let's connect and build something
              amazing together!
            </Typography>
            <Box sx={{ display: "flex", gap: { xs: 1, md: 2 }, marginTop: 4 }}>
              <Link href="#experiences">
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 2,
                    backgroundColor: theme.palette.text.primary,
                    color: theme.palette.background.default,
                    "&:hover": {
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.background.default,
                    },
                  }}
                >
                  Experiences
                </Button>
              </Link>

              <Link href="#projects">
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{
                    borderRadius: 2,
                    borderBlockColor: theme.palette.text.primary,
                    color: theme.palette.text.primary,
                    "&:hover": {
                      borderBlockColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  Projects
                </Button>
              </Link>
            </Box>
          </Grid>
          {/* Image Column */}
          <Grid
            size={{ xs: 12, md: 6 }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              component="img"
              src={`${process.env.PUBLIC_URL}/assets/Profile_Image.jpg`}
              alt="My Image"
              sx={{
                width: { xs: "250px", md: "300px" },
                maxWidth: 400,
                height: "auto",
                borderRadius: "50%",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                border: "1px solid grey",
                padding: { xs: "10px", md: "20px" },
              }}
            />
            {/* Social Media Icons */}
            <Box sx={{ display: "flex", gap: 1, marginTop: 2 }}>
              <Link
                href="https://www.linkedin.com/in/pramodyasamarakoon/"
                target="_blank"
                sx={{ color: theme.palette.text.primary }}
              >
                <LinkedInIcon sx={{ fontSize: 20 }} />
              </Link>
              <Link
                href="https://github.com/pramodyasamarakoon"
                target="_blank"
                sx={{ color: theme.palette.text.primary }}
              >
                <GitHubIcon sx={{ fontSize: 20 }} />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
