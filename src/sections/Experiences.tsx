import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { Heading } from "../components/Heading";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab";
import { Experience, experienceData } from "../data/experienceData";

// Experience Section Component
export const Experiences: React.FC = () => {
  return (
    <Box
      sx={{
        position: "relative",
      }}
      id="experiences"
    >
      {/* Background Image Box */}
      <Box
        sx={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/assets/experiences_back.jpg')`,
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

      {/* Main Content Box */}
      <Box sx={{ paddingY: { xs: 2, md: 4 }, paddingX: 1 }}>
        <Container>
          <Heading title="Experiences" />

          <Grid container spacing={4} sx={{ paddingY: { xs: 2, md: 4 } }}>
            <Grid size={{ xs: 12, md: 12 }}>
              {/* MUI Timeline Component */}
              <Timeline position="alternate-reverse">
                {experienceData.map((exp: Experience, index: number) => (
                  <TimelineItem key={index}>
                    <TimelineSeparator>
                      <TimelineDot color={exp.dotColor} />
                      {index < experienceData.length - 1 && (
                        <TimelineConnector />
                      )}{" "}
                      {/* Avoid the last connector */}
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography
                        variant="h4"
                        sx={{ fontSize: { xs: 18, md: 26 } }}
                      >
                        {exp.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ fontSize: { xs: 12, md: 14 } }}
                      >
                        {exp.company} | {exp.startDate} - {exp.endDate}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: { xs: 10, md: 12 },
                          display: { xs: "none", md: "block" },
                        }}
                      >
                        {exp.description}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ fontSize: { xs: 8, md: 10 }, fontWeight: "bold" }}
                      >
                        Technical Stack - {exp.techStack.join(", ")}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
