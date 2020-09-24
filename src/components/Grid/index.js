import React from "react";
import { Grid } from '@material-ui/core';
import './style.css';

export default function Grid () {
    return (
        <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="center"
        />
    )
 }