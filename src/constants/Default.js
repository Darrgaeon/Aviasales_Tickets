export const defaultErrorMsg = "Сервер временно недоступен";
export const API = "https://raw.githubusercontent.com/KosyanMedia/test-tasks/master/aviasales/tickets.json";

export const countTransfersFunc = (stops) => {
  switch (stops) {
  case 0:
    return "без пересадок";
  case 1:
    return "1 пересадка";
  case 2:
    return "2 пересадки";
  case 3:
    return "3 пересадки";
  }
};

export const nameCurrency = ["RUB", "USD", "EUR"];
export const changeCoefficientCurrency = {"RUB": 1, "USD": 1/60, "EUR": 1/70};

