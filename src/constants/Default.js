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

// export const filterCheckboxses = [
//   {title: "Все", filterFunction: (item) => item.stops <= 3},
//   {title: "Без пересадок", filterFunction: (item) => item.stops === 0},
//   {title: "1 пересадка", filterFunction: (item) => item.stops === 1},
//   {title: "2 пересадки", filterFunction: (item) => item.stops === 2},
//   {title: "3 пересадки", filterFunction: (item) => item.stops === 3}
// ];

export const changeCurrency = [
  {title: "RUB", 0: 1},
  {title: "USD", 1: 1/60},
  {title: "EUR", 2: 1/70}
];

export const test = {
  0: 1,
  1: 1/60,
  2: 1/70
};

// export const countTransfers = ["Все", "Без пересадок", "1 пересадка", "2 пересадки", "3 пересадки"];
