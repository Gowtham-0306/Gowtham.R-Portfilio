import React from 'react';
import { Grid, Typography, ThemeProvider } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import styles from './banner.module.css';
import Cardcomponent from './cards';
import { Projectcards } from './projectcards';

const theme = createTheme({
    typography: {
        fontFamily: 'Arial, sans-serif',
        // Define other global typography settings here
    },
});


const myprojects =[
{projectname : "Ecommerce",
  url : "https://sparkly-fox-55236c.netlify.app/",
  description : "An ecommerce project showcasing products with detailed descriptions, responsive design, and seamless cart functionality."
  , imageurl : "https://static.vecteezy.com/system/resources/previews/006/547/178/original/creative-modern-abstract-ecommerce-logo-design-colorful-gradient-online-shopping-bag-logo-design-template-free-vector.jpg" ,
  gitfrontend : "https://github.com/Gowtham-0306/Guvi-Ecom-frontend-fe.git" ,  gitbackend : "https://github.com/Gowtham-0306/Guvi-Ecom-nodejs-be.git" , skills : " React, Node JS , Mongo DB , Java Script , HTML , CSS"
},
{projectname : "taskmanager",
  url : "https://gentle-cuchufli-dcdb92.netlify.app/",
  imageurl : "https://cdn.dribbble.com/users/268665/screenshots/1554614/icon.jpg",
  
  description : "An intuitive task manager app designed for efficient task organization, prioritization, and seamless user experience across devices."
, gitfrontend : "https://github.com/Gowtham-0306/guvi-final--FE.git" ,  gitbackend : "https://github.com/Gowtham-0306/guvi-final-node.git" , skills : " React, Node JS , Mongo DB , Java Script , HTML , CSS"
},
{projectname : "factsgenerator",
  url : "https://rococo-jalebi-21a133.netlify.app/"
  , imageurl : "https://tse2.mm.bing.net/th?id=OIP.Tnzm9Ip_dG65T7eVXYl5vwHaHa&pid=Api&P=0&h=220",
  description : "A fun and educational random facts generator app providing users with interesting and surprising facts on various topics."
,  gitfrontend : "https://github.com/Gowtham-0306/CatfactsFE.git" ,  gitbackend : "https://github.com/Gowtham-0306/catfactsBE.git" , skills : " React, Node JS , Mongo DB , Java Script , HTML , CSS"

}
,

{projectname : "Student data manager",
  url : "https://soft-bubblegum-37a3e6.netlify.app/"
  , imageurl : "https://tse2.mm.bing.net/th?id=OIP.46WR6sNkWz4jp_OE3XPpNwHaMp&pid=Api&P=0&h=220",
  description : "A student data manager app designed to help organize and track student information across various academic metrics"
,  gitfrontend : "https://github.com/Gowtham-0306/guvi-studentdetails-FE.git" ,  gitbackend : "https://github.com/Gowtham-0306/guvi-studentdetails.git" , skills : " React, Node JS , Mongo DB , Java Script , HTML , CSS"

}




]





const technologies = [
    {
      name: "HTML",
      description: "HyperText Markup Language is the standard language for creating webpages and web applications."
      , imageurl : "https://tse4.mm.bing.net/th?id=OIP.bI8KDjd8-nDvzTX_Uok7FwHaHa&pid=Api&P=0&h=220"} ,
    {
      name: "MongoDB",
      description: "A NoSQL database known for its flexibility and scalability, using a document-oriented data model."
      , imageurl : "https://logodix.com/logo/2090046.png"} ,
    {
      name: "Node.js",
      description: "A JavaScript runtime built on Chrome's V8 JavaScript engine, used for building scalable network applications."
      , imageurl : "https://tse1.mm.bing.net/th?id=OIP.Tf4BFI6846neirVSebC0vAHaEi&pid=Api&P=0&h=220"} ,
    {
      name: "React",
      description: "A JavaScript library for building user interfaces, developed by Facebook, allowing for the creation of reusable UI components."
      , imageurl : "https://tse1.mm.bing.net/th?id=OIP.JCGGgssMIuUrZFU3I6jv0AHaHC&pid=Api"} ,
    {
      name: "JavaScript",
      description: "A versatile programming language commonly used for creating interactive effects within web browsers."
      , imageurl : "data:image/png;base64,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"} ,
    {
      name: "MySQL",
      description: "An open-source relational database management system that uses Structured Query Language (SQL) for accessing and managing data."
      , imageurl :"https://tse2.mm.bing.net/th?id=OIP.Ue2JZ0sSt-1MEZJNdi9IfwHaIi&pid=Api&P=0&h=220"} ,
  ];
  




var skillsets = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1MndL-Xp1JcnqaB0YOqTp6zDjrwYyGKsPA&s","data:image/png;base64,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",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1MndL-Xp1JcnqaB0YOqTp6zDjrwYyGKsPA&s" ,
    "data:image/png;base64,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",
    "data:image/png;base64,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"
];

export function Nameboard() {
    return (
        <ThemeProvider theme={theme}>

          <Grid sm={12}>

          
            <Grid container className={styles.Nameboard} item sm={12}>
                <Typography component="div" className={styles.customFontStyle}>
                    <Typography variant="h3" gutterBottom style={{"color" : "white" , "marginLeft" : "60px" , "fontSize" : "medium",
                         "fontFamily" : "unset"
                    }} onMouseEnter={(e) => e.target.style.color = 'gold'} onMouseLeave={(e) => e.target.style.color = 'white'}>
                        Hi! This is Gowtham
                    </Typography>
                    <Typography variant="body1" style={{"color" : "#FF7F7F", "marginLeft" : "60px"

, "fontFamily" : "sans-serif" , fontStyle : "italic"

                    }} onMouseEnter={(e) => e.target.style.color = 'Red'} onMouseLeave={(e) => e.target.style.color = '#FF7F7F'}>
                        A full-stack developer proficient in React, JavaScript, MongoDB, SQL, and Node.js. Expert in designing responsive UIs, building scalable APIs, and managing databases. Combines strong problem-solving skills with a passion for creating seamless user experiences and efficient server-side solutions
                    </Typography>

<Typography variant="h1" style={{"color" : "white", "marginLeft" : "60px" , "marginTop" : "15px" , "fontSize" : "medium"}}  onMouseEnter={(event)=>event.target.style.color ="gold"} onMouseLeave={(event)=>{event.target.style.color ="white"}} >

Skills

</Typography >
<Grid container style={{"display" : "flex" , "alignItems" : "center"
    , "justifyContent" : "center" ,}}>


        
{technologies.map((item)=>(

<Cardcomponent key={item} technologies={item}/>

))


}

       


{/* <Grid item style={{"padding" : "20px"}}>

                   
<img src="data:image/png;base64,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" alt="" style={{ borderRadius: "4%", border: "2px solid #fff", width: "200px", height: "200px" }} />
</Grid> */}

</Grid>
                         
                </Typography>
               




                
            </Grid>






<Grid sm={12} className={styles.Nameboard} item>

<Typography variant="h3" gutterBottom style={{"color" : "white" , "marginLeft" : "60px" , "fontSize" : "medium",
                         "fontFamily" : "unset"
                    }} onMouseEnter={(e) => e.target.style.color = 'gold'} onMouseLeave={(e) => e.target.style.color = 'white'}>
                        Projects :
                    </Typography>


                    <Grid  container style={{"display" : "flex" , "alignItems" : "center"
    , "justifyContent" : "center" ,}}
     
    >
      {myprojects.map((item, index) => (
        <Grid 
          item 
          key={index} 
          xs={12}  // Full width 
          sm={6}   // Half width 
          md={4}   // One-third 
          lg={3}   // One-fourth 
        >
          <Projectcards myprojects={item} />
        </Grid>
      ))}
    </Grid>




  
</Grid>

            </Grid>




        </ThemeProvider>
    );
}

export default Nameboard;
