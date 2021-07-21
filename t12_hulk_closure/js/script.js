const calc = new Calculator();
console.log(
  calc
  .init(2)
  .add(2)
  .mul(3)
  .div(4)
  .sub(2).result // 1
);

//calc.alert();

function Calculator() {
  let result = 0;

 /* this.alert = function() {
    setTimeout(() => alert(result), 5000);
  }; */

  this.init = function(i) {
    this.result = i;
    return this;
  };

  this.add = function(i) {
	this.result += i;
    return this;
  };

  this.mul = function(i) {
    this.result = result * i;
    return this;
  };

  this.div = function(i) {
    this.result = result / i;
    return this;
  };

  this.sub = function(i) {
    this.result = result - i;
    return this;
  };
}
