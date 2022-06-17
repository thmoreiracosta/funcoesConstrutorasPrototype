const p1 = {
    name:"Computador",
    price: 3000.00,
    quantity: 2
}

const Product = function(name, price, quantity) {
    this.name = name,
    this.price = price,
    this.quantity = quantity

    // this.label = function() {
    //     return "Dados: (função interna) " + this.name + ", " + this.price.toFixed(2);
    // }
}

Product.prototype.total = function() {
    return this.price * this.quantity;
}

Product.prototype.add = function(amount) {    
    this.quantity += amount;
  }

  Product.prototype.remove = function(amount) {    
    if (this.quantity >= amount) {
        this.quantity -= amount;
    }
  }

Product.prototype.label = function() {
    return "Dados: " + this.name + ", " + this.price.toFixed(2);
}

const p2 = new Product("Geladeira", 2500.00, 10);
const p3 = new Product("Mouse", 50.0, 4);
