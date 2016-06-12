import Dexie from 'dexie'

export class PizzaList {
  constructor () {
    this.db = new Dexie('pizzas')
    this.db.version(1).stores({
      pizzas: '++id'
    })
    this.db.open()
  }

  addPizza (pizza) {
    return this.db.pizzas.add(pizza)
  }

  updatePizza (pizzaId, pizza) {
    return this.db.pizzas.update(pizzaId, pizza)
  }

  deletePizza (pizzaId) {
    return this.db.pizzas.delete(pizzaId)
  }

  getPizzas () {
    return this.db.pizzas.toArray()
  }

  with (topping) {
    if (!topping) return this.getPizzas()
      
    return this
      .getPizzas()
      .then(pizzas => pizzas.filter(pizza => pizza.toppings.indexOf(topping) !== -1))
  }
}
