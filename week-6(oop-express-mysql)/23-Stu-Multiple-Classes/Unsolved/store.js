class Store {
  constructor(name, stock) {
    this.name = name;
    this.stock = stock;
    this.revenue = 0;
  }
  processProductSale(toyName){
    // setting an index for the final check
    let index = 0;
    // go through the list of items in stock
    for (let i = 0; i < this.stock.length; i++){
      // if you find the item you passed in, set the index to equal where that item was in your stock list
      if(this.stock[i].name === toyName){
        index = i;
        break;
      }
    }
    // now you can use the index to to check if there are any left in stock
    // if there is none left, send the message
    if(this.stock[index].count <= 0){
      console.log(`There are no more ${toyName}s in stock`);
      return;
    }
    // if there is stock left, decrease the stock and increase the revenue
    else{
      this.stock[index].count--;
      this.revenue += this.stock[index].price;
    }
  }

  replenishStock(toyName, count){
    // setting an index for the final check
    let index = 0;
    // go through the list of items in stock
    for (let i = 0; i < this.stock.length; i++){
      // if you find the item you passed in, set the index to equal where that item was in your stock list
      if(this.stock[i].name === toyName){
        index = i;
      }
    }
    // now you can use the index to increase the count of the passed item
    this.stock[index].count += count;
  }

  printRevenue() {
    console.log(`The revenue so far is ${this.revenue}`);
  }

  welcome() {
    console.log(`Welcome to ${this.name}!`);
  }
}

module.exports = Store;
