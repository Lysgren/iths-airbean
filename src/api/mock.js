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
  console.log(name, email)
  // const randomID = Math.floor((Math.random() * 5) + 1)
  const user = {
    name: name,
    email: email,
    randomID: 123467,
    orderHistory: [],
    password: 'skurt25'
  }
  let userList = localStorage.getItem('userDataBase')
  if (!userList) {
    userList = []
  }
  userList.push(user)
  localStorage.setItem('userDataBase', userList)


  login(user.name, user.email)
  //userList databas dummy för alla användare
  // push user to local storage
}

//loggin storage i local för inloggad

async function login(name, email) {
  console.log(name, email)
  //localStorage.setItem('loggedIN', user)
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

export { fetchProducts, registerUser, makeOrder, fetchOrderHistory }