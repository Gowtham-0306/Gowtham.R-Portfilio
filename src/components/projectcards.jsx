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
     <>
  


   
    <Card
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
      margin: "20px auto",
      marginLeft  : " 40px", // Center and add vertical spacing
      maxWidth: 550, // Fixed max-width for better layout in grid
      backgroundColor: "black",
      borderRadius: "16px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      "&:hover": {
        transform: "translateY(-10px)", // Elevte
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
      },
      height: "600px", // Consistent height 
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




      
  
    </div>

    {/* Project Image */}
    <img
      src={myprojects.imageurl}
      alt={myprojects.projectname}
      style={{
    maxHeight : "200px",
     width : "300px" ,
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
        flexGrow: 1, // Makes the content gr
      }}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{
          fontWeight: "bold",
          marginBottom: "8px",
          color: "gold",
          fontFamily : "inherit"
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
            fontWeight: "bold",
            fontFamily : "unset"
          }}
        >
          {myprojects.description}
        </Typography>





        
      </Box>


      <Typography
   
        component="div"
        sx={{
          fontWeight: "bold",
          marginBottom: "8px",
          color: "gold",
        }}
      >
     Technologies used :
      </Typography>


      <Typography
          variant="body6"
          sx={{
            fontWeight: "italic",
            color: "white",
            overflow: "hidden",
            fontSize : "small",
            fontFamily : "sans-serif"
          }}
        >
       React, Node js , Mongo DB , HTML , CSS , Java script

        </Typography>




      <Typography
    
          variant="h6"
          component="div"
          sx={{
            fontWeight: "bold",
            marginBottom: "8px",
            color: "gold",
            fontFamily : "inherit",
            fontSize : "smaller"
          }}
        >
         
        </Typography>



    </CardContent>

    {/* Visit Project Button */}
    






    <Button
      variant="contained"
      color="primary"
      sx={{
        width: "100%",
        borderRadius: "8px",
        marginTop: "auto",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)", // Elev
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
          backgroundColor : "red"
        },
      }}
      onClick={() => window.open(myprojects.url)}
    >
      Visit Project
    </Button>



    <Button
    
    variant="contained"
    color="primary"
    sx={{
      
      width: "100%",
      borderRadius: "8px",
      marginTop: "5px",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      "&:hover": {
        transform: "translateY(-2px)", // Ele
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        backgroundColor : "red"
      },

    }}
    onClick={() => window.open(myprojects.gitbackend)}
  >
    Visit Git Back End
  </Button>



  <Button
    
    variant="contained"
    color="primary"
    sx={{
      
      width: "100%",
      borderRadius: "8px",
      marginTop: "5px",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      "&:hover": {
        transform: "translateY(-2px)", // Elevte the crd
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        backgroundColor : "red"
      },
     
    }}
    onClick={() => window.open(myprojects.gitfrontend)}
  >
    Visit Git Front End
  </Button>


<Grid>


</Grid>

    

  </Card>







 </>
  );
}
