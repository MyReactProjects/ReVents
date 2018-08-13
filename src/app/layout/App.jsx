import React, { Component } from "react";
import logo from "./logo.svg";
import { Container } from "semantic-ui-react";

import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container className="main" >
          <EventDashboard />
        </Container>
      </div>
    );
  }
}

export default App;
