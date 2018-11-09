import { defaultErrorMsg } from "../constants/Default";
import axios from "axios";

export const TICKETS_LOAD_REQUEST = "TICKETS_LOAD_REQUEST";
export const TICKETS_LOAD_SUCCESS = "TICKETS_LOAD_SUCCESS";
export const TICKETS_LOAD_FAIL = "TICKETS_LOAD_FAIL";
export const TICKETS_CHANGE_CURRENCY = "TICKETS_CHANGE_CURRENCY";
export const TICKETS_CHANGE_CHECKBOXES = "TICKETS_CHANGE_CHECKBOXES";


export const ticketsRequest = () => ({
  type: TICKETS_LOAD_REQUEST
});

export const ticketsSuccess = (data) => ({
  type: TICKETS_LOAD_SUCCESS,
  payload: data
});

export const ticketsFail = (errorMsg) => ({
  type: TICKETS_LOAD_FAIL,
  payload: errorMsg
});

export const loadTickets = (url) => dispatch => {
  dispatch({
    type: ticketsRequest
  });

  axios.get(url)
    .then(res => {
      if (res.data) {
        dispatch(ticketsSuccess(res.data.tickets));
      } else {
        dispatch(ticketsFail("Ошибка при загрузке страницы..."));
      }
    })
    .catch(() => dispatch(ticketsFail(defaultErrorMsg)));
};


export const changeCurrency = (data, currency) => ({
  type: TICKETS_CHANGE_CURRENCY,
  payload: data,
  currency: currency
});


export const changeCurrencyTickets = (data, index) => dispatch => {
  let currency = "";

  switch (index) {
  case 0:
    currency = "RUB";
    break;
  case 1:
    currency = "USD";
    break;
  case 2:
    currency = "EUR";
    break;
  }

  dispatch(changeCurrency(data, currency));
};

export const isChecked = (event, data) => ({
  type: TICKETS_CHANGE_CHECKBOXES,
  payload: data,
  event: event
});

export const changeCheckBoxes = (event, data) => dispatch => {
  dispatch(isChecked(event, data));
};
