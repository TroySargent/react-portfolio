import React from "react";
import { Card, Grid, CardContent, Typography, CardActions, Button, Chip } from '@material-ui/core';
import {projects} from "../static/content/Portfolio.json";
import Image from 'material-ui-image';

function Portfolio() {
    return(
        <Grid container spacing={3}> 
        {projects.map(project => {
            return (
        <Grid item xs={12} sm={6} lg={4}>
          <Card>
          <CardContent>
        <Typography align="center" variant="h4" gutterBottom>
          {project.name}
        </Typography>
        <Image src={project.image}/>
        <Typography align="center" style={{height:"3em"}} variant="body1" component="p">
        {project.description}
        </Typography>
        <div container style={{display: "flex", justifyContent: 'space-around', marginTop: "1em"}}>
        {project.technologies.map(tech => {
            return (
                <Chip 
                margin="1em"
                label={tech}
                color="primary"
                />
            )
        })} 
        </div>
      </CardContent>
      <CardActions style={{justifyContent: 'center'}}>
        <Button href="https://www.google.com" color="primary" variant="outlined"size="medium">Github</Button>
        <Button color="primary" variant="outlined"size="medium">Demo</Button>
      </CardActions>
          </Card>
        </Grid>
            )
        })}

      </Grid>
    )
};

export default Portfolio;