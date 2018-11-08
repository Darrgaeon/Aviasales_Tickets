import React from "react";
import TicketsDisplayContainer from "../containers/TicketsDisplayContainer";
import Filters from "./Filters";
import FilterButtonsContainer from "../containers/FilterButtonsContainer";
import { Grid, Row, Col } from "react-bootstrap";
import {API} from "../constants/Default";



// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { loadTickets } from "../actions/tickets";

class App extends React.Component {

  // componentDidMount() {
  //   this.props.loadTickets(API);
  // }

  render() {
    return (
      <Grid className="header">
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

// const mapStateToProps = store => ({
//   tickets: store.tickets
// });
//
// const mapDispatchToProps = dispatch =>
//   bindActionCreators({
//     loadTickets
//   }, dispatch);
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;