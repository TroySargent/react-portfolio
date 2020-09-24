import React from "react";
import { Card, Grid, CardContent, Typography, CardActions, Button, Chip, Container } from '@material-ui/core';
import {projects} from "../static/content/Portfolio.json";
import Image from 'material-ui-image';
//import all images for webpack
import birdie from "../static/assets/birdie.png";
import moneytrend from "../static/assets/moneytrend.png";
import hr from "../static/assets/hr.png";
import employeedirectory from "../static/assets/employeedirectory.png";
import fitnesstracker from "../static/assets/fitnesstracker.png";
import transactionapp from "../static/assets/transactionapp.png";
// create object to access image by string obj["string"]
let images = {birdie, moneytrend, hr, employeedirectory, fitnesstracker, transactionapp};


function Portfolio() {
    return(
        <Container>

        
        <Grid container spacing={4}> 
        {projects.map(project => {
            return (
        <Grid key={project.name} item xs={12} sm={6} lg={4} style={{marginTop:"3em"}}>
          <Card >
          <CardContent>
        <Typography align="center" variant="h4" gutterBottom>
          {project.name}
        </Typography>
        <Image src={images[project.image]}/>
        <Typography align="center" style={{height:"3em"}} variant="body1" component="p">
        {project.description}
        </Typography>
        <div style={{display: "flex", justifyContent: 'space-around', marginTop: "2em"}}>
        {project.technologies.map(tech => {
            return (
                <Chip 
                key={tech}
                margin="1em"
                label={tech}
                color="primary"
                />
            )
        })} 
        </div>
      </CardContent>
      <CardActions style={{justifyContent: 'center'}}>
        <Button href={project.github} target="_blank" color="primary" variant="outlined"size="medium">Github</Button>
        <Button href={project.demo} target="_blank" color="primary" variant="outlined"size="medium">Demo</Button>
      </CardActions>
          </Card>
        </Grid>
            )
        })}

      </Grid>
      </Container>
    )
};

export default Portfolio;