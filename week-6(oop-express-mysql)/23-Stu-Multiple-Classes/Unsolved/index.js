const Store = require("./store");
const { toys } = require("./toy");

const store = new Store("Big Al's Toy Barn", toys);
/*
new Toy("Action Figure", 14.99, 5),
  new Toy("Rare Toy", 17.99, 1)
*/
store.welcome();
store.processProductSale("Action Figure"); // rev + 14.99, AF = 4
store.processProductSale("Action Figure"); // rev + 14.99, AF = 3
store.processProductSale("Rare Toy"); // rev + 17.99, RT = 0
store.processProductSale("Action Figure"); // rev + 14.99, AF = 2

store.printRevenue(); //62.96

store.processProductSale("Rare Toy"); // not enough in stock

store.replenishStock("Rare Toy", 2); // add 2 to stock
store.processProductSale("Rare Toy"); // rev + 17.99, RT = 1

store.printRevenue(); //80.95

