import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {changeCheckBoxes} from "../actions/tickets";
import FilterCheckBoxes from "../components/FilterCheckBoxes";
import * as PropTypes from "prop-types";

class FilterButtonsContainer extends React.Component {
  render() {
    return (
      <FilterCheckBoxes
        filterCheckBoxes={this.props.tickets.filterCheckBoxes}
        changeCheckBoxes={this.props.changeCheckBoxes}
        data={this.props.tickets.data}
      />
    );
  }
}

const mapStateToProps = store => ({
  tickets: store.tickets
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    changeCheckBoxes
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FilterButtonsContainer);

FilterButtonsContainer.propsTypes = {
  filterCheckBoxes: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  changeCheckBoxes: PropTypes.func.isRequired,
};