import { Grid } from "@mui/material";
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useState } from "react";

export function Projectcards({ myprojects }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
      margin: "20px auto",
      marginLeft  : " 40px", // Center and add vertical spacing
      maxWidth: 350, // Fixed max-width for better layout in grid
      backgroundColor: "black",
      borderRadius: "16px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      "&:hover": {
        transform: "translateY(-10px)", // Elevates the card upward slightly on hover
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
      },
      height: "530px", // Consistent height across devices
    }}
  >
    {/* Floating Icon at the Top */}
    <div
      style={{
        position: "absolute",
        top: "16px",
        right: "16px",
        color: "gold",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
        fontWeight: "bold",
      }}
    >
      <WorkspacesIcon style={{ color: "gold" }} />
    </div>

    {/* Project Image */}
    <img
      src={myprojects.imageurl}
      alt={myprojects.projectname}
      style={{
        height: "auto",
        width: "100%",
        maxHeight: "300px",
        objectFit: "cover",
        borderTopLeftRadius: "16px",
        borderTopRightRadius: "16px",
      }}
    />

    {/* Card Content */}
    <CardContent
      sx={{
        padding: "16px",
        textAlign: "center",
        flexGrow: 1, // Makes the content grow to fill space
      }}
    >
      <Typography
        variant="h5"
        component="div"
        sx={{
          fontWeight: "bold",
          marginBottom: "8px",
          color: "gold",
        }}
      >
        {myprojects.projectname}
      </Typography>

      {/* Description Box */}
      <Box sx={{ overflow: "hidden", marginBottom: "8px" }}>
        <Typography
          variant="body1"
          sx={{
            fontWeight: "italic",
            color: "white",
            overflow: "hidden",
          }}
        >
          {myprojects.description}
        </Typography>
      </Box>
    </CardContent>

    {/* Visit Project Button */}
    <Button
      variant="contained"
      color="primary"
      sx={{
        width: "100%",
        borderRadius: "8px",
        marginTop: "auto",
      }}
      onClick={() => window.open(myprojects.url)}
    >
      Visit Project
    </Button>
  </Card>
  );
}
