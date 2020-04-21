// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  return w * h
}

const perimeter = (w, h) => {
  return w + w + h + h
}

const circleArea = r => {
  return Math.PI * r * r
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

shoppingCart = []

function createItem(name, price){
    // Return JSON object of the item
    return { name, price, quantity: 1 }
}

function getShoppingCart(){
    return shoppingCart
}

function shoppingCartSize(){
    return shoppingCart.length;
}

function incrementQuantity(){
    for(let i = 0; i < shoppingCart.length; i++){
        shoppingCart[i]['quantity'] += 1
    }
}

function getTotalCost(){
    let totalCost = 0;
    for(let i = 0; i < shoppingCart.length; i++){
        totalCost += shoppingCart[i]['price']
    }
    return totalCost
}

function addItemToShoppingCart(item){
    shoppingCart.push(item)
}

function clearCart(){
    shoppingCart = []
}

const celsiusToFahrenheit = (celsius) => {
    return celsius * 9 / 5 + 32
}


module.exports = {
  sayHello,
  area,
  perimeter,
  circleArea,
  clearCart,
  createItem,
  getShoppingCart,
  addItemToShoppingCart,
  shoppingCartSize,
  incrementQuantity,
  getTotalCost,
  celsiusToFahrenheit
}
