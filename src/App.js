import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Services from "./components/Pages/Services";

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path='/contact' component={Contact}/>
        <Route exact path='/services' component={Services}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
