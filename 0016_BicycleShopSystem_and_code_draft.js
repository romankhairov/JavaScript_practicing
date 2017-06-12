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

function mapForEach(arr, fn) {

  var newArr = [];
  for (var i=0; i < arr.length; i++) {
    newArr.push(
      fn(arr[i])
    )
  };

  return newArr;

}

var arr1 = [1,2,3,4,5,10];

console.log(arr1);

var arr2 = mapForEach(arr1, function(item) {
  return item * 2;
});

console.log(arr2);

var arr3 = mapForEach(arr1, function(item) {
  return "this number is " + item;
});

console.log(arr3);

var checkPastLimit = function(limiter, item) {
  return item > limiter;
}

var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);

var checkPastLimitSimplifier = function (limiter) {
  return function(limiter, item) {
    return item > limiter;
  }.bind(this, limiter);
};

var arr5 = mapForEach(arr1, checkPastLimitSimplifier(2));
console.log(arr5);
