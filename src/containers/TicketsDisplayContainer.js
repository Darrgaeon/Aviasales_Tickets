import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as PropTypes from "prop-types";
import {loadTickets} from "../actions/tickets";
import TicketsDisplay from "../components/TicketsDisplay";


class TicketsDisplayContainer extends React.Component {
  render() {
    return (
      <TicketsDisplay
        loadTickets={this.props.loadTickets}
        data={this.props.tickets.dataToShow}
        status={this.props.tickets.status}
        currency={this.props.tickets.currency}
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

TicketsDisplayContainer.propsTypes = {
  loadTickets: PropTypes.func.isRequired,
  dataToShow: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

