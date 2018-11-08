import React from "react";
import { API, countTransfersFunc } from "../constants/Default";
import { Button } from "reactstrap";
import moment from "moment";

class TicketsDisplay extends React.Component {
  constructor(props) {
    super(props);

    // this.countTransfers = this.countTransfers.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount");
    console.log("status!", this.props.status);
    console.log("this.props.data.tickets!", this.props.data);

    this.props.loadTickets(API);
  }

  // countTransfers(stops) {
  //   switch (stops) {
  //   case 0:
  //     return "без пересадок";
  //   case 1:
  //     return "1 пересадка";
  //   case 2:
  //     return "2 пересадки";
  //   case 3:
  //     return "3 пересадки";
  //   }
  // }

  // shouldComponentUpdate(nextProps) {
  //   console.log("shouldComponentUpdate!!!", this.props.data);
  //   console.log("shouldComponentUpdate nextProps.data!!!", nextProps.data);
  //   if (this.props.data !== nextProps.data) {
  //     console.log("true");
  //     return true;
  //   }
  //   console.log("false");
  //   return false;
  //
  // }

  render() {
    const {data, status} = this.props;
    console.log("render111111", data);
    if (status !== "ok") return <div>Идет загрузка...</div>;
    console.log("data.tickets", data);
    return (
      <div>
        {data.tickets.map((item, index) => {
          // console.log("map---------------", item);
          return (
            <div key={index} className="custom-ticket">
              <div className="company">
                <h3>Turkish Airlines</h3>
                <Button color="primary">
                  <a href="#" className={"linkPrices"}>
                    {`Купить за ${item.price} ${this.props.currency}`}
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