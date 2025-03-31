import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { useEffect, useState } from "react";
import { navLinks } from "../data/navLinks";

export const Navbar: React.FC = () => {
  const theme = useTheme();
  const [activeSection, setActiveSection] = useState<string>("home");
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  // Smooth scroll to section
  const handleScrollTo = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Track active section on scroll
  const handleScroll = () => {
    const scrollPosition = window.scrollY + 100;
    navLinks.forEach(({ section }) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const { offsetTop, offsetHeight } = sectionElement;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "transparent",
        backdropFilter: "blur(10px)",
        boxShadow: "none",
        paddingX: 4,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: theme.palette.text.primary,
            fontSize: { xs: "1.25rem", md: "1.75rem" },
          }}
        >
          PramodyaS.
        </Typography>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          {navLinks.map(({ section, label }) => (
            <Button
              key={section}
              onClick={() => handleScrollTo(section)}
              sx={{
                color:
                  activeSection === section
                    ? theme.palette.primary.main
                    : theme.palette.text.primary,
                fontSize: "14px",
                textTransform: "none",
                "&:hover": { color: theme.palette.primary.main },
              }}
            >
              {label}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* CV Download Button */}
          <Tooltip title="Download Resume">
            <IconButton
              onClick={() => {
                const cvUrl = "/assets/SM_Pramodya_Samarakoon.pdf";
                const link = document.createElement("a");
                link.href = cvUrl;
                link.download = "SM_Pramodya_Samarakoon.pdf";
                link.click();
              }}
              sx={{
                color: theme.palette.primary.main,
                "&:hover": { color: theme.palette.text.primary },
                paddingX: 2,
                paddingY: 1,
                borderRadius: 1,
              }}
            >
              <Typography
                variant="body1"
                sx={{ color: theme.palette.text.primary, marginRight: 1 }}
              >
                Resume
              </Typography>
              <CloudDownloadIcon />
            </IconButton>
          </Tooltip>

          {/* Mobile Drawer Toggle Button */}
          <IconButton
            edge="end"
            onClick={() => setMobileOpen(!mobileOpen)}
            sx={{
              display: { xs: "flex", md: "none" },
              color: theme.palette.text.primary,
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Drawer for Navigation */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >
        <List sx={{ width: 250 }}>
          {navLinks.map(({ section, label }) => (
            <ListItem
              component="button"
              key={section}
              onClick={() => handleScrollTo(section)}
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingX: 2,
                paddingY: 1,
                boxShadow: "none",
              }}
            >
              <Typography variant="body1">{label}</Typography>
            </ListItem>
          ))}
        </List>

        {/* Copyright Text */}
        <Box
          sx={{
            position: "absolute",
            bottom: 16,
            left: 0,
            right: 0,
            textAlign: "center",
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontSize: "10px", color: theme.palette.text.primary }}
          >
            © {new Date().getFullYear()} PramodyaS.
          </Typography>
        </Box>
      </Drawer>
    </AppBar>
  );
};
