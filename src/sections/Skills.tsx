import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Heading } from "../components/Heading";
import { Skill, skillsData } from "../data/skillsData";

export const Skills: React.FC = () => {
  return (
    <Box
      id="skills"
      sx={{
        position: "relative",
        paddingY: { xs: 2, md: 4 },
        paddingX: { xs: 0, md: 4 },
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          backgroundImage: `url("${process.env.PUBLIC_URL}/assets/skills_back.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      />

      {/* Content */}
      <Container>
        <Heading title="Skills" />
        <Grid
          container
          spacing={2}
          sx={{
            paddingY: { xs: 4, md: 4 },
            paddingX: { xs: 2, md: 4 },
            justifyContent: "center",
          }}
        >
          {skillsData.map((skill: Skill, index: number) => (
            <Grid
              key={index}
              size={{ xs: 4, sm: 3, md: 2 }}
              display="flex"
              justifyContent="center"
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Box
                  component="img"
                  src={skill.icon}
                  alt={skill.label}
                  sx={{
                    width: { xs: 30, sm: 40, md: 40 },
                    height: { xs: 30, sm: 40, md: 40 },
                    marginBottom: 1,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ fontSize: { xs: 10, sm: 12, md: 12 } }}
                >
                  {skill.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
