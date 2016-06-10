// import { Pizza } from './pizza.js'
// import { PizzaList } from './pizza-list.js'
// import { toppings } from './toppings.js'

// var pizzas = new PizzaList()

// var buttonNewPizza = document.getElementById('createPizza')
// var buttonSavePizza = document.getElementById('savePizza')
// var p = null // pizza

// var toppingsButtons = document.getElementById('toppings')
// Object.keys(toppings).forEach(topping => {
//   const toppingButton = document.createElement('button')
//   toppingButton.innerHTML = topping
//   toppingButton.className = 'btn btn-default'

//   toppingButton.addEventListener('click', evt => {
//     p.addTopping(topping)
//     console.log(p.toppings2string())
//   })

//   toppingsButtons.appendChild(toppingButton)
// })

// buttonNewPizza.addEventListener('click', function (evt) {
//   var name = document.getElementById('name').value
//   p = new Pizza('TEST', name, 10)
//   console.log('Pizza créée', p)
// }, false)

// buttonSavePizza.addEventListener('click', function (evt) {
//   pizzas.addPizza(p)
//     .then(res => {
//       console.log('Pizza ajoutée', res, p)
//     })
// }, false)

var tbody = document.querySelector('#pizzasTable tbody')
var tr = document.createElement('tr')
var td1 = document.createElement('td')
var td2 = document.createElement('td')
var td3 = document.createElement('td')
var button = document.createElement('button')

td1.innerHTML = 'Ma pizza'
td2.innerHTML = 'Ingrédients'
tr.appendChild(td1)
tr.appendChild(td2)
button.className = 'btn btn-default'
button.innerHTML = 'Cuire'
td3.appendChild(button)
tr.appendChild(td3)
tbody.appendChild(tr)

console.log(tbody)
