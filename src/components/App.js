import React from "react";
import TicketsDisplayContainer from "../containers/TicketsDisplayContainer";
import Filters from "./Filters";
import Logo from "./Logo";
import {Grid, Row, Col} from "react-bootstrap";

class App extends React.Component {
  render() {
    return (
      <Grid className="header">
        <Logo/>
        <Row>
          <Col md={5} lg={3}>
            <Filters/>
          </Col>
          <Col md={7} lg={9}>
            <TicketsDisplayContainer/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;