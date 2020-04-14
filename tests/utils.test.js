const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const expect = chai.expect

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// ========================================================

it("should return the area of a 5 by 6 rectangle", () => {
    const area = utils.area(5, 6)
    expect(area).to.be.a("number")
    expect(area).to.equal(30)
})

it("should return the perimeter of a 5 by 6 rectangle", () => {
    const area = utils.perimeter(5, 6)
    expect(area).to.be.a("number")
    expect(area).to.equal(22)
})

it("should return the area of a circle of radius 5", () => {
    const area = utils.circleArea(5)
    expect(area).to.be.a("number")
    expect(area).to.equal(Math.PI * 25)
})

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

it("Should create a new (object) Item with name and price", () => {
    const item = utils.createItem("apple", 4.99)
    expect(item).to.be.a("object")
    expect(item).to.have.property("name", "apple")
    expect(item).to.have.property("price", 4.99)
    expect(item).to.have.property("quantity", 1)
})


it("Should return an array containing all items in cart", () => {
    utils.clearCart()

    let shoppingCart = utils.getShoppingCart()
    expect(shoppingCart.length).to.equal(0)
})

it("Should add a new item to the shopping cart", () => {
    utils.clearCart()

    const item1 = utils.createItem("apple", 4.99)
    const item2 = utils.createItem("carrot", 10.99)

    utils.addItemToShoppingCart(item1)
    expect(utils.getShoppingCart().length).to.equal(1)
    utils.addItemToShoppingCart(item2)
    expect(utils.getShoppingCart().length).to.equal(2)

    const shoppingCart = utils.getShoppingCart()

    expect(shoppingCart[0]).to.be.a("object")
    expect(shoppingCart[0]).to.have.property("name", "apple")
    expect(shoppingCart[0]).to.have.property("price", 4.99)
    expect(shoppingCart[0]).to.have.property("quantity", 1)

    expect(shoppingCart[1]).to.be.a("object")
    expect(shoppingCart[1]).to.have.property("name", "carrot")
    expect(shoppingCart[1]).to.have.property("price", 10.99)
    expect(shoppingCart[1]).to.have.property("quantity", 1)
})

it("Should return the number of items in the cart", () => {
    utils.clearCart()

    const item1 = utils.createItem("apple", 4.99)
    const item2 = utils.createItem("carrot", 10.99)

    expect(utils.shoppingCartSize()).to.equal(0)
    utils.addItemToShoppingCart(item1)
    expect(utils.shoppingCartSize()).to.equal(1)
    utils.addItemToShoppingCart(item2)
    expect(utils.shoppingCartSize()).to.equal(2)
})

it("Should remove items from cart", () => {
    utils.clearCart()

    const item1 = utils.createItem("apple", 4.99)
    const item2 = utils.createItem("carrot", 10.99)

    expect(utils.shoppingCartSize()).to.equal(0)
    utils.addItemToShoppingCart(item1)
    expect(utils.shoppingCartSize()).to.equal(1)
    utils.addItemToShoppingCart(item2)
    expect(utils.shoppingCartSize()).to.equal(2)

    utils.clearCart()
    expect(utils.shoppingCartSize()).to.equal(0)
})



// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart")

it("Should validate that an empty cart has 0 items")

it("Should return the total cost of all items in the cart")
