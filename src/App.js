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

    <Router>
    <Navbar />
  
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/resume"  component={Resume}/>
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
 
    </Router>
 
    </>
  );
}

export default App;
