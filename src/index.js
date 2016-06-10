// import { Pizza } from './pizza.js'
// import { PizzaList } from './pizza-list.js'

// var pizza1 = new Pizza('MAR', 'Margherita', 12)
// console.log('pizza1 ')
// console.log(pizza1)

// pizza1.addTopping('mozzarella')
//   .addTopping('mushrooms')
//   .addTopping('mushrooms')
//   .addTopping('mushrooms') // max
//   .addTopping('ham')
// console.log('pizza1 ')
// console.log(pizza1)

// pizza1.removeTopping('ham')
// console.log('pizza1 ')
// console.log(pizza1)
// // pizza2.displayToppings()

// var pizza2 = new Pizza('TEST', 'Pizza test', 12)
// pizza2.addTopping('mozzarella')

// var pizzas = new PizzaList()
// pizzas.addPizza(pizza1)
// pizzas.addPizza(pizza2)
// console.log(pizzas)

// var pizzasWithTopping = pizzas.with('mozzarella')
// console.log('pizzasWithTopping : ' + pizzasWithTopping)
// console.log(pizzasWithTopping)

import { Pizza } from './pizza.js'
import { PizzaList } from './pizza-list.js'
import { toppings } from './toppings.js'

// const p1 = new Pizza('TEST', 'test', 12)
//   .addTopping('mushrooms')

// const p2 = new Pizza('TEST2', 'test2', 12)
//   .addTopping('mushrooms')

// p1.cook(2000)
//   .then(() => {
//     console.log('p1 cuite')
//     return p1.cook(2000)
//   })
//   .then(() => {
//     console.log('p2 cuite')
//   })
//   .catch(err => console.log(err))

var pizzas = new PizzaList()

var buttonNewPizza = document.getElementById('createPizza')
var buttonSavePizza = document.getElementById('savePizza')
var p = null // pizza

var toppingsButtons = document.getElementById('toppings')
Object.keys(toppings).forEach(topping => {
  const toppingButton = document.createElement('button')
  toppingButton.innerHTML = topping
  toppingButton.className = 'btn btn-default'

  toppingButton.addEventListener('click', evt => {
    p.addTopping(topping)
    console.log(p.toppings2string())
  })

  toppingsButtons.appendChild(toppingButton)
})

buttonNewPizza.addEventListener('click', function (evt) {
  var name = document.getElementById('name').value
  p = new Pizza('TEST', name, 10)
  console.log('Pizza créée', p)
}, false)

buttonSavePizza.addEventListener('click', function (evt) {
  pizzas.addPizza(p)
    .then(res => {
      console.log('Pizza ajoutée', res, p)
    })
}, false)


// function getAvg (array) {
//   return array.reduce((acc, cv, idx, arr) => acc + cv / arr.length, 0)
// }

// let cacheOfUsers = null

// function getUsers () {
//   // si cache existe l'utiliser
//   if (cacheOfUsers) {
//     console.log('cache')
//     return Promise.resolve(cacheOfUsers)
//   }

//   // sinon faire la requête et mettre en cache
//   return fetch('users.json')
//     // tranforme la réponse http en json
//     .then((response) => {
//       if (!response.ok) throw Error(response.status)

//       return response.json()
//     })
//     .then(users => {
//       cacheOfUsers = users
//       return users
//     })
// }

// getUsers()
//  .then(users => {
//    console.log('1', users)
//  })

// setTimeout(function () {
//   getUsers()
//   .then(users => {
//     console.log('2', users)
//   })
// }, 2000)
