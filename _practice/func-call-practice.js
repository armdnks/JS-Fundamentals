var pizzaMenuOne = { variant: "Beef Pizza", price: 10 };
var pizzaMenuTwo = { variant: "Vegi Pizza", price: 8 };

/**
 *  ## Order Pizza!
 *
 *  @objective  Object.assign()
 *  @objective  call()
 *
 */
function Pizza() {
  this.variant = "";
  this.price = 0;
  this.options = {};
}

Pizza.prototype.selectPizza = function (pizzaMenu, options) {
  Object.assign(this, pizzaMenu);
  this.options = Object.assign({}, options);

  if (this.options.extraCheese === "premium") {
    this.price = premiumCheese.call(this);
  } else if (this.options.extraCheese === "other") {
    this.price = otherCheese.call(this);
  }

  return this;
};

function premiumCheese() {
  return this.price + 7;
}

function otherCheese() {
  return this.price + 3;
}

var pizzaOne = new Pizza();
console.log(pizzaOne.selectPizza(pizzaMenuOne, { extraCheese: "premium" }));
// Pizza { variant: 'Beef Pizza', price: 17, options: { extraCheese: 'premium' } }

var pizzaTwo = new Pizza();
console.log(pizzaTwo.selectPizza(pizzaMenuTwo, { extraCheese: "other" }));
// Pizza { variant: 'Vegi Pizza', price: 11, options: { extraCheese: 'other' } }

var pizzaThree = new Pizza();
console.log(pizzaThree.selectPizza(pizzaMenuOne));
// Pizza { variant: 'Beef Pizza', price: 10, options: {} }
