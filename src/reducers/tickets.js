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
    console.log("TICKETS_LOAD_SUCCESS!!!!!!!!", action.payload);
    return {
      ...state,
      data: action.payload,
      dataToShow: action.payload,
      status: "ok"
    };

  case TICKETS_LOAD_FAIL:
    return {...state,
      message: action.payload,
      status: "not"
    };

  case TICKETS_CHANGE_CURRENCY:
    console.log("TICKETS_CHANGE_CURRENCY!!!!!!!!", action.payload, action.currency);
    return{...state,
      dataToShow: action.payload,
      currency: action.currency
    };


  case TICKETS_CHANGE_CHECKBOXES:
    console.log("TICKETS_CHANGE_CHECKBOXES!!!!!!!!", action.payload, action.dataToShow);
    console.log("TICKETS_CHANGE_CHECKBOXES222222", action.dataToShow);
    return{...state,
      filterCheckBoxes: action.payload,
      dataToShow: action.dataToShow
    };

  default:
    return state;
  }
}