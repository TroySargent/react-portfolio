import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/navbar"
import './App.css';

function App() {
  return (
    <>

    <Router>
    <Navbar />
      <Container>
          <Switch>
            <Route exact path="/"  />
            <Route exact path="/resume"  />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact"  />
          </Switch>
      </Container>
    </Router>
 
    </>
  );
}

export default App;
