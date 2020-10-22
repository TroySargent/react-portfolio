import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../static/assets/profile.jpeg";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "#264d73",
  },
  subtitle: {
    color: "white",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const TypeAnimation = () => {
  const classes = useStyles();

  return (
    <Container>

    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Troy Sargent" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        Troy Sargent
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Full Stack Engineer",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
          />
      </Typography>
      <Box style={{color:"#222", backgroundColor:"transparent", padding:"0 2rem", margin:"0 auto", justifyContent:"center"}}>
      <Typography variant="h6">
      Troy Sargent is a Full Stack Engineer with a background in data analytics at a Fortune 200 company. 
      </Typography>
      <Typography variant="h6">
      He is thinking about cryptoeconomics and the richness of life. 
      </Typography>
      <Typography variant="h6">
      Open to full-time opportunities. 
      </Typography>
        
      </Box>
    </Box>
          </Container>
  );
};

export default TypeAnimation;