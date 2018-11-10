import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {changeCurrencyTickets} from "../actions/tickets";
import FilterButtons from "../components/FilterButtons";
import * as PropTypes from "prop-types";

class FilterButtonsContainer extends React.Component {
  render() {
    return (
      <FilterButtons
        changeCurrencyTickets={this.props.changeCurrencyTickets}
        data={this.props.tickets.dataToShow}
        status={this.props.tickets.status}
        filterButtons={this.props.tickets.filterButtons}
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

FilterButtonsContainer.propsTypes = {
  changeCurrencyTickets: PropTypes.func.isRequired,
  dataToShow: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  filterButtons: PropTypes.array.isRequired
};