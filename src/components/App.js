import React from "react";
import TicketsDisplayContainer from "../containers/TicketsDisplayContainer";
import Filters from "./Filters";
import Logo from "./Logo";
import {Row} from "react-bootstrap";


class App extends React.Component {
  render() {
    return (
      <div className="header">
        <Logo/>
        <Row className="justify-content-center">
          <Filters/>
          <TicketsDisplayContainer/>
        </Row>
      </div>
    );
  }
}

export default App;