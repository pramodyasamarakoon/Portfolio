import React from "react";
import { Heading } from "../components/Heading";
import { Box, Container, Grid } from "@mui/material";
import { Card } from "../components/Card";
import { academicData, extraCData, researchData } from "../data/aboutData";

export const About: React.FC = () => {
  return (
    <Box id="about" sx={{ position: "relative", paddingY: { xs: 2, md: 4 } }}>
      {/* Background image */}
      <Box
        sx={{
          backgroundImage: 'url("/assets/about_back.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.05,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      />

      {/* Main Content */}
      <Container>
        <Heading title="About" />
        <Grid container spacing={2} sx={{ pt: 2 }}>
          <Grid size={12}>
            <Card
              title="Academic Qualifications"
              body={academicData}
              isSplit={true}
            />
            <Card title="Research Publication" body={researchData} />
            <Card
              title="Extra Curricular Activities"
              body={extraCData}
              isSplit={true}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
