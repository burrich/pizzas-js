import { Nom } from './noms.js'
import { Pizza } from './pizza.js'
import { PizzaList } from './pizza-list.js'

var pizzasList = new PizzaList()
pizzasList
  .getPizzas()
  .then(pizzasJson => {
    var pizzas = pizzasJson.map(p => {
      console.log(p)
      var pizza = new Pizza(p.name, p.id, p.status)
      pizza.setToppings(p.toppings)
      return pizza
    })

    pizzas.forEach(ajoutLignePizza)
  })
  
function ajoutLignePizza (pizza) {
  var tbody = document.querySelector('#pizzasTable tbody')
  var tr = document.createElement('tr')
  var td1 = document.createElement('td')
  var td2 = document.createElement('td')
  var td3 = document.createElement('td')
  var td4 = document.createElement('td')
  var td5 = document.createElement('td')
  var cookButton = document.createElement('button')
  var deleteButton = document.createElement('button')

  cookButton.addEventListener('click', evt => {
    var statusElt = cookButton.parentElement.previousSibling
    statusElt.innerHTML = 'En cours de cuisson'

    pizza
      .cook(2000)
      .then(pizza => {
        statusElt.innerHTML = 'Cuite'
        cookButton.setAttribute('disabled', 'disabled')
        pizzasList.updatePizza(pizza.id, pizza)
      })
      .catch(err => console.log('Cook error : ', err))
  })

  deleteButton.addEventListener('click', evt => {
    console.log('pizza a supprimer : ', pizza)
    pizzasList.deletePizza(pizza.id)
    deleteButton.parentElement.parentElement.remove()
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

  td1.innerHTML = pizza.name
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
buttonNewPizza.addEventListener('click', function (evt) {
  var name = Nom[Math.floor(Math.random() * 4) + 1]
  var p = new Pizza(name)
  pizzasList.addPizza(p)
  ajoutLignePizza(p)

  console.log('Pizza créée', p)
})
