import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadTickets } from "../actions/tickets";
import TicketsDisplay from "../components/TicketsDisplay";

class TicketsDisplayContainer extends React.Component {
  render() {
    console.log("TicketsDisplayContainer", this.props.tickets.dataToShow);
    return (
      <TicketsDisplay
        loadTickets={this.props.loadTickets}
        data={this.props.tickets.dataToShow}
        status={this.props.tickets.status}
        currency={this.props.tickets.currency}
        // key={this.props.tickets.status}
      />
    );
  }
}

const mapStateToProps = store => ({
  tickets: store.tickets,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    loadTickets,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TicketsDisplayContainer);