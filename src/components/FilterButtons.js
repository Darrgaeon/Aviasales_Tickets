import React from "react";
import { changeCurrency, test} from "../constants/Default";
import _ from "lodash";


class Button extends React.Component {
  constructor(props) {
    super(props);

    this.changeCurrency = this.changeCurrency.bind(this);
  }


  changeCurrency(index, data, func) {
    console.log("changeCurrencychangeCurrencychangeCurrency", data);
    let result = _.cloneDeep(data);
    console.log("changeCurrencychangeCurrencychangeCurrency", result);
   //let result = [];
    // console.log("!!!!!!!", dataClone[0].price * test[index]);

    for (let i = 0; i < result.tickets.length; i++) {
      let newPrice = Math.ceil(result.tickets[i].price * test[index]);
      result.tickets[i].price = newPrice;

      // let a = dataClone[i].price * test[index];
      //console.log(" dataClone[i]", dataClone[i].price * test[index]);
      // dataClone[i].price = a;

    }

    console.log("for result!!!!!695461689465", result.tickets[0]);



    // for(let i in result){
    //   let newPrice = Math.ceil(result.tickets[i].price * test[index]);
    //   console.log("newPricenewPricenewPrice", newPrice);
    //   result[i].tickets.price = newPrice;
    //   //dataClone = Math.ceil(dataClone[i].price * test[index]);
    // }

    // console.log("!!!!!!!", result);

    func(result, index);
  }

  render() {
    return (
      <button className="button-currency" onClick={() => this.changeCurrency(this.props.index, this.props.data, this.props.changeCurrencyTickets )}>{this.props.title}</button>
    );
  }
}

class FilterButtons extends React.Component {
  render() {
    const {data, status} = this.props;
    if (status !== "ok") return <div>Идет загрузка...</div>;
    console.log("data FilterButtons", data);
    return (
      <div>
        <p className="title">Валюта</p>
        {changeCurrency.map((item, index) => {
          return (
            <Button
              key={index}
              title={item.title}
              index={index}
              id={this.props.id}
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