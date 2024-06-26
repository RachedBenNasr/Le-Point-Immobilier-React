import React from "react";
import ReactDOM from "react-dom";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./style.css";
import Home from "./views/home";
import NotFound from "./views/not-found";
import Promote from "./views/promote";
import Buying from "./views/buying";
import Publish from "./views/publish";
import Contact from "./views/contact";
import Consulting from "./views/consulting";
import Services from "./views/services";
import Renting from "./views/renting";
import opportunities from "./views/opportunities";
import Commercial from "./views/commercial";
import Thanking from "./views/thanking";
import ThankingPromoter from "./views/thanking-promoter";

const firebaseConfig = {
  apiKey: "AIzaSyDM-Zt-YIpUKD7CaSaVFHiJdY7HnD-A8p0",
  authDomain: "le-point-immobilier.firebaseapp.com",
  databaseURL:
    "https://le-point-immobilier-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "le-point-immobilier",
  storageBucket: "le-point-immobilier.appspot.com",
  messagingSenderId: "711594524556",
  appId: "1:711594524556:web:43d27637584c00010de0a9",
  measurementId: "G-RK3770XVBM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Promote} exact path="/promote" />
        <Route component={Buying} exact path="/buying" />
        <Route component={Publish} exact path="/publish" />
        <Route component={Contact} exact path="/contact" />
        <Route component={Consulting} exact path="/consulting" />
        <Route component={Services} exact path="/service" />
        <Route component={Renting} exact path="/renting" />
        <Route component={opportunities} exact path="/opportunities" />
        <Route component={Thanking} exact path="/thanking" />
        <Route component={ThankingPromoter} exact path="/thanking-promoter" />
        <Route component={Commercial} exact path="/commercial" />
        <Route component={NotFound} path="**" />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
