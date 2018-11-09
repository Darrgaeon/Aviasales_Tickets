import React from "react";
import {nameCurrency} from "../constants/Default";
import _ from "lodash";


class Button extends React.Component {
  constructor(props) {
    super(props);

    this.changeCurrency = this.changeCurrency.bind(this);
  }

  changeCurrency(index, data, func) {
    let result = _.cloneDeep(data);

    func(result, index);
  }

  render() {
    return (
      <button className="currency_button"
        onClick={() => this.changeCurrency(
          this.props.index,
          this.props.data,
          this.props.changeCurrencyTickets
        )}
      >{this.props.title}
      </button>
    );
  }
}

class FilterButtons extends React.Component {
  render() {
    const {data, status} = this.props;
    if (status !== "ok") return <div>Идет загрузка...</div>;
    return (
      <div className="currency">
        <p className="currency__title">Валюта</p>
        {nameCurrency.map((item, index) => {
          return (
            <Button
              key={index}
              title={item}
              index={index}
              data={data}
              changeCurrencyTickets={this.props.changeCurrencyTickets}
            >
            </Button>
          );})}
      </div>
    );
  }
}

export default FilterButtons;