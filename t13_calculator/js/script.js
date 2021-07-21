var Calculator = function() {
  this.result = 0;
};

Calculator.prototype.init = function(i) {
  this.result = i;
  return this;
};

Calculator.prototype.add = function(i) {
  this.result = this.result + i;
  return this;
};

Calculator.prototype.mul = function(i) {
  this.result = this.result * i;
  return this;
};

Calculator.prototype.div = function(i) {
  this.result = this.result / i;
  return this;
};

Calculator.prototype.sub = function(i) {
  this.result = this.result - i;
  return this;
};

Calculator.prototype.alert = function() {
  setTimeout(() => alert(this.result), 5000);
  return this;
};