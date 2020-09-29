import React from "react";
import Footer from "../components/footer";
import {Card, CardContent, Grid, Container, Typography} from "@material-ui/core/";
function Contact() {
    return (
        <Container>
            <Grid container style={{margin: "30% auto", justifyContent:"center"}} >
                <Card>
                    <CardContent style={{margin: "1em", textAlign:"center", alignItems:"center"}}>
                        <Typography variant="h2">
                        Contact 
                        </Typography>
                        <Typography variant="body1" component="p">
                        I'd love to connect on LinkedIn! 
                        </Typography>
                        <Typography variant="body1" component="p">
                        Send me a connection request or feel free to reach me by email.
                        <br/>
                        Email: <a style={{color:"black"}} href="mailto:troyjsargent@gmail.com">troyjsargent@gmail.com</a> 
                        </Typography>
                    </CardContent>
                    <Footer style={{position: "relative", bottom: "0"}}/>
                </Card>
            </Grid>
        </Container>
    )
};

export default Contact;