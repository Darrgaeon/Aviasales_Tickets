import {
  TICKETS_LOAD_REQUEST,
  TICKETS_LOAD_SUCCESS,
  TICKETS_LOAD_FAIL,
  TICKETS_CHANGE_CURRENCY,
  TICKETS_CHANGE_CHECKBOXES
} from "../actions/tickets";

const initialState = {
  message: "",
  status: "",
  data: [],
  dataToShow: [],
  currency: "RUB",
  filterButtons: [
    {currency: "RUB", classButton: "currency__button__active"},
    {currency: "USD", classButton: "currency__button"},
    {currency: "EUR", classButton: "currency__button"}
  ],
  filterCheckBoxes: [
    {title: "Все", filterFunction: (item) => item.stops <= 3, isChecked: true},
    {title: "Без пересадок", filterFunction: (item) => item.stops === 0, isChecked: false},
    {title: "1 пересадка", filterFunction: (item) => item.stops === 1, isChecked: false},
    {title: "2 пересадки", filterFunction: (item) => item.stops === 2, isChecked: false},
    {title: "3 пересадки", filterFunction: (item) => item.stops === 3, isChecked: false}
  ]
};

export function getTickets(state = initialState, action) {
  switch (action.type) {

  case TICKETS_LOAD_REQUEST:
    return {...state,
      message: "",
      status: "",
      data: [],
      dataToShow: []
    };

  case TICKETS_LOAD_SUCCESS:
    return {...state,
      data: action.payload,
      dataToShow: action.payload,
      status: "ok"
    };

  case TICKETS_LOAD_FAIL:
    return {...state,
      message: action.payload,
    };

  case TICKETS_CHANGE_CURRENCY:
    return {...state,
      dataToShow: action.payload,
      currency: action.currency,
      filterButtons: action.classButtons
    };

  case TICKETS_CHANGE_CHECKBOXES:
    return {...state,
      dataToShow: action.payload,
      filterCheckBoxes: action.event
    };

  default:
    return state;
  }
}