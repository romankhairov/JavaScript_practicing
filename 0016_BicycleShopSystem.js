var accountBalance = {
  total:0,
  add: function(price) {
      this.total += price;
      this.lastSellAmount = price;
  },
  sell: function(unit, amount)
    switch (unit) {
      case "a": this.add(0,00 * amount);
        break;
      case "b": this.add(0,00 * amount);
        break;
      case "c": this.add(0,00 * amount);
        break;
    }
    return true;
  },
  cancelSell: function() {
      this.total -= this.lastSellAmount;
      this.lastSellAmount = 0;
    }

};

accountBalance.sell("a",2);
accountBalance.sell("b",1);
accountBalance.sell("c",1);


accountBalance.cancelSell();
accountBalance.sell("a",1)

console.log("Your actual account balance is " + accountBalance.total);
