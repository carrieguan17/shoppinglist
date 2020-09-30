var GroceryList = function(groceries) {
  this.props = {};
  this.props.groceries = groceries;
}

var ChildComponent = function(groceries) {
  super(groceries);
}


class GroceryList {
  constructor(groceries) {
    this.props = {
      groceries: groceries
    }
  }
}

class ChildComponent extends GroceryList {
  constructor(groceries) {
    super(groceries);
  }
}


class Component {
  constructor() {
    this.props = {};
    for(var key of arguments) {
      this.props[key] = arguments[key]
    }
  }
}