import React, { useState } from "react";
import { About } from "../data/aboutData";
import {
  Box,
  Collapse,
  Divider,
  Grid,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

interface cardProps {
  title: string;
  body: About[];
  isCollapsed?: boolean;
  isSplit?: boolean;
}

export const Card: React.FC<cardProps> = ({
  title,
  body,
  isCollapsed = false,
  isSplit = false,
}) => {
  const [expanded, seExpanded] = useState(!isCollapsed);
  const theme = useTheme();
  return (
    <Box
      sx={{
        mt: 1,
        p: 3,
        border: `1px solid ${theme.palette.text.secondary} `,
        borderRadius: 0,
        // boxShadow: 1,
      }}
    >
      {/* Title Row */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" fontSize={{ xs: "14px", md: "18px" }}>
          {title}
        </Typography>
        {isCollapsed && (
          <IconButton onClick={() => seExpanded(!expanded)} size="medium">
            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        )}
      </Box>

      {/* Divider */}
      <Divider sx={{ my: 1 }} />

      {/* Collapsible Content */}
      <Collapse in={expanded}>
        <Grid container spacing={1}>
          {body.map((item, index) => (
            <Grid key={index} size={{ xs: 12, md: isSplit ? 6 : 12 }}>
              <Typography
                fontWeight="bold"
                fontSize={{ xs: "12px", md: "12px" }}
              >
                {item.title}
              </Typography>
              <Typography variant="body2">
                {item.inDate} {item.outDate ? `- ${item.outDate}` : ""}
              </Typography>
              <Typography variant="body2">{item.institute}</Typography>
              {item.description && (
                <Typography variant="body2">{item.description}</Typography>
              )}
            </Grid>
          ))}
        </Grid>
      </Collapse>
    </Box>
  );
};
