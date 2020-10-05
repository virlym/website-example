function MiniBank(balance) {
  this.balance = balance;
  this.statement = [balance];
  this.updateBalance = (value) => {
    this.balance += value;
    this.updateStatement(this.balance);
  }
  this.updateStatement = () => {
    this.statement.push(this.balance);
  }
  this.getStatement = () => {
    const statementCopy = this.statement;
    return (statementCopy);
  };
  this.printStatement = () => {
    for(const returns of this.getStatement()){
      console.log(`Statement: ${returns}`);
    }
  };
  this.getBalance = () => {
    return this.balance;
  };
  this.printBalance = () => {
    console.log(`Balance: ${this.getBalance()}`);
  };
  this.deposit = (value) => {
    if(value <= 0){
      console.log("please deposit acutal money");
      return;
    }
    else if(value > 0){
      this.updateBalance(value);
    }
  }
  this.withdraw = (value) => {
    if(value <= 0){
      console.log("please withdraw acutal money");
      return;
    }
    else if(value > this.balance){
      console.log("you do not have enough funds for this withdraw");
      return;
    }
    else if((value > 0) && (value < this.balance)){
      this.updateBalance (-value);
    }
  }
}

const personalBank = new MiniBank(2);
personalBank.printBalance(); // 2
personalBank.deposit(5);
personalBank.printBalance(); // 7
personalBank.withdraw(3);
personalBank.printBalance(); // 4
personalBank.withdraw(5); // not enough funds
personalBank.withdraw(-5); // need actual money
personalBank.deposit(-5); // need actual money
personalBank.printBalance(); // 4
personalBank.printStatement(); // 2, 7, 4