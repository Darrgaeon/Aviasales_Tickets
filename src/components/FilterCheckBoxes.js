import React from "react";
import _ from "lodash";
// import {filterCheckboxses} from "../constants/Default";

class Checkbox extends React.Component {
  constructor(props) {
    super(props);



    this.isCheckedCheckBoxes = this.isCheckedCheckBoxes.bind(this);
    this.filterTicketsToShow = this.filterTicketsToShow.bind(this);
  }


  isCheckedCheckBoxes(event, index, func, filterCheckBoxes, data) {
    let checkBoxses = _.cloneDeep(filterCheckBoxes);
    console.log("checkBoxses", checkBoxses);
    // console.log("data", data);
    checkBoxses[index].isChecked = event.target.checked;

    let newData = this.filterTicketsToShow(checkBoxses, data);


    func(checkBoxses, newData);
  }

  filterTicketsToShow(newFilterCheckboxses, data) {
    let dataClone = _.cloneDeep(data);
    console.log("dataClone", dataClone);
    // console.log("newFilterCheckboxses[i].filterFunction(item)", newFilterCheckboxses[0].filterFunction());
    let newData = [];
    let isAnyChecks = false;
    for (let i = 0; i < newFilterCheckboxses.length; i++) {
      if (newFilterCheckboxses[i].isChecked) {
        isAnyChecks = true;
        newData = newData.concat(dataClone.tickets.filter(function (item) {
          return newFilterCheckboxses[i].filterFunction(item);
        }));
      }
    }
    console.log("newData11111", newData);
    console.log("dataClone22222", dataClone);

    return isAnyChecks ? newData : dataClone;
  }



  render() {
    return (
      <div>
        <label className="checkbox">
          <input type="checkbox" checked={this.props.isChecked} onClick={(event) => this.isCheckedCheckBoxes(event, this.props.checkBoxIndex, this.props.changeCheckBoxes, this.props.filterCheckBoxes, this.props.data )}/>
          <span className="checkbox__text">{this.props.title}</span>
        </label>
      </div>
    );
  }
}

class FilterCheckBoxes extends React.Component {
  render() {
    console.log("89888888888888888888888",this.props.filterCheckBoxes[0].isChecked);
    return (
      <div className="container-checkboxes-filters">
        <p className="title">Количество пересадок</p>
        {this.props.filterCheckBoxes.map((item, index) => (
          <Checkbox
            title={item.title}
            key={index}
            isChecked={item.isChecked}
            checkBoxIndex={index}
            changeCheckBoxes={this.props.changeCheckBoxes}
            filterCheckBoxes={this.props.filterCheckBoxes}
            data={this.props.data}
          />
        ))}
      </div>
    );
  }
}

export default FilterCheckBoxes;