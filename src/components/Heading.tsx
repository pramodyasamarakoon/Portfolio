import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

interface HeadingProps {
  title: string;
}

export const Heading: React.FC<HeadingProps> = ({ title }) => {
  const theme = useTheme();

  return (
    <Typography
      variant="h2"
      sx={{
        color: theme.palette.text.primary,
        fontSize: { xs: "24px", md: "40px" },
        fontWeight: 700,
        textAlign: { xs: "center", md: "left" },
        marginTop: { xs: 2, md: 6 },
        marginBottom: { xs: 1, md: 3 },
        paddingTop: { xs: 3, sm: 4, md: 0 },
      }}
    >
      {title}
      <span style={{ color: theme.palette.primary.main }}>.</span>
    </Typography>
  );
};
