import { Pizza } from './pizza.js'
import { PizzaList } from './pizza-list.js'

var pizzas = new PizzaList()
var p = new Pizza('TEST', 'test', 10)
p.addTopping('mozzarella')
p.addTopping('eggs')
pizzas.addPizza(p)


var tbody = document.querySelector('#pizzasTable tbody')

pizzas
  .getPizzas()
  .then(pizzas => {
    pizzas.forEach(function (p) {
      var tr = document.createElement('tr')
      var td1 = document.createElement('td')
      var td2 = document.createElement('td')
      var td3 = document.createElement('td')
      var button = document.createElement('button')

      td1.innerHTML = p.nom
      td2.innerHTML = p.toppings
      tr.appendChild(td1)
      tr.appendChild(td2)
      button.className = 'btn btn-default'
      button.innerHTML = 'Cuire'
      td3.appendChild(button)
      tr.appendChild(td3)
      tbody.appendChild(tr)
    })
  })
