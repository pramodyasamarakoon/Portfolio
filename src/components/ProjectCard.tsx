import React, { useState } from "react";
import { Project } from "../data/projectsData";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";

interface ProjectCardProps {
  project: Project;
  index: number;
  projects: Project[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  projects,
}) => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOpenDialog = (index: number) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setSelectedIndex(null);
    setIsOpen(false);
  };

  const selectedProject =
    selectedIndex != null ? projects[selectedIndex] : null;
  return (
    <>
      <Box
        onClick={() => handleOpenDialog(index)}
        sx={{
          display: "block",
          cursor: "pointer",
        }}
      >
        <Card
          sx={{
            maxWidth: 345,
            boxShadow: 3,
            borderRadius: 2,
            transition: "all 0.3s ease-in-out",
            willChange: "transform, box-shadow",
            display: "block",
            "&:hover": {
              boxShadow: "0 5px 10px rgba(0, 0, 0, 1)",
              transform: "translateY(-8px)",
              cursor: "pointer",
            },
          }}
        >
          {/* Card Media Section with Two Images */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              width: "100%",
              height: 100,
            }}
          >
            {project.mainImg && project.mainImg.length > 0 ? (
              project.mainImg.slice(0, 2).map((img, index) => (
                <CardMedia
                  key={index}
                  component="img"
                  image={img}
                  alt={`Project Image ${index + 1}`}
                  sx={{
                    flex: 1,
                    objectFit: "cover",
                    borderRight: index === 0 ? "2px solid white" : "none",
                  }}
                />
              ))
            ) : (
              <CardMedia
                component="img"
                image={`${process.env.PUBLIC_URL}/assets/project_images_not_found.jpg`}
                alt="Project Image Not Found"
                sx={{
                  flex: 1,
                  objectFit: "cover",
                }}
              />
            )}
          </Box>

          <CardContent>
            {/* Title */}
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ fontSize: { xs: 12, md: 12 } }}
            >
              {project.title}
            </Typography>

            {/* Short Description */}
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.primary,
                mt: 1,
                fontSize: { xs: 10, md: 10 },
              }}
            >
              {project.descriptionShort}
            </Typography>

            {/* Tech stack */}
            <Box mt={2} display="flex" flexWrap="wrap" gap={0.3}>
              {project.techStack.map((tech, index) => (
                <Chip
                  key={index}
                  label={tech}
                  size="small"
                  sx={{
                    backgroundColor: theme.palette.secondary.main,
                    color: theme.palette.background.default,
                    paddingX: { xs: "2px", md: "4px" },
                    fontSize: { xs: "8px", md: "8px" },
                  }}
                />
              ))}
            </Box>

            {/* Button */}
            <Button
              variant="contained"
              size="small"
              onClick={() => handleOpenDialog(index)}
              sx={{ mt: 2, backgroundColor: theme.palette.primary.main }}
              fullWidth
            >
              <VisibilityIcon sx={{ xs: "10px", md: "12px" }} />
            </Button>
          </CardContent>
        </Card>
      </Box>

      {/* Dialog */}
      <Dialog open={isOpen} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        {selectedProject && (
          <>
            <DialogTitle>
              {selectedProject.title}
              <IconButton
                aria-label="close"
                onClick={handleCloseDialog}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers>
              {/* Project Imgs */}
              <Box
                display="flex"
                flexWrap="wrap"
                gap={2}
                justifyContent="center"
              >
                {selectedProject.images &&
                  selectedProject.images.map((image, index) => (
                    <CardMedia
                      key={index}
                      component="img"
                      image={image}
                      alt={`Project Img ${index + 1}`}
                      sx={{
                        width: "auto",
                        maxWidth: { xs: 100, sm: 200, md: 600 },
                        height: { xs: 100, sm: 200 },
                        objectFit: "cover",
                        borderRadius: 2,
                      }}
                    />
                  ))}
              </Box>

              {/* Description */}
              {selectedProject.descriptionLong ? (
                selectedProject.descriptionLong.map((desc, index) => (
                  <Typography
                    variant="body1"
                    sx={{ marginTop: 2, textAlign: "justify" }}
                    key={index}
                  >
                    {desc}
                  </Typography>
                ))
              ) : (
                <Typography variant="body1" sx={{ marginTop: 2 }}>
                  {selectedProject.descriptionLong
                    ? selectedProject.descriptionLong
                    : selectedProject.descriptionShort}
                </Typography>
              )}

              {/* Tech Stack */}
              <Box mt={2} display="flex" flexWrap="wrap" gap={1}>
                {selectedProject.techStack.map((tech, i) => (
                  <Chip
                    key={i}
                    label={tech}
                    size="small"
                    sx={{
                      backgroundColor: theme.palette.secondary.main,
                      color: theme.palette.background.default,
                      fontSize: "10px",
                      paddingX: "4px",
                    }}
                  />
                ))}
              </Box>

              {/* GitHub Links */}
              <Box mt={3} mb={6} display="flex" justifyContent="center" gap={2}>
                {selectedProject.githubLinkFrontend ? (
                  <Button
                    variant="contained"
                    color="primary"
                    href={selectedProject.githubLinkFrontend}
                    target="_blank"
                    size="small"
                    sx={{
                      fontSize: { xs: "10px", md: "10px" },
                    }}
                  >
                    {isSmallScreen
                      ? "Frontend Repo"
                      : "GitHub Repo for Frontend"}
                  </Button>
                ) : null}
                {selectedProject.githubLinkBackend ? (
                  <Button
                    variant="contained"
                    color="primary"
                    href={selectedProject.githubLinkBackend}
                    target="_blank"
                    sx={{
                      fontSize: { xs: "10px", md: "10px" },
                    }}
                  >
                    {isSmallScreen ? "Backend Repo" : "GitHub Repo for Backend"}
                  </Button>
                ) : null}
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </>
  );
};
