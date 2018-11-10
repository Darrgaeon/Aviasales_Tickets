import React from "react";
import _ from "lodash";


class Checkbox extends React.Component {
  constructor(props) {
    super(props);

    this.isCheckedCheckBoxes = this.isCheckedCheckBoxes.bind(this);
    this.filterTicketsToShow = this.filterTicketsToShow.bind(this);
  }

  isCheckedCheckBoxes(event, index, func, filterCheckBoxes, data) {
    let checkBoxes = _.cloneDeep(filterCheckBoxes);
    checkBoxes[index].isChecked = event.target.checked;

    if (index === 0) {
      for (let i = 1; i < checkBoxes.length; i++) {
        checkBoxes[i].isChecked = false;
      }
    } else {
      for (let i = 1; i < checkBoxes.length; i++) {
        if (checkBoxes[i].isChecked) {
          checkBoxes[0].isChecked = false;
        }
      }
    }

    let newData = this.filterTicketsToShow(checkBoxes, data);


    func(checkBoxes, newData);
  }

  filterTicketsToShow(newFilterCheckboxes, data) {
    let dataClone = _.cloneDeep(data);
    let newData = [];
    let isAnyChecks = false;

    for (let i = 0; i < newFilterCheckboxes.length; i++) {
      if (newFilterCheckboxes[i].isChecked) {
        isAnyChecks = true;
        newData = newData.concat(dataClone.filter(function (item) {
          return newFilterCheckboxes[i].filterFunction(item);
        }));
      }
    }

    return isAnyChecks ? newData : dataClone;
  }

  render() {
    return (
      <div>
        <label className="checkbox">
          <input type="checkbox"
            checked={this.props.isChecked}
            onChange={(event) => this.isCheckedCheckBoxes(
              event,
              this.props.checkBoxIndex,
              this.props.changeCheckBoxes,
              this.props.filterCheckBoxes,
              this.props.data
            )}
          />
          <span className="checkbox__text">{this.props.title}</span>
        </label>
      </div>
    );
  }
}

class FilterCheckBoxes extends React.Component {
  render() {
    return (
      <div className="checkboxes-filters">
        <p className="checkboxes-filters__title">Количество пересадок</p>
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