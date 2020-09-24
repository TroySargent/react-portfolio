import React from "react";
import Footer from "../components/footer";
import {Card, CardContent, Grid, Container, Typography} from "@material-ui/core/";
function Contact() {
    return (
        <Container>
            <Grid container style={{margin: "10% auto", justifyContent:"center"}} >
                <Card style={{height: "40vh", width:"60vh"}}>
                    <CardContent style={{height:"33vh", textAlign:"center", alignItems:"center"}}>
                        <Typography variant="h2">
                        Contact 
                        </Typography>
                        <Typography variant="body1" component="p">
                        I'd love to connect on LinkedIn! Send me a connection request or feel free to reach me by email.
                        <br/>
                        Email: <a href="mailto:troyjsargent@gmail.com">troyjsargent@gmail.com</a> 
                        </Typography>
                    </CardContent>
                    <Footer/>
                </Card>
            </Grid>
        </Container>
    )
};

export default Contact;