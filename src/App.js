import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact"
import './App.css';

function App() {
  return (
    <>

    <Router basename="/react-portfolio">
    <Navbar />
  
          <Switch>
            <Route  path="/resume"  component={Resume}/>
            <Route  path="/portfolio" component={Portfolio} />
            <Route  path="/contact" component={Contact} />
            <Route  path="*" component={Home} /> 
          </Switch>
 
    </Router>
 
    </>
  );
}

export default App;
