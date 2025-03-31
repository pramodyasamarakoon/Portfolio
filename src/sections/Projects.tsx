import { Box, Container, Grid } from "@mui/material";
import { Heading } from "../components/Heading";
import { ProjectCard } from "../components/ProjectCard";
import { projectsData } from "../data/projectsData";

export const Projects: React.FC = () => {
  return (
    <>
      <Box
        id="projects"
        sx={{ position: "relative", paddingY: { xs: 2, md: 4 } }}
      >
        {/* Background image */}
        <Box
          sx={{
            backgroundImage: 'url("/assets/projects_back.jpg")',
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

        {/* Main Content */}
        <Container>
          <Heading title="Projects" />

          <Grid container spacing={2} sx={{ paddingY: { xs: 2, md: 4 } }}>
            {projectsData.map((project, index) => (
              <Grid
                key={index}
                size={{ xs: 6, sm: 4, md: 3 }}
                display="flex"
                justifyContent="center"
              >
                <ProjectCard
                  project={project}
                  index={index}
                  projects={projectsData}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};
