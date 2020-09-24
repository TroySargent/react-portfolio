import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Typography, Button} from "@material-ui/core/";
import Box from "@material-ui/core/Box";
import {experiences} from "../static/content/Experiences.json";
import GetAppIcon from '@material-ui/icons/GetApp';;

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#264d73",
    height: '100vh',
    margin: 0
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid #26734c",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "75%",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid #26734c",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "#00ccff #00ccff transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "70%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        margin: "1rem",
        borderColor: "#26734c",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent #00ccff #00ccff",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "#00ccff",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      right: "22%",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
    [theme.breakpoints.up("lg")]: {
      right: "25%",
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