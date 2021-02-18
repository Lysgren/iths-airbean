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
  let dataBase =  JSON.parse(window.localStorage.getItem('dataBase'))

  if (dataBase == null) {
    localStorage.setItem('dataBase', JSON.stringify([]))
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
  console.log(dataBase)

  window.localStorage.setItem('dataBase',  JSON.stringify(dataBase))

  return true

}

async function login(name, email) {
  console.log(name, email)
  let userList = localStorage.getItem('userDataBase')
  const currentUser = userList.find(user => user.name == name && user.email == email)
  console.log(currentUser)
  
  if (currentUser) {
    localStorage.setItem('loggedIN', currentUser)
    return true
  } else {
    return false
  }
  // Fixa så att den retunerar ett felmedelande i still med "Ingen användare funnen"
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