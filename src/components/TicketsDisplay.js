import React from "react";
import {API, countTransfersFunc, changeCoefficientCurrency} from "../constants/Default";
import {Button} from "reactstrap";
import moment from "moment";

class TicketsDisplay extends React.Component {

  componentDidMount() {
    this.props.loadTickets(API);
  }

  render() {
    const {data, status} = this.props;
    if (status !== "ok") return <div>Идет загрузка...</div>;
    return (
      <div>
        {data.map((item, index) => {
          return (
            <div key={index} className="custom-ticket">
              <div className="company">
                <h3>Turkish Airlines</h3>
                <Button color="primary">
                  <a href="#" className={"linkPrices"}>
                    {`Купить за ${Math.ceil(item.price * changeCoefficientCurrency[this.props.currency])} ${this.props.currency}`}
                  </a>
                </Button>
              </div>
              <div className="departure">
                <div className="departure-time">{item.departure_time}</div>
                <div className="departure-destination">{item.origin}, {item.origin_name}</div>
                <div className="departure-date">{moment(item.departure_date, "DD.MM.YY").locale("ru").format("D MMM YYYY, dd")}</div>
              </div>
              <div className="stops">
                <p>{countTransfersFunc(item.stops)}</p>
              </div>
              <div className="arrival">
                <div className="arrival-time">{item.arrival_time}</div>
                <div className="arrival-destination">{item.destination}, {item.destination_name}</div>
                <div className="arrival-date">{moment(item.arrival_date, "DD.MM.YY").locale("ru").format("D MMM YYYY, dd")}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default TicketsDisplay;