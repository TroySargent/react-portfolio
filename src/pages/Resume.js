import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Typography, Button} from "@material-ui/core/";
import Box from "@material-ui/core/Box";
import {experiences} from "../static/content/Experiences.json";
import GetAppIcon from '@material-ui/icons/GetApp';;

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#264d73",
    margin: 0,
      height: "100vh",

  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid #26734c",
      right: "0.5rem",
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "90%",
        right: "auto",
        top: 0
      },
    },
  },
  timeLineItem: {
    padding: "2rem",
    borderBottom: "2px solid #26734c",
    position: "relative",
    margin: "0 auto",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "0.5em",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "#00ccff #00ccff transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("sm")]: {
      width: "70%",
      margin: "0 auto",
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 1rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "#00ccff",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      marginRight: "3rem",
      textAlign: "center",
      right: "5%",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
    [theme.breakpoints.up("lg")]: {
      right: "10%",
    },
  },
  heading: {
    color: "white",
    padding: "3rem 0",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "#00ccff",
  },
  subtitle1: {
    color: "white",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Experience <Button href="./assets/Troy_Sargent_Resume.pdf" download><GetAppIcon style={{color:"0ccff"}}/><small style={{color:"white"}}>Resume</small></Button>
      </Typography>
      {experiences.map(experience => {
          return(
              <Box component="div" className={classes.timeLine}>
                <Typography
                  variant="h2"
                  className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                >
                  {experience.timeFrame}
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                  <Typography
                    variant="h5"
                    align="center"
                    className={classes.subHeading}
                  >
                    {experience.role}
                  </Typography>
                  <Typography variant="body1" align="center" className={classes.body1}>
                    {experience.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    className={classes.subtitle1}
                  >
                    {experience.description}
                  </Typography>
                </Box>
        
              </Box>
              )
      })}
    </Box>
  );
};

export default Resume;