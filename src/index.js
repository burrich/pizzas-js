import { Nom } from './noms.js'
import { Pizza } from './pizza.js'
import { PizzaList } from './pizza-list.js'

var pizzas = new PizzaList()
// var p = new Pizza('TEST', 'test', 10)
// p.addTopping('mozzarella')
// p.addTopping('eggs')
// pizzas.addPizza(p)

var tbody = document.querySelector('#pizzasTable tbody')

pizzas
  .getPizzas()
  .then(pizzasObjects => {
    var pizzas = pizzasObjects.map(p => {
      var pizza = new Pizza(null, p.nom, 0)
      pizza.setToppings(p.toppings)
      return pizza
    })
    pizzas.forEach(lignePizza)
  })
function lignePizza (pizza) {
  var tr = document.createElement('tr')
  var td1 = document.createElement('td')
  var td2 = document.createElement('td')
  var td3 = document.createElement('td')
  var td4 = document.createElement('td')
  var td5 = document.createElement('td')
  var cookButton = document.createElement('button')
  var deleteButton = document.createElement('button')

  cookButton.addEventListener('click', evt => {
    cookButton.parentElement.previousSibling.innerHTML = 'En cours de cuisson'

    pizza.cook(2000)
      .then(() => {
        cookButton.parentElement.previousSibling.innerHTML = 'Cuite'
      })
  })

  var status = null
  switch (pizza.status) {
    case 0:
      status = 'Pas cuite'
      break
    case 1:
      status = 'En cours de cuisson'
      break
    case 2:
      status = 'Cuite'
      break
    default:
      break
  }

  td1.innerHTML = pizza.nom
  td2.innerHTML = pizza.toppings
  td3.innerHTML = status
  tr.appendChild(td1)
  tr.appendChild(td2)
  tr.appendChild(td3)

  cookButton.className = 'btn btn-default'
  cookButton.innerHTML = 'Cuire'
  deleteButton.className = 'btn btn-default'
  deleteButton.innerHTML = 'Supprimer'
  td4.appendChild(cookButton)
  td5.appendChild(deleteButton)
  tr.appendChild(td4)
  tr.appendChild(td5)
  tbody.appendChild(tr)
}

var buttonNewPizza = document.getElementById('createPizza')
// var buttonSavePizza = document.getElementById('nomPizza')
// var p = null // pizza

// var toppingsButtons = document.getElementById('toppings')
var nomDeLapizza = document.getElementById('nomPizza')
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

buttonNewPizza.addEventListener('click', function (evt) {
  var name = Nom[Math.floor(Math.random() * 4) + 1]
  var p = new Pizza('TEST', name, 10)
  nomDeLapizza.innerHTML = name
  pizzas.addPizza(p)
  lignePizza(p)

  console.log('Pizza créée', p)
}, false)
// buttonSavePizza.addEventListener('click', function (evt) {
//   pizzas.addPizza(p)
//     .then(res => {
//       console.log('Pizza ajoutée', res, p)
//     })
// }, false
