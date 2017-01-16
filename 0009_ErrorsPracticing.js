//Creating custom error syntax
//We use "throw" to create custom error and printing out message
var summ = function (n) {
  if (n >= 15) throw new Error("n should be less or equal then 15");
    return n + 15;
  };

//summ(20);

//Making a processing of the error
try {
  summ(20);
} catch (e) {
  console.log("Unable to calculate: " + e.message);
} finally {

}
