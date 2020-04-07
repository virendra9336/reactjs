import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./App";
import Users from "./pages/users";
import Show from "./pages/show";
import Update from "./pages/update";
import Contact from "./pages/contact";
import Notfound from "./error/notfound";
import Header from "./header/header";
import Footer from "./footer/footer";

const routing = (
  <Router>
    <div>
      <Header />
     
     <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/show" component={Show} />
        <Route path="/update" component={Update} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));