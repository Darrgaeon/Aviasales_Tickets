import React from "react";
import FilterCheckBoxesContainer from "../containers/FilterCheckBoxesContainer";
import FilterButtonsContainer from "../containers/FilterButtonsContainer";


class Filters extends React.Component {
  render() {
    return (
      <div className="block-filter">
        <FilterButtonsContainer/>
        <FilterCheckBoxesContainer/>
      </div>
    );
  }
}

export default Filters;