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
      var td5 = document.createElement('td')
      var cookButton = document.createElement('button')
      var deleteButton = document.createElement('button')

      cookButton.addEventListener('click', evt => {
        cookButton.parentElement.previousSibling.innerHTML = 'En cours de cuisson'

        p.cook(2000)
        .then(() => {
          cookButton.parentElement.previousSibling.innerHTML = 'Cuite'
        })
      })

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

      td1.innerHTML = p.nom
      td2.innerHTML = p.toppings
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
    })
  })


