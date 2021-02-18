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
    orderHistory: {},
    password: 'skurt25'
  }
  let userList = localStorage.getItem('userDataBase')
  if (!userList) {
    userList = []
  }
  // Fixa validering av email (om det redan finns ett konto registererad med en email så ska det inte gå igenom)

  console.log(userList)
  userList.push(user)
  localStorage.setItem('userDataBase', userList)
  //userList databas dummy för alla användare
  // push user to local storage
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

  // return rätt username & email return historisk

  // return rätt username & email

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