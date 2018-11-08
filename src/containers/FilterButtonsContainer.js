import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {changeCurrencyTickets} from "../actions/tickets";
import FilterButtons from "../components/FilterButtons";

class FilterButtonsContainer extends React.Component {
  render() {
    return (
      <FilterButtons
        changeCurrencyTickets={this.props.changeCurrencyTickets}
        data={this.props.tickets.data}
        status={this.props.tickets.status}
      />
    );
  }
}

const mapStateToProps = store => ({
  tickets: store.tickets
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    changeCurrencyTickets
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FilterButtonsContainer);