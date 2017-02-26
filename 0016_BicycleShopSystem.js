var accountBalance = {
  total:0,
  add: function(price) {
      this.total += price;

  }
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

console.log("Your actual account balance is " + accountBalance.total);
