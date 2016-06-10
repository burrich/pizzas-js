
import { Nom } from './noms.js'
import { Pizza } from './pizza.js'
import { PizzaList } from './pizza-list.js'
import { toppings } from './toppings.js'



var pizzas = new PizzaList()

var buttonNewPizza = document.getElementById('createPizza')
var buttonSavePizza = document.getElementById('savePizza')
var p = null // pizza

var toppingsButtons = document.getElementById('toppings')
var nomDeLapizza = document.getElementById('nomPizza')
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
  var name = Nom[Math.floor(Math.random() * 4) + 1]
  p = new Pizza('TEST', name, 10)
  
  nomDeLapizza.innerHTML = name
  console.log('Pizza créée', p)
}, false)

buttonSavePizza.addEventListener('click', function (evt) {
  pizzas.addPizza(p)
    .then(res => {
      console.log('Pizza ajoutée', res, p)
    })
}, false)

