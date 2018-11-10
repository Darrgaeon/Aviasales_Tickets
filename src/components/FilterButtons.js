import React from "react";
import _ from "lodash";


class Button extends React.Component {
  constructor(props) {
    super(props);

    this.changeCurrency = this.changeCurrency.bind(this);
  }

  changeCurrency(index, data, filterButtons, func) {
    let result = _.cloneDeep(data);
    let filterButtonsClone = _.cloneDeep(filterButtons);

    for (let i = 0; i < filterButtonsClone.length; i++) {
      filterButtonsClone[i].classButton = "currency__button";
    }

    filterButtonsClone[index].classButton = "currency__button__active";

    func(result, index, filterButtonsClone);
  }

  render() {
    return (
      <button className={this.props.classButton}
        onClick={() => this.changeCurrency(
          this.props.index,
          this.props.data,
          this.props.filterButtons,
          this.props.changeCurrencyTickets
        )}
      >{this.props.title}
      </button>
    );
  }
}

class FilterButtons extends React.Component {
  render() {
    const {data, status, filterButtons} = this.props;
    if (status !== "ok") return <div>Идет загрузка...</div>;
    return (
      <div className="currency">
        <p className="currency__title">Валюта</p>
        {filterButtons.map((item, index) => {
          return (
            <Button
              key={index}
              title={item.currency}
              classButton={item.classButton}
              index={index}
              data={data}
              filterButtons={filterButtons}
              changeCurrencyTickets={this.props.changeCurrencyTickets}
            >
            </Button>
          );})}
      </div>
    );
  }
}

export default FilterButtons;