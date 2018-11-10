import React from "react";
import {API, countTransfersFunc, changeCoefficientCurrency} from "../constants/Default";
import moment from "moment";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRubleSign, faEuroSign, faDollarSign} from "@fortawesome/free-solid-svg-icons";

const currencyFontAwesome = {
  "RUB": faRubleSign,
  "USD": faEuroSign,
  "EUR": faDollarSign
};


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
                <div className="company-logo">
                  <img src={require("../img/company-logo.png")} />
                </div>
                <button className="company-button">
                  <a href="#" className="linkPrices">
                    Купить <br/>
                    {`за ${Math.ceil(item.price * changeCoefficientCurrency[this.props.currency])} `}
                    <FontAwesomeIcon className="icon-awesome" icon={currencyFontAwesome[this.props.currency]} />
                  </a>
                </button>
              </div>
              <div className="tickets-info">
                <div className="time-and-transfers">
                  <div className="departure-time">{item.departure_time}</div>
                  <div className="transfers">
                    <div className="stops">{countTransfersFunc(item.stops)}</div>
                    <img src={require("../img/plane.png")} />
                  </div>
                  <div className="arrival-time">{item.arrival_time}</div>
                </div>

                <div className="departure-and-arrival">
                  <div className="departure-site-and-date">
                    <div className="departure-destination">{item.origin}, {item.origin_name}</div>
                    <div className="departure-date">{moment(item.departure_date, "DD.MM.YY").locale("ru").format("D MMM YYYY, dd")}</div>
                  </div>
                  <div className="arrival-site-and-date">
                    <div className="arrival-destination">{item.destination_name}, {item.destination}</div>
                    <div className="arrival-date">{moment(item.arrival_date, "DD.MM.YY").locale("ru").format("D MMM YYYY, dd")}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default TicketsDisplay;