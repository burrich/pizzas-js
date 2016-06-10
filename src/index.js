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
  .then(pizzasObjects => {
    var pizzas = pizzasObjects.map(p => {
      var pizza = new Pizza(null, p.nom, 0)
      pizza.setToppings(p.toppings)
      return pizza
    })

    pizzas.forEach(function (p) {
      var tr = document.createElement('tr')
      var td1 = document.createElement('td')
      var td2 = document.createElement('td')
      var td3 = document.createElement('td')
      var td4 = document.createElement('td')
      var button = document.createElement('button')

      var status = null
      switch (p.status) {
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

      button.addEventListener('click', evt => {
        button.parentElement.previousSibling.innerHTML = 'En cours de cuisson'

        p.cook(2000)
        .then(() => {
          button.parentElement.previousSibling.innerHTML = 'Cuite'
        })
      })

      td1.innerHTML = p.nom
      td2.innerHTML = p.toppings
      td3.innerHTML = status
      tr.appendChild(td1)
      tr.appendChild(td2)
      tr.appendChild(td3)
      button.className = 'btn btn-default'
      button.innerHTML = 'Cuire'
      td4.appendChild(button)
      tr.appendChild(td4)
      tbody.appendChild(tr)
    })
  })


