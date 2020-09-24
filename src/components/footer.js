import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedIn from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#264d73",
},
root: {
    "& .MuiSvgIcon-root" : {
      fill: "00ccff",
      "&:hover": {
        fill: "#00ccff",
        fontSize: "1.8rem",
      },
    }
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction style={{padding: "0"}} href="https://github.com/TroySargent" icon={<GitHubIcon />} className={classes.root} />
      <BottomNavigationAction style={{padding: "0"}} href="mailto:troyjsargent@gmail.com"icon={<MailOutlineIcon />} className={classes.root} />
      <BottomNavigationAction style={{padding: "0"}} href="https://www.linkedin.com/in/troysargent/" icon={<LinkedIn />} className={classes.root} />
    </BottomNavigation>
  );
};
export default Footer;