import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {changeCheckBoxes} from "../actions/tickets";
import FilterCheckBoxes from "../components/FilterCheckBoxes";

class FilterButtonsContainer extends React.Component {
  render() {
    console.log("this.props.filterCheckboxses222222222222222222", this.props.tickets.filterCheckBoxes);
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