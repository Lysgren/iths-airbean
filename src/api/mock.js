async function fetchProducts() {
  // Resolve the products from menu.json after a random timer
  /*
  const delay = Math.floor((Math.random() * 5000) + 1000)
  setTimeout(() => {
    const request = require('./menu.json')
    return request
  }, delay)
  */
  const request = require('./menu.json')
  return request
}

async function registerUser(name, email) {
  // Resolve a random generated ID after a random timer
  // Persist user in localStorage
  let dataBase = JSON.parse(window.localStorage.getItem('dataBase'))

  if (dataBase == null) {
    localStorage.setItem('dataBase', JSON.stringify([]))
    dataBase = JSON.parse(window.localStorage.getItem('dataBase'))
  } 

  for (let i = 0; i < dataBase.length; i++) {
    if (dataBase[i].email == email) {
      return false
    }
  }

  const user = {
    name: name,
    email: email,
    id: Date.now(),
    orderHistory: [],
  }

  dataBase.push(user)
  window.localStorage.setItem('dataBase',  JSON.stringify(dataBase))
  return user
}

async function login(loginData) {
  const dataBase = JSON.parse(window.localStorage.getItem('dataBase'))
  if (dataBase == null) {
    return false 
  }
  const findUser = dataBase.find(user => user.name == loginData.name && user.email == loginData.email)
  return findUser == undefined ? false : findUser
}

async function makeOrder(userId, cardItems) {
  // Resolve with a orderId, order total price and ETA after a random timer
  // Persist order coupled userId in an array in localStorage
  console.log(userId, cardItems)
}

async function fetchOrderHistory(userId) {
  // Resolve an array of orders after a random timer
  console.log(userId)
  return userId.orderHistory
}

export { fetchProducts, registerUser, login, makeOrder, fetchOrderHistory }